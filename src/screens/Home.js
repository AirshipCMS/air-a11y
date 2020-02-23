import React from 'react'
import { useHistory } from "react-router-dom"

export default () => {
  let history = useHistory()

  return (
    <div className="app-container">
      <div className="container">
        <section className="section header">
          <div className="header-left">
            <h1>air a11y</h1>
          </div>
          <div className="header-right">
            <div className="logo">[logo]</div>
          </div>
        </section>
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
        <section className="section">
          <div className="question">
            <div className="question-left">
              <div className="help-text" id="help-question1">
                <p className="small">Small text here.</p>
              </div>
            </div>
            <div className="question-right">
              <h2>Some subtitle 
                <span className="icon help-text-button help-text-button-off" for="help-question1">
                  <i className="help far fa-question-circle"></i>
                  <i className="help fas fa-question-circle"></i>
                </span>
              </h2>
              <p>Some text here.</p>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="footer">
            <div className="footer-left">

            </div>
            <div className="footer-right">
              <div className="columns">
                <div className="column">
                  <p className="small">By <a href="#" target="_blank">PurelyFunctional.co</a></p>
                </div>
                <div className="column">
                  <p className="small">2020 IATA Hackathon</p>
                </div>
                <div className="column">
                  <p className="small">Seattle, WA</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}