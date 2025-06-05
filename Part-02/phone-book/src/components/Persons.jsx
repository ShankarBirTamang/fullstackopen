import React from 'react'

function Persons({filteredPersons}) {
  return (
   <div>
        {filteredPersons.map((person, index) => (
          <p key={index}>{person.name} {person.phone}</p>
        ))}
    </div>
  )
}

export default Persons
