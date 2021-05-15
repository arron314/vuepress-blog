module.exports = {
  title: "Arron's Notebook",
  description: "一切都会好起来",
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    ["link", { rel: "icon", href: "/logo.jpg" }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  themeConfig: {
    logo: "/logo.jpg", // 左上角logo
    nav: [
      // 导航栏配置
      { text: "Home", link: "/" },
      { text: "Notebook", link: "/notebook/" },
      { text: "Github", link: "https://www.jianshu.com/u/c455567c7f50" },
    ],
    sidebar: {
        '/notebook/': [
          'one',  /* /foo/one.html */
          'leetcode'   /* /foo/two.html */
        ]
      }
  },
};
