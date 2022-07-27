const scriptExists = (url: string) => {
  const scripts = document.getElementsByTagName('script')
  for (let i = scripts.length; i--; ) {
    if (scripts[i].src == url) return true
  }
  return false
}

export const googleAnalytics = (w: Window, d: Document, s: string, l: string, i: string) => {
  ;(w as any).dataLayer = (window as any).dataLayer || []
  ;(w as any).dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
  const dl = l != 'dataLayer' ? '&l=' + l : ''
  const scr = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl
  /* To avoid Multiple installations of Google tag manager */
  if (!scriptExists(scr)) {
    const f = d.getElementsByTagName(s)[0],
      j: HTMLScriptElement = d.createElement('script')
    j.async = true
    j.src = scr
    f?.parentNode?.insertBefore(j, f)
  }
}
