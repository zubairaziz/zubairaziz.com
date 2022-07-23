import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

const ManifestData = () => (
  <>
    <meta charSet="utf-8" key="charset" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" key="http-equiv" />
    <meta name="theme-color" content="#33658a" key="theme-color" />
    <link rel="manifest" href="/manifest.json" key="manifest" />
    <meta name="format-detection" content="telephone=no" key="format-detection" />
    <meta name="mobile-web-app-capable" content="yes" key="mobile-web-app-capable" />
  </>
)

const AppleIcons = () => (
  <>
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/apple-touch-icon.png"
      key="apple-touch-icon"
    />
    <meta
      name="apple-mobile-web-app-title"
      content="Zubair Aziz"
      key="apple-mobile-web-app-title"
    />
    <meta name="apple-mobile-web-app-capable" content="yes" key="apple-mobile-web-app-capable" />
    <meta
      name="apple-mobile-web-app-status-bar-style"
      content="default"
      key="apple-mobile-web-app-status-bar-style"
    />
    <meta
      name="apple-mobile-web-app-title"
      content="Zubair Aziz"
      key="apple-mobile-web-app-title"
    />
  </>
)

const AndroidIcons = () => (
  <>
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" key="icon-16" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" key="icon-32" />
    <link
      rel="icon"
      type="image/png"
      sizes="512x512"
      href="/android-chrome-512x512.png"
      key="icon-512"
    />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5928a3" key="mask-icon" />
    <meta name="application-name" content="Zubair Aziz" key="application-name" />
  </>
)

const MicrosoftIcons = () => (
  <>
    <meta name="msapplication-TileColor" content="#5928a3" key="msapplication-TileColor" />
    <meta
      name="msapplication-TileImage"
      content="/mstile-144x144.png"
      key="msapplication-TileImage"
    />
    <meta name="msapplication-tap-highlight" content="no" key="msapplication-tap-highlight" />
  </>
)
export default class Document extends NextDocument {
  render() {
    return (
      <Html
        lang="en"
        className="min-h-screen max-w-[100vw] w-screen overflow-x-hidden font-sans antialiased bg-primary-1"
      >
        <Head>
          <ManifestData />
          <AppleIcons />
          <AndroidIcons />
          <MicrosoftIcons />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
