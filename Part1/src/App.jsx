const CourseData = (course) => {
  const courseName = course.courseData.name
  const courseParts = course.courseData.parts
  let total = 0
  courseParts.forEach(e => {
    total += e.exercises
  }); 
  return (
    <>
    <h1>{courseName}</h1>
    <p>{courseParts[0].name} {courseParts[0].exercises}</p>
    <p>{courseParts[1].name} {courseParts[1].exercises}</p>
    <p>{courseParts[2].name} {courseParts[2].exercises}</p>
    <p>Number of exercises {total}</p>
    </>
  )
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
      <CourseData courseData={course} />
    </div>
  )
}

export default App