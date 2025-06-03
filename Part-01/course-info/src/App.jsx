const Header = (props) => {
  console.log(props);
  return (<h1>{props.courseName}</h1>)
}

const Content = ({parts}) => {
  console.log(parts);
return(<>
{parts.map((part,index) =>{
  return <Part key={index} part={part.name} exercises={part.exercises} />
})}
        
      </>);
}
const Part = ({part, exercises}) => {
  return (<p>{part} {exercises}</p>)
}

const Total = ({parts}) => {
  return (<p>Number of exercises {parts.reduce((total,part)=> total + part.exercises
    ,0)}</p>)
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header courseName={course.name} />
      <Content parts = {course.parts} />
      <Total parts={course.parts}   />
    </div>
  )
};

export default App;
