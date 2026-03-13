import { useState } from 'react'

const VotesLine = (props) => {
    return (
      <>
        <p>Has {props.votes} votes</p>
      </>
    )
}

const MostVotedAnecdote = (props) => {

  return (
    <>
      <h1>Anecdote with most votes</h1>
      <p>{props.anecdote}</p>
      <VotesLine votes={props.votes} />
    </>
  )

}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [mostVotedAn, setMostVotedAn] = useState({
    anecdote: anecdotes[0],
    score: votes[0]
  })

  const nextAnecdoteHandler = () => {
    const num = Math.floor(Math.random() * anecdotes.length)
    setSelected(num)
  }

  const mostVotedAnecdote = (anArr, votesArr) => {
    let max = 0
    let maxPos = 0
    for (let pos = 0; pos < votesArr.length; pos++) {
      if (votesArr[pos] > max) {
        max = votesArr[pos]
        maxPos = pos
      }
    }

    return {
      anecdote: anArr[maxPos],
      score: votesArr[maxPos]
    }
  }

  const setVotesHandler = (votePos) => {

    const copy = [...votes]
    copy[votePos] += 1
    setMostVotedAn(mostVotedAnecdote(anecdotes, copy))
    setVotes(copy)
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <VotesLine votes={votes[selected]} />
      <button onClick={() => setVotesHandler(selected)}>Vote</button>
      <button onClick={() => nextAnecdoteHandler()}>Next anecdote</button>
      <MostVotedAnecdote anecdote={mostVotedAn.anecdote} votes={mostVotedAn.score} />
    </div>
  )
}

export default App