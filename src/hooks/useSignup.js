import { useState, useEffect } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  const [unMounted, setUnMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const { dispatch } = useAuthContext()

  const singup = async (email, password, displayName) => {
    setError(null)
    setIsLoading(true)

    try {
      // signup user
      const res = await projectAuth.createUserWithEmailAndPassword(email, password)

      if(!res) {
        throw new Error('Could not complete signup')
      }

      // add displayName to user
      await res.user.updateProfile({ displayName })

      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user })
      
      if (!unMounted) {
        setError(null)
        setIsLoading(false)
      }
    }
    catch(err) {
      if (!unMounted) {
        setError(err.message)
        setIsLoading(false)
      }
    }
    
  }

  useEffect(() => {
    return () => setUnMounted(true)
  },[])

  return { isLoading, error, singup }
}