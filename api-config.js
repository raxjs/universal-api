module.exports = {
  // application
  application: {
    path: 'src/packages/application/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.3',
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
        version: '1.0.3',
        name: '@uni/env',
      },
    ],
  },
  canIUse: {
    path: 'src/packages/base/canIUse/src/index.ts',
    unNeedSplit: true,
    pkgInfo: [
      {
        version: '1.0.4',
        name: '@uni/caniuse',
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
        version: '1.0.3',
        name: '@uni/unit-tool',
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
        version: '1.0.3',
        name: '@uni/canvas',
      },
    ],
  },
  // device
  accelerometer: {
    path: 'src/packages/device/accelerometer/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.3',
        name: '@uni/accelerometer',
      },
    ],
  },
  clipboard: {
    path: 'src/packages/device/clipboard/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.3',
        name: '@uni/clipboard',
      },
    ],
  },
  systemInfo: {
    path: 'src/packages/device/systemInfo/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.3',
        name: '@uni/system-info',
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
        version: '1.0.5',
        name: '@uni/file',
      },
    ],
  },
  // interactive
  actionSheet: {
    path: 'src/packages/interactive/actionSheet/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.3',
        name: '@uni/action-sheet',
      },
    ],
  },
  alert: {
    path: 'src/packages/interactive/alert/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.4',
        name: '@uni/alert',
        dependencies: {
          '@uni/confirm': '^1.0.3',
        },
      },
    ],
  },
  // 'transition': {
  //   path: 'packages/interactive/transition/src/index.ts',
  //   pkgInfo: [
  //     {
  //       version: '1.1.1',
  //       name: '@uni/transition',
  //       dependencies: {
  //         '@uni/unit-tool': '^1.0.0',
  //         'style-unit': '^2.0.0',
  //         '@uni/device': '^1.0.3',
  //       },
  //     }
  //   ]
  // },
  // 'animation': {
  //   path: 'packages/interactive/animation/src/index.ts',
  //   pkgInfo: [
  //     {
  //       version: '1.2.0',
  //       name: '@uni/animation',
  //       dependencies: {
  //         '@uni/transition': '^1.0.1',
  //         'weex-bindingx': '^0.0.49'
  //       },
  //     }
  //   ]
  // },

  toast: {
    path: 'src/packages/interactive/toast/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.5',
        name: '@uni/toast',
      },
    ],
  },
  loading: {
    path: 'src/packages/interactive/loading/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.3',
        name: '@uni/loading',
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
        version: '1.0.4',
        name: '@uni/element',
      },
    ],
  },
  intersectionObserver: {
    path: 'src/packages/interactive/intersectionObserver/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.3',
        name: '@uni/intersection-observer',
      },
    ],
  },
  confirm: {
    path: 'src/packages/interactive/confirm/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.3',
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
        version: '1.0.3',
        name: '@uni/location',
      },
    ],
  },
  // media
  image: {
    path: 'src/packages/media/image/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.3',
        name: '@uni/image',
      },
    ],
  },
  // navigate
  navigate: {
    path: 'src/packages/navigate/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.3',
        name: '@uni/navigate',
      },
    ],
  },
  // network
  request: {
    path: 'src/packages/network/request/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.5',
        name: '@uni/request',
      },
    ],
  },
  // storage
  storage: {
    path: 'src/packages/storage/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.4',
        name: '@uni/storage',
      },
    ],
  },
};
