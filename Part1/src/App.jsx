const Header = (props) => {
  return (
    <>
    <h1>{props.courseName}</h1>
    </>
  )
}

const Content = (courseData) => {
  return (
    <>
    <p>{courseData.partName} {courseData.NumberEx}</p>
    </>
  )
}

const Total = (excerciseNumbers) => {
  return (
    <>
    <p>Number of exercises {excerciseNumbers.ex1 + excerciseNumbers.ex2 + excerciseNumbers.ex3}</p>
    </>
  )
}



const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header courseName={course} />
      <Content partName={part1} NumberEx={exercises1}/>
      <Content partName={part2} NumberEx={exercises2}/>
      <Content partName={part3} NumberEx={exercises3}/>
      
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3}/>
    </div>
  )
}

export default App