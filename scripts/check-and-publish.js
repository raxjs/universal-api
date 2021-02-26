/**
 * Scripts to check unpublished version and run publish
 */
const { join } = require('path');
const { spawnSync } = require('child_process');
const axios = require('axios');
const semver = require('semver');
const sourceMap = require('../api-config.js');
const mainPkgInfo = require('../package.json');

function checkVersion(callback) {
  const ret = []; // { name: 'foo', workDir, latest: 'x.x.x', local: 'x.x.x', shouldBuild }
  let finishCount = 0;
  function finish() {
    finishCount++;
    if (finishCount === Object.keys(sourceMap).length) {
      // check main
      checkVersionExists(mainPkgInfo.name, mainPkgInfo.version)
      .then((exists) => {
        if (!exists) {
          ret.push({
            key: 'main',
            name: mainPkgInfo.name,
            outDir: join(__dirname, '../dist/main'),
            local: mainPkgInfo.version,
            // If exists scripts.build, then run it.
            shouldBuild: true,
          });
        }

        callback(ret);
      });
    }
  }
  Object.entries(sourceMap).map(([key, value]) => {
    const packageInfo = value.pkgInfo;
    packageInfo.forEach(pkgInfo => {
      checkVersionExists(pkgInfo.name, pkgInfo.version)
      .then((exists) => {
        if (!exists) {
          ret.push({
            key,
            name: pkgInfo.name,
            outDir: join(__dirname, '../dist/lib/' + pkgInfo.name),
            local: pkgInfo.version,
            // If exists scripts.build, then run it.
            shouldBuild: true,
          });
        }

        finish();
      });
    })
  });
}

function checkVersionExists(pkg, version) {
  return axios(`http://registry.npmjs.com/${encodeURIComponent(pkg)}/${encodeURIComponent(version)}`, { timeout: 2000 })
    .then((res) => res.status === 200)
    .catch(err => false);
}

function npmPublish(tag, outDir) {
  // spawnSync('npm', [
  //   'config',
  //   `set`,
  //   'registry',
  //   'https://registry.npmjs.org/',
  // ], {
  //   stdio: 'inherit',
  //   cwd: outDir,
  // });
  spawnSync('npm', [
    'publish',
    '--tag=' + tag,
    '--access=public',
  // use default registry
  ], {
    stdio: 'inherit',
    cwd: outDir,
  });
}

function publish(key, pkg, outDir, version, shouldBuild, tag) {
  console.log('[PUBLISH]', `${pkg}@${version}`);

  if (shouldBuild) {
    // npm run build
    const { status } = spawnSync('npm', [
      'run',
      key === 'main' ? 'build:main' : 'build',
      key === 'main' ? '' : key
    ], {
      stdio: 'inherit',
      cwd: join(__dirname, '../'),
    });

    if (status === 0) {
      // npm publish
      npmPublish(tag, outDir);
    }
  } else {
    // npm publish
    npmPublish(tag, outDir);
  }
}
function publishDocs() {
  const { status } = spawnSync('npm', [
    'run',
    `docs:build`,
  ], {
    stdio: 'inherit',
    cwd: join(__dirname, '../'),
  });
  if (status === 0) {
    // docs publish
    spawnSync('npm', [
      'run',
      `docs:deploy`,
    ], {
      stdio: 'inherit',
      cwd: join(__dirname, '../'),
    });
  }
}

function isPrerelease(v) {
  const semVer = semver.parse(v);
  if (semVer === null) return false;
  return semVer.prerelease.length > 0;
}
function setNpmRegister(v) {
  spawnSync('npm', [
    'run',
    `setNpmRegistry`,
  ], {
    stdio: 'inherit',
    cwd: join(__dirname, '../'),
  });
}

function checkVersionAndPublish() {
  checkVersion((ret) => {
    if (ret.length === 0) {
      console.log('[PUBLISH] No diff with all packages.');
      return;
    } else {
      console.log('[PUBLISH] Will publish following packages:');
    }
    // setNpmRegister();
    for (let i = 0; i < ret.length; i++) {
      const { key, name, outDir, local, shouldBuild } = ret[i];
      const tag = isPrerelease(local) ? 'beta' : 'latest';
      console.log(`--- ${name}@${local} current tag: ${tag} ---`);
      publish(key, name, outDir, local, shouldBuild, tag);
    }
    publishDocs();
  });
}

checkVersionAndPublish();
