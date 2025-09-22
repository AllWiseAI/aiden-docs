import { defineConfig } from 'vitepress'

export default defineConfig({
  // 默认语言设置
  lang: 'en-US',
  title: 'Aiden Document',
  description: 'Aiden Document',

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      title: 'Aiden Document',
      description: 'Aiden Document',
      themeConfig: {
        nav: [],
        sidebar: [
          {
            items: [
              { text: 'Terms of Service', link: '/terms-of-service' },
              { text: 'Privacy Policy', link: '/privacy' }
            ]
          }
        ]
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'Aiden 文档',
      description: 'Aiden 项目说明',
      themeConfig: {
        nav: [],
        sidebar: [
          {
            items: [
              { text: '服务条款', link: '/zh/terms-of-service' },
              { text: '隐私政策', link: '/zh/privacy' }
            ]
          }
        ]
      }
    }
  }
})
