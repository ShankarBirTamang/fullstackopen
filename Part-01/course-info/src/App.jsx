const Header = (props) => {
  console.log(props);
  return (<h1>{props.course}</h1>)
}

const Content = ({parts}) => {
  console.log(parts);
return(<>
{parts.map(part =>{
  <Part part={part.name} exercises={part.exercises} />
})}
        
      </>);
}
const Part = ({part, exercises}) => {
  return (<p>{part} {exercises}</p>)
}

const Total = ({exercises1,exercises2,exercises3}) => {
  return (<p>Number of exercises {exercises1 + exercises2 + exercises3}</p>)
}

const App = () => {
 const course = 'Half Stack application development'
   const parts = [
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

  return (
    <div>
      <Header course={course} />
      <Content
        parts = {parts}
      />
      <Total
        exercises1={parts[0].exercises}
        exercises2={parts[1].exercises}
        exercises3={parts[2].exercises}
      />
    </div>
  )
};

export default App;
