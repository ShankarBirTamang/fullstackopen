import Part from "./Part"

function Content({course}) {
  return (
    <ul>
        {course.parts.map(part => (
        <Part key={part.id} part={part} />
        ))}
    </ul>
  )
}

export default Content
