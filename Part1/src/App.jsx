import { useState } from 'react'

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

  const total = goodReview + neutralReview + badReview
  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => buttonHandler("Good",goodReview)}>Good</button>
      <button onClick={() => buttonHandler("Neutral",neutralReview)}>Neutral</button>
      <button onClick={() => buttonHandler("Bad",badReview)}>Bad</button>
      <h1>Statistics</h1>
      <p>Good {goodReview}</p>
      <p>Neutral {neutralReview}</p>
      <p>Bad {badReview}</p>
      <p>All {total}</p>
      <p>Average {total / 3}</p>
      <p>Positive {goodReview * 100 / total}%</p>
    </div>
  )
}
export default App