import Content from "./Content"
import Header from "./Header"
import Total from "./Total";

const Course = ({course}) => {
    const totalExercise = course.parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <div>
        <Header name={course.name} />
        <Content course={course} />
        <Total total={totalExercise} />
    </div>
  )
}

export default Course
