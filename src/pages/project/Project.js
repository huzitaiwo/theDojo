import { useParams } from 'react-router-dom'
import { useDocument } from '../../hooks/useDocument'

// styles
import './Project.css'
import ProjectComment from './ProjectComment'
import ProjectSummary from './ProjectSummary'


export default function Project() {
  const { id } = useParams()
  const { error, document } = useDocument('projects', id)

  if(error) {
    return <div className='error'>{error}</div>
  }

  if(!document) {
    return <div className='loading'>loading...</div>
  }

  return (
    <div className='project-details'>
      <ProjectSummary project={document} />
      <ProjectComment project={document} />
    </div>
  )
}
