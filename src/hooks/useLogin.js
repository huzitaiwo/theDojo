import { useState, useEffect } from "react"
import { projectAuth, projectFirestore } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

export const useLogin = () => {
  const [unMounted, setUnMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
    setError(null)
    setIsLoading(true)

    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password)
      
      if(!res) {
        throw new Error('Could not complete login')
      }

      //update online status
      await projectFirestore.collection('users').doc(res.user.uid).update({ online: true })

      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user })

      if (!unMounted) {
        setError(null)
        setIsLoading(false)
      }
    }
    catch (err) {
      if (!unMounted) {
        setError(err.message)
        setIsLoading(false)
      }
    }
  }

  useEffect(() => {
    return () => setUnMounted(true)
  },[])

  return { isLoading, error, login }
}