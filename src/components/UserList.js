import { useCollection } from '../hooks/useCollection'
import { Avatar } from './Avatar'

// styles
import './UserList.css'

export default function UserList() {
    const { error, documents} = useCollection()

  return (
    <div className='user-list'>
      <h2>All Users</h2>
      {error && <p className='error'>{error}</p>}
      {documents && documents.map(user => (
        <div key={user.id}>
          <span>{user.displayName}</span>
          <Avatar src={user.photoURL} alt='user avatar' />
        </div>
      ))}
    </div>
  )
}
