module.exports = {
  env: {
    path: 'packages/base/env/src/index.ts',
    pkgInfo: [
      {
        version: '3.2.2',
        name: 'universal-env',
      }
    ]
  },
  'unitTool': {
    path: 'packages/base/unit-tool/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0',
        name: 'universal-unit-tool',
        dependencies: {
          'universal-device': '^2.1.1'
        },
      }
    ]
  },
  'canvasContext': {
    path: 'packages/canvas/canvas-context/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0',
        name: 'universal-canvas-context',
      }
    ]
  },
  'accelerometer': {
    path: 'packages/equipment/accelerometer/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.1',
        name: 'universal-accelerometer',
      }
    ]
  },
  'clipboard': {
    path: 'packages/equipment/clipboard/src/index.ts',
    pkgInfo: [
      {
        version: '1.2.0',
        name: 'universal-clipboard',
      }
    ]
  },
  'device': {
    path: 'packages/equipment/device/src/index.ts',
    pkgInfo: [
      {
        version: '2.3.1',
        name: 'universal-device',
      }
    ]
  },
  'networkInfo': {
    path: 'packages/equipment/network-info/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0',
        name: 'universal-network',
      }
    ]
  },
};