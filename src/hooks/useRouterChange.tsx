import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const useRouterChange = (fn: (pathname: string) => void) => {
  const location = useLocation()
  useEffect(() => {
    fn(location.pathname)
  }, [location])
}
export default useRouterChange