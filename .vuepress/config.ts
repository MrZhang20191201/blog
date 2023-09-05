import { defineUserConfig, defaultTheme } from 'vuepress';

export default defineUserConfig({
  lang: 'zh-CN',
  title: '小达人',
  description: 'vue3',
  head: [['link', { rel: 'icon', href: '/images/vite.svg' }]],
  locales: {
    '/': {
      lang: 'zh-CN',
    },
    '/en/': {
      lang: 'en-US',
    },
  },
  theme: defaultTheme({
    logo: '/images/logo.png',
    colorMode: "dark",
    colorModeSwitch: true,
    repo: 'https://github.com',
    locales: {
      '/': {
        selectLanguageName: '简体中文',
      },
      '/en/': {
        selectLanguageName: 'English',
      },
    },
    editLink: false,
    lastUpdated:true,
    lastUpdatedText:'2023-09-01',
    contributors:true,
    contributorsText:'Contributors',
    sidebarDepth:5,
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '官方文档',
        children: [
          {
            text: 'Vue3',
            link: 'https://cn.vuejs.org/guide/introduction.html'
          },
          {
            text: 'Vue Router',
            link: 'https://router.vuejs.org'
          },
          {
            text: 'Element Plus',
            link: 'https://element-plus.org'
          },
          {
            text: 'Vite',
            link: 'https://cn.vitejs.dev'
          }
        ],
      },
      {
        text: '文档',
        children: [
          {
            text: 'vue3',
            link: '/docs/vue3.md'
          },
          {
            text: 'nodejs',
            link: '/docs/nodejs.md'
          },
          {
            text: 'mysql',
            link: '/docs/mysql.md'
          },
          {
            text: 'ocelot',
            link: '/docs/ocelot.md'
          },
          {
            text: 'typora',
            link: '/docs/typora.md'
          }
        ],
      },
    ],
    sidebar:'auto'
  })
})