/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const withMarkdoc = require('@markdoc/next.js')

const { NODE_ENV, GTM_ID } = process.env

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  pageExtensions: ['tsx', 'md'],
  compiler: {
    /**
     * RegExs are processed in Rust so the syntax is different from JavaScript.
     * See https://docs.rs/regex.
     */
    reactRemoveProperties: NODE_ENV === 'production' ? { properties: ['^data-test.*$'] } : false,
  },
  env: {
    GTM_ID,
    NEXT_ENV: NODE_ENV,
  },
}

module.exports = withBundleAnalyzer(
  withMarkdoc({ mode: 'static', schemaPath: './src/markdoc' })(nextConfig)
)
