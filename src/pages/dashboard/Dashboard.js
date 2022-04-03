import { useCollection } from '../../hooks/useCollection'

// styles and components
import './Dashboard.css'
import ProjectList from '../../components/ProjectList'
import Filter from './Filter'

export default function Dashboard() {
  const { documents, error, isLoading } = useCollection('projects')

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {isLoading && <div>loading...</div>}
      {error && <div className='error'>{error}</div>}
      {documents && <Filter />}
      {documents && <ProjectList projects={documents} />}
    </div>
  )
}
