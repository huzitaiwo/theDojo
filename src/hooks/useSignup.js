import { useState, useEffect } from "react"
import { projectAuth, projectStorage } from "../firebase/config"
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  const [unMounted, setUnMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const { dispatch } = useAuthContext()

  const singup = async (email, password, displayName, thumbnail) => {
    setError(null)
    setIsLoading(true)

    try {
      // signup user
      const res = await projectAuth.createUserWithEmailAndPassword(email, password)

      if(!res) {
        throw new Error('Could not complete signup')
      }

      // upload user thumbnail
      const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`
      const photo = await projectStorage.ref(uploadPath).put(thumbnail)
      const photoURL = await photo.ref.getDownloadURL()

      // add displayName and photoURL to user
      await res.user.updateProfile({ displayName, photoURL })

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