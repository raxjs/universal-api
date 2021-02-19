module.exports = {
  // application
  'errorEvent': {
    path: 'packages/application/errorEvent/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0-beta',
        name: '@uni/error-event',
      }
    ]
  },
  'getApp': {
    path: 'packages/application/getApp/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0-beta',
        name: '@uni/getapp',
      }
    ]
  },
  'getCurrentPages': {
    path: 'packages/application/getCurrentPages/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0-beta',
        name: '@uni/getcurrentpages',
      }
    ]
  },
  'getLaunchOptionsSync': {
    path: 'packages/application/getLaunchOptionsSync/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0-beta',
        name: '@uni/getlaunchoptionssync',
      }
    ]
  },
  // base
  'env': {
    path: 'packages/base/env/src/index.ts',
    // 是否可以按环境拆包
    unNeedSplit: true,
    pkgInfo: [
      {
        version: '1.0.0-beta',
        name: '@uni/env',
      }
    ]
  },
  'canIUse': {
    path: 'packages/base/canIUse/src/index.ts',
    // 是否可以按环境拆包
    unNeedSplit: true,
    pkgInfo: [
      {
        version: '1.0.0-beta',
        name: '@uni/caniuse',
      }
    ]
  },

  'unitTool': {
    path: 'packages/base/unit-tool/src/index.ts',
    unNeedSplit: true,
    pkgInfo: [
      {
        version: '1.0.0-beta',
        name: '@uni/unit-tool',
        dependencies: {
          '@uni/getsysteminfosync': '^1.0.0-beta'
        },
      }
    ]
  },
  // canvas
  'createCanvasContext': {
    path: 'packages/canvas/canvas-context/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0-beta',
        name: '@uni/canvas-context',
      }
    ]
  },
  // device
  'accelerometer': {
    path: 'packages/device/accelerometer/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0-beta',
        name: '@uni/accelerometer',
      }
    ]
  },
  'clipboard': {
    path: 'packages/device/clipboard/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0-beta',
        name: '@uni/clipboard',
      }
    ]
  },
  'getSystemInfoSync': {
    path: 'packages/device/getSystemInfoSync/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0-beta',
        name: '@uni/getsysteminfosync',
      }
    ]
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
  'file': {
    path: 'packages/file/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0-beta',
        name: '@uni/file',
      }
    ]
  },
  // interactive
  'actionsheet': {
    path: 'packages/interactive/showActionSheet/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0-beta',
        name: '@uni/action-sheet',
      }
    ]
  },
  'alert': {
    path: 'packages/interactive/alert/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0-beta',
        name: '@uni/alert',
      }
    ]
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

  'toast': {
    path: 'packages/interactive/toast/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0-beta',
        name: '@uni/toast',
      }
    ]
  },
  'loading': {
    path: 'packages/interactive/loading/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0-beta',
        name: '@uni/loading',
      }
    ]
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
  'element': {
    path: 'packages/interactive/element/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0-beta',
        name: '@uni/element',
      }
    ]
  },
  'intersectionObserver': {
    path: 'packages/interactive/intersectionObserver/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0-beta',
        name: '@uni/intersection-observer',
      }
    ]
  },
  'showModal': {
    path: 'packages/interactive/showModal/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0-beta',
        name: '@uni/show-modal',
      }
    ]
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
  // 'image': {
  //   path: 'packages/media/image/src/index.ts',
  //   pkgInfo: [
  //     {
  //       version: '1.0.1',
  //       name: '@uni/image',
  //     }
  //   ]
  // },
  // location
  'location': {
    path: 'packages/location/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0-beta',
        name: '@uni/location',
      }
    ]
  },
  // media
  'chooseImage': {
    path: 'packages/media/chooseImage/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0-beta',
        name: '@uni/choose-image',
      }
    ]
  },
  'compressImage': {
    path: 'packages/media/compressImage/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0-beta',
        name: '@uni/compress-image',
      }
    ]
  },
  'getImageInfo': {
    path: 'packages/media/getImageInfo/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0-beta',
        name: '@uni/getimageinfo',
      }
    ]
  },
  // navigate
  'navigate': {
    path: 'packages/navigate/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0-beta',
        name: '@uni/navigate',
      }
    ]
  },
  // network
  'request': {
    path: 'packages/network/request/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0-beta',
        name: '@uni/request',
      }
    ]
  },
  // storage
  'storage': {
    path: 'packages/storage/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0-beta',
        name: '@uni/storage',
      }
    ]
  },
};