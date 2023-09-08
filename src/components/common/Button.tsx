import React from 'react'

export default function Button({btnclass ,title, onClick}) {
  return (
    <button onClick={onClick} className={`btn ${btnclass}`}>{title}</button>
  )
}
