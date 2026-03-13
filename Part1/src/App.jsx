import { useState } from 'react'

const Statistics = (props) => {
  const total = props.stats.good + props.stats.neutral + props.stats.bad
  if(total == 0){
    return(
      <>
        <p>No feedback given</p>
      </>
    )
  }else {
    return (
      <>
        <h1>Statistics</h1>
        <p>Good {props.stats.good}</p>
        <p>Neutral {props.stats.neutral}</p>
        <p>Bad {props.stats.bad}</p>
        <p>All {total}</p>
        <p>Average {total / 3}</p>
        <p>Positive {props.stats.good / total}%</p>
      </>
    )
    
  }


}




const App = () => {
  const [goodReview, setGoodReview] = useState(0)
  const [neutralReview, seNeutralReview] = useState(0)
  const [badReview, setBadReview] = useState(0)
  const buttonHandler = (review,reviewNum) => {
    if(review == "Good"){
      const newReview = reviewNum + 1
      setGoodReview(newReview)
    } else  if(review == "Neutral"){
      const newReview = reviewNum + 1
      seNeutralReview(newReview)
    }else if(review == "Bad"){
      const newReview = reviewNum + 1
      setBadReview(newReview)
    }
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => buttonHandler("Good",goodReview)}>Good</button>
      <button onClick={() => buttonHandler("Neutral",neutralReview)}>Neutral</button>
      <button onClick={() => buttonHandler("Bad",badReview)}>Bad</button>
      <Statistics stats={{good : goodReview, neutral : neutralReview, bad : badReview}}/>
    </div>
  )
}
export default App