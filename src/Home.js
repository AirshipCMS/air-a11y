import React from 'react'
import { useHistory } from "react-router-dom"

export default () => {
  let history = useHistory()

  return (
    <div className="container">
      <div className="content">
        <h1 className="title">Air A11y</h1>
        <h2 className="subtitle">description</h2>
        <button onClick={() => history.push('/type-of-needs')} className="button">Button</button>
      </div>
    </div>
  )
}