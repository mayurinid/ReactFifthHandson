import React from 'react'

const ChildComponent = (props) => {
  return (
    <div style={{color:"white",backgroundColor:'green',height:"30px"}}>ChildComponent {props.data}</div>
  )
}

export default ChildComponent