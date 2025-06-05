import React from 'react'

function PersonForm({handleSubmit, newName, setNewName, newPhoneNo, setNewPhoneNo}) {
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
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
  )
}

export default PersonForm
