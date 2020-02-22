import React from 'react'
import ProgressBar from './components/ProgressBar'
import { useHistory } from 'react-router-dom'

export default () => {
  let history = useHistory()

  return (
    < div className="container" >
      <div className="content">
        <ProgressBar activeScreen='Seat Transfer' />
        <h1 className="title">Getting to My Seat</h1>
        <section className="section">
          <div className="container">
            <h1 className="title">Section</h1>
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p className="title">Aisle Chair</p>
                  <input type="checkbox" />
                  <span className="icon">
                    <i className="help far fa-question-circle"></i>
                  </span>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p className="title">Transporter Assistant</p>
                  <input type="checkbox" />
                  <span className="icon">
                    <i className="help far fa-question-circle"></i>
                  </span>
                </article>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h1 className="title">Section</h1>
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p className="title">Aisle Chair</p>
                  <input type="checkbox" />
                  <span className="icon">
                    <i className="help far fa-question-circle"></i>
                  </span>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p className="title">Transporter Assistant</p>
                  <input type="checkbox" />
                  <span className="icon">
                    <i className="help far fa-question-circle"></i>
                  </span>
                </article>
              </div>
            </div>
          </div>
        </section>
        <button onClick={() => history.push('/mobility-aid')} className="button is-fullwidth">Button</button>
      </div>
    </div >
  )
}