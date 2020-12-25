export default {
  base: '/universal-api',
  publicPath: '/universal-api/',
  outputPath: 'docs-dist',
  title: 'universal-api',
  logo: 'https://img.alicdn.com/tfs/TB1H2Kcb1H2gK0jSZFEXXcqMpXa-70-72.png',
  favicon: 'https://img.alicdn.com/tfs/TB1H2Kcb1H2gK0jSZFEXXcqMpXa-70-72.png',
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English']
  ],
  mode: 'site',
  resolve: {
    includes: ['./']
  },
  navs: {
    'zh-CN': [{
      title: 'API',
      path: '/packages'
    }, {
      title: 'Raxjs',
      path: 'http://rax.alibaba-inc.com/'
    }, {
      title: 'GitHub',
      path: 'https://github.com/raxjs/universal-api'
    }],
    'en-US': [{
      title: 'API',
      path: '/en-US/packages'
    }, {
      title: 'Raxjs',
      path: 'http://rax.alibaba-inc.com/'
    }, {
      title: 'GitHub',
      path: 'https://github.com/raxjs/universal-api'
    }]
  },
  theme: {
    '@c-primary': '#f29718',
    '@c-heading': '#454d64',
    '@c-text': '#454d64',
    '@c-secondary': '#717484',
    '@c-link': '@c-primary',
    '@c-border': '#ebedf1',
    '@c-light-bg': '#f9fafb',
  }
};