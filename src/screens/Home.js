import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useHistory } from "react-router-dom"

export default () => {
  let history = useHistory()

  return (
    <div className="app-container">
      <div className="container">
        <Header />
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
        <Footer />
      </div>
    </div>
  )
}
