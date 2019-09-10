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
    "gatsby-plugin-sass",
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
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        head: false,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
        optimizeId: process.env.GOOGLE_OPTIMIZE_TRACKING_ID,
        experimentId: process.env.GOOGLE_EXPERIMENT_ID,
        variationId: process.env.GOOGLE_OPTIMIZE_VARIATION_ID,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "zubairaziz.com",
      },
    },
  ],
}
