export default {
  base: '/universal-api',
  publicPath: '/universal-api/',
  outputPath: 'docs-dist',
  title: 'universal-api',
  logo: 'https://img.alicdn.com/imgextra/i3/O1CN01eGRjPe1LHzdKs6S7e_!!6000000001275-2-tps-200-200.png',
  favicon: 'https://img.alicdn.com/imgextra/i3/O1CN01eGRjPe1LHzdKs6S7e_!!6000000001275-2-tps-200-200.png',
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
    '@c-primary': '#17BD88',
    '@c-heading': '#454d64',
    '@c-text': '#454d64',
    '@c-secondary': '#717484',
    '@c-link': '@c-primary',
    '@c-border': '#ebedf1',
    '@c-light-bg': '#f9fafb',
  }
};