import { googleAnalytics } from './google'

const GTM_ID = process.env.GTM_ID

export const initializeAnalytics = () => {
  if (typeof window !== 'undefined' && GTM_ID) {
    googleAnalytics(window, document, 'script', 'dataLayer', GTM_ID)
  }
}

export default initializeAnalytics
