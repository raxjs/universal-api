module.exports = {
  // application
  'errorEvent': {
    path: 'packages/application/errorEvent/src/index.ts',
    pkgInfo: [
      {
        version: '2.0.0-beta',
        name: 'universal-error-event',
      }
    ]
  },
  'getApp': {
    path: 'packages/application/getApp/src/index.ts',
    pkgInfo: [
      {
        version: '2.0.0-beta',
        name: 'universal-getapp',
      }
    ]
  },
  'getCurrentPages': {
    path: 'packages/application/getCurrentPages/src/index.ts',
    pkgInfo: [
      {
        version: '2.0.0-beta',
        name: 'universal-getcurrentpages',
      }
    ]
  },
  'getLaunchOptionsSync': {
    path: 'packages/application/getLaunchOptionsSync/src/index.ts',
    pkgInfo: [
      {
        version: '2.0.0-beta',
        name: 'universal-getlaunchoptionssync',
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
        version: '4.0.0-beta',
        name: 'universal-env',
      }
    ]
  },

  'unitTool': {
    path: 'packages/base/unit-tool/src/index.ts',
    unNeedSplit: true,
    pkgInfo: [
      {
        version: '2.0.0-beta',
        name: 'universal-unit-tool',
        dependencies: {
          'universal-getsysteminfosync': '^2.0.0'
        },
      }
    ]
  },
  // canvas
  'createCanvasContext': {
    path: 'packages/canvas/canvas-context/src/index.ts',
    pkgInfo: [
      {
        version: '2.0.0-beta',
        name: 'universal-canvas-context',
      }
    ]
  },
  // equipment
  'accelerometer': {
    path: 'packages/equipment/accelerometer/src/index.ts',
    pkgInfo: [
      {
        version: '2.0.0-beta',
        name: 'universal-accelerometer',
      }
    ]
  },
  'clipboard': {
    path: 'packages/equipment/clipboard/src/index.ts',
    pkgInfo: [
      {
        version: '2.0.0-beta',
        name: 'universal-clipboard',
      }
    ]
  },
  'getSystemInfoSync': {
    path: 'packages/equipment/getSystemInfoSync/src/index.ts',
    pkgInfo: [
      {
        version: '2.0.0-beta',
        name: 'universal-getsysteminfosync',
      }
    ]
  },
  // 'networkInfo': {
  //   path: 'packages/equipment/network-info/src/index.ts',
  //   pkgInfo: [
  //     {
  //       version: '1.0.0',
  //       name: 'universal-network',
  //     }
  //   ]
  // },
  // file
  'file': {
    path: 'packages/file/src/index.ts',
    pkgInfo: [
      {
        version: '2.0.0-beta',
        name: 'universal-file',
      }
    ]
  },
  // interface
  'actionsheet': {
    path: 'packages/interface/showActionSheet/src/index.ts',
    pkgInfo: [
      {
        version: '2.0.0-beta',
        name: 'universal-action-sheet',
      }
    ]
  },
  'alert': {
    path: 'packages/interface/alert/src/index.ts',
    pkgInfo: [
      {
        version: '2.0.0-beta',
        name: 'universal-alert',
      }
    ]
  },
  // 'transition': {
  //   path: 'packages/interface/transition/src/index.ts',
  //   pkgInfo: [
  //     {
  //       version: '1.1.1',
  //       name: 'universal-transition',
  //       dependencies: {
  //         'universal-unit-tool': '^1.0.0',
  //         'style-unit': '^2.0.0',
  //         'universal-device': '^1.0.3',
  //       },
  //     }
  //   ]
  // },
  // 'animation': {
  //   path: 'packages/interface/animation/src/index.ts',
  //   pkgInfo: [
  //     {
  //       version: '1.2.0',
  //       name: 'universal-animation',
  //       dependencies: {
  //         'universal-transition': '^1.0.1',
  //         'weex-bindingx': '^0.0.49'
  //       },
  //     }
  //   ]
  // },

  'toast': {
    path: 'packages/interface/toast/src/index.ts',
    pkgInfo: [
      {
        version: '2.0.0-beta',
        name: 'universal-toast',
      }
    ]
  },
  'loading': {
    path: 'packages/interface/loading/src/index.ts',
    pkgInfo: [
      {
        version: '2.0.0-beta',
        name: 'universal-loading',
      }
    ]
  },
  // 'keyboard': {
  //   path: 'packages/interface/keyboard/src/index.ts',
  //   pkgInfo: [
  //     {
  //       version: '1.0.1',
  //       name: 'universal-keyboard',
  //     }
  //   ]
  // },
  'element': {
    path: 'packages/interface/element/src/index.ts',
    pkgInfo: [
      {
        version: '2.0.0-beta',
        name: 'universal-element',
      }
    ]
  },
  'intersectionObserver': {
    path: 'packages/interface/intersectionObserver/src/index.ts',
    pkgInfo: [
      {
        version: '2.0.0-beta',
        name: 'universal-intersection-observer',
      }
    ]
  },
  'showModal': {
    path: 'packages/interface/showModal/src/index.ts',
    pkgInfo: [
      {
        version: '2.0.0-beta',
        name: 'universal-show-modal',
      }
    ]
  },
  // 'background': {
  //   path: 'packages/interface/background/src/index.ts',
  //   pkgInfo: [
  //     {
  //       version: '1.0.0',
  //       name: 'universal-background',
  //     }
  //   ]
  // },
  // 'image': {
  //   path: 'packages/media/image/src/index.ts',
  //   pkgInfo: [
  //     {
  //       version: '1.0.1',
  //       name: 'universal-image',
  //     }
  //   ]
  // },
  // location
  'location': {
    path: 'packages/location/src/index.ts',
    pkgInfo: [
      {
        version: '2.0.0-beta',
        name: 'universal-location',
      }
    ]
  },
  // media
  'chooseImage': {
    path: 'packages/media/chooseImage/src/index.ts',
    pkgInfo: [
      {
        version: '2.0.0-beta',
        name: 'universal-choose-image',
      }
    ]
  },
  'compressImage': {
    path: 'packages/media/compressImage/src/index.ts',
    pkgInfo: [
      {
        version: '2.0.0-beta',
        name: 'universal-compress-image',
      }
    ]
  },
  'getImageInfo': {
    path: 'packages/media/getImageInfo/src/index.ts',
    pkgInfo: [
      {
        version: '2.0.0-beta',
        name: 'universal-getimageinfo',
      }
    ]
  },
  // navigate
  'navigate': {
    path: 'packages/navigate/src/index.ts',
    pkgInfo: [
      {
        version: '2.0.0-beta',
        name: 'universal-navigate',
      }
    ]
  },
  // network
  'request': {
    path: 'packages/network/request/src/index.ts',
    pkgInfo: [
      {
        version: '3.0.0-beta',
        name: 'universal-request',
      }
    ]
  },
  // storage
  'storage': {
    path: 'packages/storage/src/index.ts',
    pkgInfo: [
      {
        version: '2.0.0-beta',
        name: 'universal-storage',
      }
    ]
  },
};