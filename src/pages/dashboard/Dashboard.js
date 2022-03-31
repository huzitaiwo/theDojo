import { useCollection } from '../../hooks/useCollection'

// styles
import './Dashboard.css'

export default function Dashboard() {
  const { documents, error, isLoading } = useCollection('projects')

  return (
    <div>
      
    </div>
  )
}
