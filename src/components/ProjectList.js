import { Link } from 'react-router-dom'

// styles and components
import './ProjectList.css'
import Avatar from './Avatar'

export default function ProjectList({ projects }) {
    
  return (
    <div className='project-list'>
      {projects.length === 0 && <p>No project yet!!!</p>}
      {projects.map(project => (
        <Link to={`/projects/${project.id}`} key={project.id}>
          <h4>{project.name}</h4>
          <p>Due by {project.dueDate.toDate().toDateString()}</p>
          <ul className='assigned-to'>
            {project.assignedUsersList.map(user=> (
              <li key={user.photoURL}>
                <Avatar src={user.photoURL}/>
              </li>          
            ))}
          </ul>
        </Link>
      ))}
    </div>
  )
}
