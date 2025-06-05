import React from 'react'

const Course = ({course}) => {
  return (
    <div>
        <h2>{course.name}</h2>
        <ul>
            {course.parts.map(part => (
            <li key={part.id}>
                {part.name} {part.exercises}
            </li>
            ))}
        </ul>
       
    </div>
  )
}

export default Course
