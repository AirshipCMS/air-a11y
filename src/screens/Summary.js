import React from 'react'
import ProgressBar from '../components/ProgressBar'
import { useStateValue } from '../components/StateProvider'

export default () => {

  const [props] = useStateValue();
  console.log(props)
  return (
    <div className="container" >
      <div className="content">
        <ProgressBar activeScreen='Summary' />
        <h1 className="title">Summary</h1>
        <div>
          {Object.keys(props).map(key => (
            <section key={key}>
              {Object.keys(props[key]).map(k => (
                <div key={k}>
                  {/* <h1>{props[key][k].replace(/_/g, ' ')}</h1> */}
                  {/* <p>{props[key][k]}</p> */}
                </div>
              ))}
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}