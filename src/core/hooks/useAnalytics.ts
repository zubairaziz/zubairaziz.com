import { initializeAnalytics } from 'core/utils'

import useEffectOnce from './useEffectOnce'

const useAnalytics = () => {
  useEffectOnce(() => {
    initializeAnalytics()
  })
}

export default useAnalytics
