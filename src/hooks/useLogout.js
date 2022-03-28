import { useState } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const { dispatch } = useAuthContext()

  const logout = async () => {
    setError(null)
    setIsLoading(true)

    // sign user out
    try {
      await projectAuth.signOut()

      // dispatch logout action
      dispatch({ type: 'LOGOUT' })

      // update state
      setIsLoading(false)
      setError(null)
    }
    catch(err) {
      console.log(err.message)
      setError(err.message)
      setIsLoading(false)
    }
  }

  return { isLoading, error, logout }
}