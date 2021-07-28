module.exports = {
  // application
  application: {
    path: 'src/packages/application/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.5',
        name: '@uni/application',
      },
    ],
  },
  // base
  env: {
    path: 'src/packages/base/env/src/index.ts',
    unNeedSplit: true,
    // 是否需要公共utils
    needCommonUtil: false,
    pkgInfo: [
      {
        version: '1.0.7',
        name: '@uni/env',
        exports: '',
      },
    ],
  },
  canIUse: {
    path: 'src/packages/base/canIUse/src/index.ts',
    unNeedSplit: true,
    pkgInfo: [
      {
        version: '1.0.6',
        name: '@uni/caniuse',
        exports: '',
      },
    ],
  },

  unitTool: {
    path: 'src/packages/base/unit-tool/src/index.ts',
    unNeedSplit: true,
    // 是否需要公共utils
    needCommonUtil: false,
    pkgInfo: [
      {
        version: '1.0.5',
        name: '@uni/unit-tool',
        exports: '',
        dependencies: {
          '@uni/system-info': '^1.0.3',
        },
      },
    ],
  },
  // canvas
  canvas: {
    path: 'src/packages/canvas/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.5',
        name: '@uni/canvas',
      },
    ],
  },
  // device
  accelerometer: {
    path: 'src/packages/device/accelerometer/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.5',
        name: '@uni/accelerometer',
      },
    ],
  },
  clipboard: {
    path: 'src/packages/device/clipboard/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.6',
        name: '@uni/clipboard',
      },
    ],
  },
  systemInfo: {
    path: 'src/packages/device/systemInfo/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.5',
        name: '@uni/system-info',
      },
    ],
  },
  scan: {
    path: 'src/packages/device/scan/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.1',
        name: '@uni/scan',
      },
    ],
  },
  // 'networkInfo': {
  //   path: 'packages/device/network-info/src/index.ts',
  //   pkgInfo: [
  //     {
  //       version: '1.0.0',
  //       name: '@uni/network',
  //     }
  //   ]
  // },
  // file
  file: {
    path: 'src/packages/file/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.9',
        name: '@uni/file',
      },
    ],
  },
  // interactive
  actionSheet: {
    path: 'src/packages/interactive/actionSheet/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.5',
        name: '@uni/action-sheet',
      },
    ],
  },
  alert: {
    path: 'src/packages/interactive/alert/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.6',
        name: '@uni/alert',
        dependencies: {
          '@uni/confirm': '^1.0.3',
        },
      },
    ],
  },

  animation: {
    path: 'src/packages/interactive/animation/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.2',
        name: '@uni/animation',
      },
    ],
  },
  toast: {
    path: 'src/packages/interactive/toast/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.8',
        name: '@uni/toast',
      },
    ],
  },
  loading: {
    path: 'src/packages/interactive/loading/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.5',
        name: '@uni/loading',
      },
    ],
  },
  navigationBar: {
    path: 'src/packages/interactive/navigationBar/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.1',
        name: '@uni/navigation-bar',
      },
    ],
  },
  pullDownRefresh: {
    path: 'src/packages/interactive/pullDownRefresh/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.1',
        name: '@uni/pull-down-refresh',
      },
    ],
  },
  // 'keyboard': {
  //   path: 'packages/interactive/keyboard/src/index.ts',
  //   pkgInfo: [
  //     {
  //       version: '1.0.1',
  //       name: '@uni/keyboard',
  //     }
  //   ]
  // },
  element: {
    path: 'src/packages/interactive/element/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.6',
        name: '@uni/element',
      },
    ],
  },
  intersectionObserver: {
    path: 'src/packages/interactive/intersectionObserver/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.5',
        name: '@uni/intersection-observer',
      },
    ],
  },
  confirm: {
    path: 'src/packages/interactive/confirm/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.5',
        name: '@uni/confirm',
      },
    ],
  },
  // 'background': {
  //   path: 'packages/interactive/background/src/index.ts',
  //   pkgInfo: [
  //     {
  //       version: '1.0.0',
  //       name: '@uni/background',
  //     }
  //   ]
  // },
  location: {
    path: 'src/packages/location/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.6',
        name: '@uni/location',
      },
    ],
  },
  // media
  image: {
    path: 'src/packages/media/image/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.9',
        name: '@uni/image',
        dependencies: {
          '@uni/video': '^1.0.2',
        },
      },
    ],
  },
  // navigate
  navigate: {
    path: 'src/packages/navigate/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.6',
        name: '@uni/navigate',
      },
    ],
  },
  // network
  request: {
    path: 'src/packages/network/request/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.11',
        name: '@uni/request',
      },
    ],
  },
  // storage
  storage: {
    path: 'src/packages/storage/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.7',
        name: '@uni/storage',
      },
    ],
  },
  // recorder
  recorder: {
    path: 'src/packages/media/recorder/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.1',
        name: '@uni/recorder',
      },
    ],
  },
  // video
  video: {
    path: 'src/packages/media/video/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.3',
        name: '@uni/video',
        dependencies: {
          '@uni/action-sheet': '^1.0.5',
        },
      },
    ],
  },
};
