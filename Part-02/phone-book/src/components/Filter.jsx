
function Filter({searchName, handleSearchChange }) {  const filterContainerStyle = {
    width: '200px',
    padding: '15px 20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    height: 'fit-content'
  };

  const inputGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
  };

  const labelStyle = {
    color: '#495057',
    fontWeight: '500',
    fontSize: '16px'
  };

  const inputStyle = {
    width: '95%',
    padding: '8px 12px',
    border: '1px solid #ced4da',
    borderRadius: '4px',
    fontSize: '16px',
    transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
    outline: 'none'
  };

  return (
    <div style={filterContainerStyle}>
      <div style={inputGroupStyle}>
        <label style={labelStyle}>Filter contacts</label>
        <input 
          style={inputStyle}
          placeholder="Search by name..."
          value={searchName}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  )
}

export default Filter
