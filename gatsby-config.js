const path = require(`path`)


module.exports = {
  // pathPrefix: `/`,

  siteMetadata: {
    siteTitle: `GAS Companion Docs`,
    defaultTitle: `GAS Companion`,
    siteTitleShort: `GAS Companion`,
    siteDescription: `Documentation for GAS Companion: a Gameplay Ability System Starter and Template`,
    siteUrl: `https://localhost:9000`,
    siteAuthor: `https://mklabs.github.io`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: `@mklabs/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        repositoryUrl: `https://github.com/GASCompanion/GASCompanion-Documentation`,
        branch: 'dev',
        baseDir: ``,
        withMdx: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GAS Companion Documentation`,
        short_name: `GAS Companion Docs`,

        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `api`,
        path: path.join(__dirname, `src/GASCompanionAPI`),
      },
    },
        {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `api`,
        path: path.join(__dirname, `src/GASCompanionAPI_v3`),
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `api`,
        path: path.join(__dirname, `src/KdsCharacter`),
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-embedder`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              withWebp: true,
              wrapperStyle: 'margin-left: initial',
              linkImagesToOriginal: true,
            },
          },
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-copy-linked-files`,
        ],
        plugins: [`gatsby-remark-autolink-headers`, `gatsby-remark-images`],
      }
    },

    `gatsby-plugin-sitemap`,
    
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,

    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://localhost:9000`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
