import React from 'react'

const State = () => {
    const [count, setCount] = React.useState(0);
    const [likecount, setlikeCount] = React.useState(0);
    const [dislikecount, setdislikeCount] = React.useState(0);
  return (
    <div>
        <h1>useState example</h1>
        <p>Current count: {count}</p>
        <p>Like count: {likecount}</p>
        <p>Dislike count: {dislikecount}</p>
        {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
        <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
        <button onClick={() => setlikeCount(prev => prev + 1)}>Like</button>
        <button onClick={() => setdislikeCount(prev => prev + 1)}>Dislike</button>
    </div>
  )
}

export default State