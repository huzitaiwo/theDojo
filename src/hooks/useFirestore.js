import { useReducer, useEffect, useState } from 'react'
import { projectFirestore, timestamp } from '../firebase/config'

let initialState = {
  document: null,
  error: null,
  isLoading: false,
  success: null
}

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case 'IS_LOADING':
      return { isLoading: true, document: null, error: null, success: null }
    case 'ADD_DOCUMENT':
      return { isLoading: false, document: action.payload, error: null, success: true }
    case 'DELETE_DOCUMENT':
      return { isLoading: false, document: null, error: null, success: true }
    case 'UPDATE_DOCUMENT':
      return { isLoading: false, document: action.payload, error: null, success: true }
    case 'ERROR':
      return { isLoading: false, document: null, error: action.payload, success: false }
    default:
      return state
  }
}

export const useFirestore = collection => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState)
  const [unMounted, setUnMounted] = useState(false)

  // collection ref
  const ref = projectFirestore.collection(collection)

  // only dispatch if not unMounted
  const dispatchIfNotUnMounted = action => {
    if (!unMounted) {
      dispatch(action)
    }
  }

  // add document
  const addDocument = async (doc) => {
    dispatch({ type: 'IS_LOADING' })

    try {
      const createdAt = timestamp.fromDate(new Date())
      const addedDocument = await ref.add({ ...doc, createdAt })
      dispatchIfNotUnMounted({ type: 'ADD_DOCUMENT', payload: addedDocument })
    }
    catch (err) {
      dispatchIfNotUnMounted({ type: 'ERROR', payload: err.message })
    }
      
  }

  // delete document
  const deleteDocument = async (id) => {
    dispatch({ type: 'IS_LOADING' })

    try {
      await ref.doc(id).delete()
      dispatchIfNotUnMounted({ type: "DELETE_DOCUMENT", payload: deleteDocument })
    }
    catch (err) {
      dispatchIfNotUnMounted({ type: 'ERROR', payload: 'could not delete' })
    }
  }

  // update document
  const updateDocument = async (id, updates) => {
    dispatch({ type: 'IS_LOADING' })

    try {
      const updatedDocument = await ref.doc(id).update(updates)
      dispatchIfNotUnMounted({ type: 'UPDATE_DOCUMENT', payload: updatedDocument })
    }
    catch (err) {
      dispatchIfNotUnMounted({ type: 'ERROR', payload: err.message })
      return null
    }
  }

  useEffect(() => {
    return () => setUnMounted(true)
  }, [])

  return { addDocument, deleteDocument, updateDocument, response }

}