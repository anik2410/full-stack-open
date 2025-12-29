const Header = (props) =>{
  return(
    <h1>{props.course}</h1>
  )
}

const Part = (props) =>{
  return(
    <p>{props.name} {props.excercises}</p>
  )
}

const Content = (props) =>{
  return(
    <>
    <Part name={props.parts[0].name} excercises={props.parts[0].excercises} />
    <Part name={props.parts[1].name} excercises={props.parts[1].excercises} />
    <Part name={props.parts[2].name} excercises={props.parts[2].excercises} />
    </>
  )
}

const Total = (props) =>{
  return(
    <p>Number of excercises {props.parts[0].excercises + props.parts[1].excercises + props.parts[2].excercises}</p>
  )
}

const App = () =>{
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      excercises: 10
    },
    {
      name: 'Using props to pass data',
      excercises: 7
    },
    {
      name: 'State of a component',
      excercises: 14
    }
  ]

  return(
    <div>
      <Header course={course}/>
      <Content  parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

export default App