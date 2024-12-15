import { useEffect, useState } from 'react'

const MOBILE_WIDTH = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>()

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth <= MOBILE_WIDTH)
    }
    mql.addEventListener('change', onChange)

    setIsMobile(window.innerWidth <= MOBILE_WIDTH)

    return () => mql.removeEventListener('change', onChange)
  }, [])

  return !!isMobile
}
