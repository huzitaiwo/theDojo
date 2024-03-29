import { useCollection } from '../hooks/useCollection'
import Avatar from './Avatar'

// styles
import './UserList.css'

export default function UserList() {
    const { error, documents} = useCollection('users')

  return (
    <div className="user-list">
      <h2>All Users</h2>
      {error && <p className='error'>{error}</p>}
      {documents && documents.map(user => (
        <div key={user.id} className='user-list-item'>
          {user.online && <span className='online-user' />}
          <span>{user.displayName}</span>
          <Avatar src={user.photoURL} alt='user avatar' />
        </div>
      ))}
    </div>
  )
}
