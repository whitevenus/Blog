import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/Blog/",
  lang: "zh-CN",
  title: "沙漠之舟",
  description: "一个基于vitepress的CS编程笔记网站",
  head: [["link", { rel: "icon", href: "/Blog/logo.svg" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: [2, 6],
    logo: "/logo.svg",

    nav: [
      { text: "首页", link: "/" },
      { text: "前端手册", link: "/Frontend/" },
      { text: "人工智能", link: "/AI/" },
      // { text: "算法与数据结构", link: "/markdown-examples" },
      { text: "Java手册", link: "/Java/" },
      { text: "项目库", link: "/Project/" },
      // { text: "Examples", link: "/Examples/" },
    ],
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    sidebar: {
      Frontend: [
        {
          text: "学习笔记",
          items: [
            { text: "网站开发概览", link: "/Frontend/网站开发概览" },
            { text: "CSS核心原理", link: "/Frontend/CSS核心原理" },
            { text: "JavaScript核心篇", link: "/Frontend/JavaScript核心篇" },
            { text: "Node.js入门篇", link: "/Frontend/Node入门" },
            { text: "Node.js核心篇", link: "/Frontend/Node核心" },
          ],
        },
        {
          text: "参考资源",
          items: [{ text: "参考资源", link: "/Frontend/参考资源" }],
        },
      ],
      AI: [
        {
          text: "学习笔记",
          items: [{ text: "MetaGPT", link: "/AI/MetaGPT" }],
        },
        {
          text: "参考资源",
          items: [{ text: "参考资源", link: "/AI/参考资源" }],
        },
      ],
      Java: [
        {
          text: "学习笔记",
          items: [
            { text: "网站开发概览", link: "/Frontend/网站开发概览" },
            { text: "JavaScript核心篇", link: "/Frontend/JavaScript核心篇" },
          ],
        },
        {
          text: "参考资源",
          items: [{ text: "参考资源", link: "/Frontend/参考资源" }],
        },
      ],
      Examples: [
        {
          text: "Examples",
          items: [
            { text: "Markdown Examples", link: "/Examples/markdown-examples" },
            { text: "Runtime API Examples", link: "/Examples/api-examples" },
          ],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/whitevenus" }],
    footer: {
      // message: "Released under the MIT License.",
      copyright: "Copyright © 2024 WhiteVenus",
    },
  },
});
