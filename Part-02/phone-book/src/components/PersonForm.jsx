import React from 'react'

function PersonForm({handleSubmit, newName, setNewName, newPhoneNo, setNewPhoneNo, isUpdating, setIsUpdating}) {
  const handleCancel = () => {
    setNewName('');
    setNewPhoneNo('');
    setIsUpdating(false);
  };

  return (
    <form onSubmit={handleSubmit}>
        <div>
          name: <input 
          value={newName}
          onChange={(e)=>{setNewName(e.target.value)}}
          />
        </div>
        <div>
          number: <input value={newPhoneNo}
          onChange={(e)=>{setNewPhoneNo(e.target.value)}}
          />
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button type="submit" style={{ backgroundColor: isUpdating ? '#4CAF50' : '#2196F3', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            {isUpdating ? 'Update' : 'Add'}
          </button>
          {isUpdating && (
            <button 
              type="button" 
              onClick={handleCancel}
              style={{ backgroundColor: '#f44336', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '4px' }}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
  )
}

export default PersonForm
