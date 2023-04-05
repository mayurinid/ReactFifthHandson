import React, { useState } from 'react'

const HOC = () => {
    const [count,setCounter]=useState(0)
  return (
    <>
    <button onClick={()=>{setCounter(count+1)}}>Clicked {count} times</button>
    </>
  )
}

export default HOC