/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const withMarkdoc = require('@markdoc/next.js')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  pageExtensions: ['tsx', 'md'],
}

module.exports = withBundleAnalyzer(
  withMarkdoc({ mode: 'static', schemaPath: './src/markdoc' })(nextConfig)
)
