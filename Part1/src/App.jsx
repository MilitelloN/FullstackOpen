const Header = (course) => {
  return (
    <h1>{course.courseName}</h1>
  )
}

const Content = (parts) => {
  const arr = parts.partsArr
  return (
    <>
      <p>{arr[0].name} {arr[0].exercises}</p>
      <p>{arr[1].name} {arr[1].exercises}</p>
      <p>{arr[2].name} {arr[2].exercises}</p>
    </>
  )
}

const Total = (exs) => {
  let total = 0
  exs.partsArr.forEach(e => total += e.exercises)
  return (
    <p>Number of exercises {total}</p>
  )
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
      <Header courseName={course} />
      <Content partsArr={parts}/>
      <Total partsArr={parts}/>
    </div>
  )
}

export default App