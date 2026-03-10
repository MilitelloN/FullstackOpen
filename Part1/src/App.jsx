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
  exs.exArr.forEach(e => total += e)
  return (
    <p>Number of exercises {total}</p>
  )
}



const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header courseName={course}/>
      <Content partsArr={[part1, part2, part3]}/>
      <Total exArr={[part1.exercises, part2.exercises, part3.exercises]}/>
    </div>
  )
}

export default App