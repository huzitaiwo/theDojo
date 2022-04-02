import { useFirestore } from "../../hooks/useFirestore"

//components
import Avatar from "../../components/Avatar"

export default function ProjectSummary({ project }) {
  const { deleteDocument } = useFirestore('projects')

  const handleDelete = e => {
    deleteDocument(project.id)
  }

  return (
    <div>
      <div className="project-summary">
        <h2 className="page-title">{project.name}</h2>
        <p className="due-date">Project due by {project.dueDate.toDate().toDateString()}</p>
        <p className="details">{project.details}</p>
        <h4>Project is assigned to:</h4>
        <div className="assigned-users">
          {project.assignedUsersList.map(user => (
            <div key={user.id}>
              <Avatar src={user.photoURL} />
            </div>
          ))}
        </div>
        <button onClick={handleDelete} className="btn">Mark as complete</button>
      </div> 
    </div>
  )
}
