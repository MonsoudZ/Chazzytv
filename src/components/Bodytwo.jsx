import React from 'react'
import ReactPlayer from 'react-player'
import "./BodyTwo.css"


const BodyTwo = () => {
  return (
    <div className = "video">
    <ReactPlayer   width="560"  url="https://www.youtube.com/watch?v=wViJTC04NLs" />
    </div>
  )
}

export default BodyTwo