import { useState } from 'react'

const Statistics = (props) => {
  const total = props.stats.good + props.stats.neutral + props.stats.bad
  if (total == 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    )
  } else {
    return (
      <>
        <h1>Statistics</h1>
        <StatisticLine text="Good" value={props.stats.good} />
        <StatisticLine text="Neutral" value={props.stats.neutral} />
        <StatisticLine text="Bad" value={props.stats.bad} />
        <StatisticLine text="All" value={total} />
        <StatisticLine text="Average" value={total / 3} />
        <StatisticLine text="Positive" value={props.stats.good / total} />
      </>
    )

  }
}

const StatisticLine = (props) => {
  if (props.text == "Positive") {
    return (
      <p>{props.text} {props.value}%</p>
    )
  } else {
    return (
      <p>{props.text} {props.value}</p>
    )
  }

}

const Button = (props) => {
  return (
    <>
      <button onClick={props.handler}>{props.text}</button>
    </>
  )
}



const App = () => {
  const [goodReview, setGoodReview] = useState(0)
  const [neutralReview, seNeutralReview] = useState(0)
  const [badReview, setBadReview] = useState(0)
  const buttonHandler = (review, reviewNum) => {
    if (review == "Good") {
      const newReview = reviewNum + 1
      setGoodReview(newReview)
    } else if (review == "Neutral") {
      const newReview = reviewNum + 1
      seNeutralReview(newReview)
    } else if (review == "Bad") {
      const newReview = reviewNum + 1
      setBadReview(newReview)
    }
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handler={() => buttonHandler("Good", goodReview)} text="Good" />
      <Button handler={() => buttonHandler("Neutral", neutralReview)} text="Neutral" />
      <Button handler={() => buttonHandler("Bad", badReview)} text="Bad" />
      <Statistics stats={{ good: goodReview, neutral: neutralReview, bad: badReview }} />
    </div>
  )
}
export default App