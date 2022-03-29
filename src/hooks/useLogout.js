import { useState } from "react"
import { projectAuth, projectFirestore } from "../firebase/config"
import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const { dispatch, user } = useAuthContext()

  const logout = async () => {
    setError(null)
    setIsLoading(true)

    // sign user out
    try {
      // update online status
      const { uid } = user
      await projectFirestore.collection('users').doc(uid).update({ online: false })

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