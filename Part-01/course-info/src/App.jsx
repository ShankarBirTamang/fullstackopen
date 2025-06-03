const Header = (props) => {
  return (<h1>{props.course}</h1>)
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
      <Content parts = {parts} />
      <Total parts={parts}   />
    </div>
  )
};

export default App;
