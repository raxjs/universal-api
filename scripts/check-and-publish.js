/**
 * Scripts to check unpublished version and run publish
 */
const { existsSync, readdirSync, readFileSync, existsSync } = require('fs');
const { join } = require('path');
const { spawnSync } = require('child_process');
const axios = require('axios');
const semver = require('semver');

function checkVersion(folder, callback) {
  const ret = []; // { name: 'foo', workDir, latest: 'x.x.x', local: 'x.x.x', shouldBuild }
  if (existsSync(folder)) {
    const packages = readdirSync(folder);
    console.log('[PUBLISH] Start check with following packages:');
    console.log(packages.map(p => '- ' + p).join('\n'));

    let finishCount = 0;
    function finish() {
      finishCount++;
      if (finishCount === packages.length) {
        callback(ret);
      }
    }

    for (let i = 0; i < packages.length; i++) {
      const packageFolderName = packages[i];
      const packageInfoPath = join(folder, packageFolderName, 'package.json');
      if (existsSync(packageInfoPath)) {
        const packageInfo = JSON.parse(readFileSync(packageInfoPath));
        checkVersionExists(packageInfo.name, packageInfo.version)
          .then((exists) => {
            if (!exists) {
              ret.push({
                name: packageInfo.name,
                workDir: join(folder, packageFolderName),
                local: packageInfo.version,
                // If exists scripts.build, then run it.
                shouldBuild: !!(packageInfo.scripts && packageInfo.scripts.build),
              });
            }

            finish();
          });
      }
    }
  } else {
    callback(ret);
  }
}

function checkVersionExists(pkg, version) {
  return axios(`http://registry.npmjs.com/${encodeURIComponent(pkg)}/${encodeURIComponent(version)}`, { timeout: 2000 })
    .then((res) => res.status === 200)
    .catch(err => false);
}

function publish(pkg, workDir, version, shouldBuild, tag) {
  console.log('[PUBLISH]', `${pkg}@${version}`);

  // npm install
  spawnSync('npm', [
    'install',
  ], {
    stdio: 'inherit',
    cwd: workDir,
  });

  if (shouldBuild) {
    // npm run build
    spawnSync('npm', [
      'run',
      'build',
    ], {
      stdio: 'inherit',
      cwd: workDir,
    });
  }

  if (existsSync(join(workDir, 'lib')) || existsSync(join(workDir, 'build'))) {
    // npm publish
    spawnSync('npm', [
      'publish',
      '--tag=' + tag,
      // use default registry
    ], {
      stdio: 'inherit',
      cwd: workDir,
    });
  }
}

function isPrerelease(v) {
  const semVer = semver.parse(v);
  if (semVer === null) return false;
  return semVer.prerelease.length > 0;
}

function checkVersionAndPublish() {
  checkVersion(join(__dirname, '../packages'), (ret) => {
    console.log('');
    if (ret.length === 0) {
      console.log('[PUBLISH] No diff with all packages.');
    } else {
      console.log('[PUBLISH] Will publish following packages:');
    }

    for (let i = 0; i < ret.length; i++) {
      const { name, workDir, local, shouldBuild } = ret[i];
      const tag = isPrerelease(local) ? 'beta' : 'latest';
      console.log(`--- ${name}@${local} current tag: ${tag} ---`);
      publish(name, workDir, local, shouldBuild, tag);
    }
  });
}

checkVersionAndPublish();
