import React from 'react'

function PersonForm({handleSubmit, newName, setNewName, newPhoneNo, setNewPhoneNo, isUpdating, setIsUpdating}) {
  const handleCancel = () => {
    setNewName('');
    setNewPhoneNo('');
    setIsUpdating(false);
  };
  const formStyle = {
    maxWidth: '300px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const inputGroupStyle = {
    marginBottom: '15px'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    color: '#495057',
    fontWeight: '500'
  };

  const inputStyle = {
    width: '95%',
    padding: '8px 12px',
    border: '1px solid #ced4da',
    borderRadius: '4px',
    fontSize: '16px',
    transition: 'border-color 0.15s ease-in-out',
    outline: 'none'
  };

  const buttonContainerStyle = {
    display: 'flex',
    gap: '10px',
    marginTop: '20px'
  };

  const buttonBaseStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'transform 0.1s ease-in-out, opacity 0.1s ease-in-out',
    ':hover': {
      opacity: '0.9',
      transform: 'scale(1.02)'
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Name</label>
          <input 
            style={inputStyle}
            value={newName}
            onChange={(e)=>{setNewName(e.target.value)}}
            placeholder="Enter name"
          />
        </div>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Phone Number</label>
          <input 
            style={inputStyle}
            value={newPhoneNo}
            onChange={(e)=>{setNewPhoneNo(e.target.value)}}
            placeholder="Enter phone number"
          />
        </div>
        <div style={buttonContainerStyle}>
          <button 
            type="submit" 
            style={{
              ...buttonBaseStyle,
              backgroundColor: isUpdating ? '#4CAF50' : '#2196F3',
              color: 'white',
              flex: '1'
            }}
          >
            {isUpdating ? 'Update Contact' : 'Add Contact'}
          </button>
          {isUpdating && (
            <button 
              type="button" 
              onClick={handleCancel}
              style={{
                ...buttonBaseStyle,
                backgroundColor: '#f44336',
                color: 'white',
                width: '120px'
              }}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
  )
}

export default PersonForm
