module.exports = {
  // application
  application: {
    path: 'packages/application/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0',
        name: '@uni/application',
      },
    ],
  },
  // base
  env: {
    path: 'packages/base/env/src/index.ts',
    // 是否可以按环境拆包
    unNeedSplit: true,
    pkgInfo: [
      {
        version: '1.0.1-beta',
        name: '@uni/env',
      },
    ],
  },
  canIUse: {
    path: 'packages/base/canIUse/src/index.ts',
    // 是否可以按环境拆包
    unNeedSplit: true,
    pkgInfo: [
      {
        version: '1.0.0',
        name: '@uni/caniuse',
      },
    ],
  },

  unitTool: {
    path: 'packages/base/unit-tool/src/index.ts',
    unNeedSplit: true,
    pkgInfo: [
      {
        version: '1.0.0',
        name: '@uni/unit-tool',
        dependencies: {
          '@uni/system-info': '^1.0.0',
        },
      },
    ],
  },
  // canvas
  canvas: {
    path: 'packages/canvas/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0',
        name: '@uni/canvas',
      },
    ],
  },
  // device
  accelerometer: {
    path: 'packages/device/accelerometer/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0',
        name: '@uni/accelerometer',
      },
    ],
  },
  clipboard: {
    path: 'packages/device/clipboard/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0',
        name: '@uni/clipboard',
      },
    ],
  },
  systemInfo: {
    path: 'packages/device/getSystemInfoSync/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0',
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
    path: 'packages/file/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0',
        name: '@uni/file',
      },
    ],
  },
  // interactive
  actionSheet: {
    path: 'packages/interactive/showActionSheet/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0',
        name: '@uni/action-sheet',
      },
    ],
  },
  alert: {
    path: 'packages/interactive/alert/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0',
        name: '@uni/alert',
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
    path: 'packages/interactive/toast/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.1',
        name: '@uni/toast',
      },
    ],
  },
  loading: {
    path: 'packages/interactive/loading/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0',
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
    path: 'packages/interactive/element/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0',
        name: '@uni/element',
      },
    ],
  },
  intersectionObserver: {
    path: 'packages/interactive/intersectionObserver/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0',
        name: '@uni/intersection-observer',
      },
    ],
  },
  confirm: {
    path: 'packages/interactive/confirm/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0',
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
    path: 'packages/location/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0',
        name: '@uni/location',
      },
    ],
  },
  // media
  image: {
    path: 'packages/media/image/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0',
        name: '@uni/image',
      },
    ],
  },
  // navigate
  navigate: {
    path: 'packages/navigate/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0',
        name: '@uni/navigate',
      },
    ],
  },
  // network
  request: {
    path: 'packages/network/request/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0',
        name: '@uni/request',
      },
    ],
  },
  // storage
  storage: {
    path: 'packages/storage/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0',
        name: '@uni/storage',
      },
    ],
  },
};
