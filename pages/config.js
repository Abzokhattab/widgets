const pathPrefix = "/widgets";

const config = {
  gatsby: {
    pathPrefix,
    siteUrl: "https://energenious.eu",
    gaTrackingId: null,
    trailingSlash: false
  },
  header: {
    logo: "https://energenious.eu/static/energenious.svg",
    logoLink: "https://energenious.eu",
    title: "",
    githubUrl: "https://gitlab.com/energenious/widgets",
    helpUrl: "",
    tweetText: "",
    social: "",
    links: [{ text: "", link: "" }],
    search: {
      enabled: false,
      indexName: "",
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY
    }
  },
  sidebar: {
    forcedNavOrder: [
      "/",
      "/about", // add trailing slash if enabled above
      "/getting-started",
      "/widget-api",
      "/templates"
    ],
    collapsedNav: ["/getting-started", "/widget-api", "/templates"],
    links: [
      { text: "Energenious", link: "https://energenious.eu" },
      { text: "Examples (Storybook)", link: `${pathPrefix}/storybook` }
    ],
    frontline: false,
    ignoreIndex: false,
    title: "Widgets"
  },
  siteMetadata: {
    title: "Energenious | Widgets",
    description: "Widgets project documentation.",
    ogImage: null,
    docsLocation:
      "https://gitlab.com/energenious/widgets/-/tree/master/pages/content",
    favicon: "https://energenious.eu/lay/favicon-32x32.png"
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: "Gatsby Gitbook Starter",
      short_name: "GitbookStarter",
      start_url: "/",
      background_color: "#6b37bf",
      theme_color: "#6b37bf",
      display: "standalone",
      crossOrigin: "use-credentials",
      icons: [
        {
          src: "src/pwa-512.png",
          sizes: `512x512`,
          type: `image/png`
        }
      ]
    }
  }
};

module.exports = config;
