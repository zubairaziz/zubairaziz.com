/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://www.zubairaziz.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: ['/'],
      },
    ],
  },
}

module.exports = config
