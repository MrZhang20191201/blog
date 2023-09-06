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
        text: '前端文档',
        children: [
          {
            text: 'Vite',
            link: 'https://cn.vitejs.dev'
          },
          {
            text: 'Vue3',
            link: 'https://cn.vuejs.org/guide/introduction.html'
          },
          {
            text: 'TypeScript',
            link: 'https://www.tslang.cn'
          },
          {
            text: 'Vuex',
            link: 'https://vuex.vuejs.org/zh/guide'
          },
          {
            text: 'Vue Router',
            link: 'https://router.vuejs.org/zh'
          },
          {
            text: 'Axios',
            link: 'https://www.axios-http.cn/docs/intro'
          },
          {
            text: 'MOckJs',
            link: 'http://mockjs.com'
          },
          {
            text: 'Element Plus',
            link: 'https://element-plus.org'
          }
        ],
      },
      {
        text: '前端',
        children: [
          {
            text: 'vue3',
            link: '/docs/front-end/vue3.md'
          },
          {
            text: 'nodejs',
            link: '/docs/front-end/nodejs.md'
          }
        ],
      },
      {
        text: '数据库',
        children: [
          {
            text: 'mysql',
            link: '/docs/db/mysql.md'
          }
        ],
      },
      {
        text: 'csharp',
        children: [
          {
            text: 'ocelot',
            link: '/docs/csharp/ocelot.md'
          }
        ],
      },
      {
        text: '其它',
        children: [
          {
            text: 'typora',
            link: '/docs/other/typora.md'
          }
        ],
      },
    ],
    sidebar:'auto'
  })
})