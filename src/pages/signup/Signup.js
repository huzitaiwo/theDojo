import { useState } from 'react'

// styles
import './Signup.css'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [thumbnail, setThumbnail] = useState(null)
  const [thumbnailError, setThumbnailError] = useState(null)

  const handleFileChange = e => {
    setThumbnail(null)
    let selected = e.target.files[0]

    if (!selected) {
      setThumbnailError('Please select an image file')
      return
    }
    if (!selected.type.includes('image')) {
      setThumbnailError('Please file must be an image')
      return
    }
    if (selected.size > 1000000) {
      setThumbnailError('Image file size must be less than 1MB')
      return
    }
    
    setThumbnailError(null)
    setThumbnail(selected)
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(email, password, displayName, thumbnail)
  }

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>sign up</h2>
      <label>
        <span>email:</span>
        <input
          required 
          type="email" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email}
        />
      </label>
      <label>
        <span>password:</span>
        <input
          required
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password}
        />
      </label>
      <label>
        <span>display name:</span>
        <input
          required
          type="text" 
          onChange={(e) => setDisplayName(e.target.value)} 
          value={displayName}
        />
      </label>
      <label>
        <span>Profile thumbnail:</span>
        <input 
          required
          type="file"
          onChange={handleFileChange}
        />
        {thumbnailError && <p className='error'>{thumbnailError}</p>}
      </label>
      <button className="btn">Sign up</button>
    </form>
  )
}
