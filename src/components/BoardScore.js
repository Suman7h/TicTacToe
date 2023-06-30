import React from 'react'
import "./BoardScore.css"

const BoardScore = ({scores,xPlaying}) => {
    const{xScore,oScore}=scores;
  return (
    <div className='scoreboard'>
      <span className={` score xscore ${!xPlaying && 'inactive'} `}>X - {xScore}</span>
      <span className={` score oscore ${xPlaying && 'inactive'} `}>O - {oScore}</span>
    </div>

  )
} 

export default BoardScore
