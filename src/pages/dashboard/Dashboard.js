import { useState } from 'react'
import { useCollection } from '../../hooks/useCollection'
import { useAuthContext } from '../../hooks/useAuthContext'

// styles and components
import './Dashboard.css'
import ProjectList from '../../components/ProjectList'
import Filter from './Filter'

export default function Dashboard() {
  const { user } = useAuthContext()
  const { documents, error, isLoading } = useCollection('projects')
  const [currentFilter, setCurentFilter] = useState('all')

  const changeFilter = (newFilter) => {
    setCurentFilter(newFilter)
  }

  const projects = documents.filter(document => {
    switch (currentFilter) {
      case 'all':
        return true
      case 'mine':
        let assignedToMe = false
        document.assignedUsersList.forEach(u => {
          if (user.uid === u.id) {
            assignedToMe = true
          }
        })
        return assignedToMe
      case 'development':
      case 'design':
      case 'sales':
      case 'marketing':
        console.log(document.category, currentFilter)
        return document.category == currentFilter
    }
  })

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {isLoading && <div>loading...</div>}
      {error && <div className='error'>{error}</div>}
      {documents && (
        <Filter currentFilter={currentFilter} changeFilter={changeFilter} />
      )}
      {documents && <ProjectList projects={projects} />}
    </div>
  )
}
