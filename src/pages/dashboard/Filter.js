import { useState } from "react"

const filterList = ['all', 'mine', 'development', 'design', 'marketing', 'sales']

export default function Filter() {
  const [currentFilter, setCurentFilter] = useState('all')

  const handleClick = (newFilter) => {
    console.log(newFilter)
    setCurentFilter(newFilter)
  }

  return (
    <div className='project-filter'>
      <nav>
        {filterList.map(filter => (
          <button 
            key={filter}
            onClick={() => handleClick(filter)}
            className={currentFilter === filter ? 'active' : ''}
          >
            {f}
          </button>  
        ))}
      </nav>
    </div>
  )
}
