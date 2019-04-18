const siteConfig = {
  title: 'Piction Network Dev',
  tagline: 'Piction Network',
  disableTitleTagline: true,
  url: 'https://developer.piction.network',
  baseUrl: '/',
  projectName: 'developer.piction.network',
  organizationName: 'piction-protocol',
  headerLinks: [
    { doc: 'overview', label: 'Docs' },
    { href: "https://github.com/piction-protocol", label: "GitHub" },
  ],
  headerIcon: 'img/logo.svg',
  footerIcon: 'img/footer.svg',
  favicon: 'img/logo.svg',
  colors: {
    primaryColor: '#143788',
    secondaryColor: '#0045e3',
  },
  copyright: `Copyright © ${new Date().getFullYear()} Piction Network`,
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },
  onPageNav: 'separate',
  cleanUrl: true,
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',
  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */
};

module.exports = siteConfig;
