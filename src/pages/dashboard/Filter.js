const filterList = ['all', 'mine', 'development', 'design', 'marketing', 'sales']

export default function Filter({ currentFilter }) {

  const handleClick = (newFilter) => {
    console.log(newFilter)
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
            {filter}
          </button>  
        ))}
      </nav>
    </div>
  )
}
