module.exports = {
  siteMetadata: {
    title: "Zubair Aziz",
    author: "Zubair Aziz",
    siteUrl: `https://www.zubairaziz.com`,
    socialLinks: {
      facebook: "https://www.facebook.com/zubair0496",
      twitter: "https://twitter.com/zbr_aziz/",
      instagram: "https://www.instagram.com/zbr.aziz/",
      github: "https://github.com/zubairaziz",
      stackoverflow: "https://stackoverflow.com/users/8369042/zubair?tab=profile",
      linkedin: "https://www.linkedin.com/in/zubairabaziz/",
      email: "admin@zubairaziz.com",
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1400,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Press Start 2P`, `Source Code Pro`],
        display: "swap",
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.GOOGLE_ANALYTICS_TRACKING_ID, // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        gtagConfig: {
          optimize_id: process.env.GOOGLE_EXPERIMENT_ID,
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
  ],
}
