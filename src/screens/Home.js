import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { useStateValue } from '../components/StateProvider'

export default () => {
  const [_, dispatch] = useStateValue();
  let history = useHistory()

  const speechNavigation = {
    back: () => history.goBack(),
    next: () => history.push('/type-of-needs')
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch({ type: 'A11Y_SELECTIONS', selections:[] })
    dispatch({ type: 'A11Y_NAVIGATION', ...{ speechNavigation } })
  }, [])

  return (
    <div className="container" >
      <section className="section">
        <div className="question">
          <div className="question-left">
          </div>
          <div className="question-right">
            <p className="intro">Create an accessibility profile that matches you to flights that meet your needs. Your profile can be shared with booking platforms and travel agencies.</p>
            <div className="hr hr-thin"></div>
            <button onClick={() => history.push('/type-of-needs')} className="button">Create profile</button>
            <p>Turn on voice recognition with <button className="text-button air-ally-button"><i class="fas fa-microphone"></i> Air Ally Assistant</button>.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
// a16z
