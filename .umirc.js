export default {
  base: '/',
  publicPath: '/',
  outputPath: 'docs-dist',
  title: 'uni',
  logo: 'https://img.alicdn.com/imgextra/i3/O1CN01lt5FH71VubB3j3Okd_!!6000000002713-2-tps-412-412.png',
  favicon: 'https://img.alicdn.com/imgextra/i3/O1CN01lt5FH71VubB3j3Okd_!!6000000002713-2-tps-412-412.png',
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English']
  ],
  mode: 'site',
  resolve: {
    includes: ['./docs']
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