
function Filter({searchName, handleSearchChange }) {
  return (
        <p>Filter shown with: <input 
             placeholder="Search by name"
              value={searchName}
              onChange={handleSearchChange}
      /></p>
    
  )
}

export default Filter
