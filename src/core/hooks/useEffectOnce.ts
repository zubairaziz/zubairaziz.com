import * as React from 'react'

const useEffectOnce = (effect: React.EffectCallback) => {
  const destroyFunc = React.useRef<void | any>()
  const calledOnce = React.useRef(false)
  const renderAfterCalled = React.useRef(false)

  if (calledOnce.current) {
    renderAfterCalled.current = true
  }

  React.useEffect(() => {
    if (calledOnce.current) {
      return
    }

    calledOnce.current = true
    destroyFunc.current = effect()

    return () => {
      if (!renderAfterCalled.current) {
        return
      }

      if (destroyFunc.current) {
        destroyFunc.current()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useEffectOnce
