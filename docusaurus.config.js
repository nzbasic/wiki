/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Wiki",
  tagline: "Documentation for my applications",
  url: "https://wiki.nzbasic.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "nzbasic", // Usually your GitHub org/user name.
  projectName: "wiki", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "nzbasic Wiki",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/nzbasic/wiki/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
