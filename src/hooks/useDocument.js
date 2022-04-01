import { useEffect, useState } from 'react'
import { projectFirestore } from '../firebase/config'

export const useDocument = async (collection, id) => {
  const [document, setDocument] = useState(null)
  const [error, setError] = useState(null)

  // realtime data for document
  useEffect(() => {
    const ref = await projectFirestore.collection(collection).doc(id)

    ref.onSnapshot(snapshot => {
      setDocument({ ...snapshot.data(), id: snapshot.id })
      setError(null)
    })
  }, [collection, id])

} 