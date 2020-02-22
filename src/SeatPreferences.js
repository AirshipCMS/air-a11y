import React from 'react'
import ProgressBar from './components/ProgressBar'
import { useHistory } from 'react-router-dom'

export default () => {
  let history = useHistory()

  return (
    < div className="container" >
      <div className="content">
        <ProgressBar activeScreen='Seat+Location' />
        <h1 className="title">Seat + Location</h1>
        <section className="section">
          <div className="container">
            <h1 className="title">Section</h1>
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p className="title">Armrest</p>
                  <input type="checkbox" />
                  <span className="icon">
                    <i className="help far fa-question-circle"></i>
                  </span>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p className="title">Other thing</p>
                  <input type="checkbox" />
                  <i className="help far fa-question-circle"></i>
                </article>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h1 className="title">Section</h1>
            <i className="help far fa-question-circle"></i>
            <div className="columns">
              <div className="control column">
                <label className="radio">
                  <input type="radio" name="answer" />
                  option a
            </label>
                <label className="radio">
                  <input type="radio" name="answer" />
                  option b
            </label>
                <label className="radio">
                  <input type="radio" name="answer" />
                  option c
            </label>
              </div>
              <figure className="image is-128x128 column">
                <img src="https://bulma.io/images/placeholders/128x128.png" />
              </figure>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h1 className="title">Section</h1>
            <i className="help far fa-question-circle"></i>
            <div className="columns">
              <div className="control column">
                <label className="radio">
                  <input type="radio" name="answer" />
                  option a
            </label>
                <label className="radio">
                  <input type="radio" name="answer" />
                  option b
            </label>
                <label className="radio">
                  <input type="radio" name="answer" />
                  option c
            </label>
              </div>
              <figure className="image is-128x128 column">
                <img src="https://bulma.io/images/placeholders/128x128.png" />
              </figure>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h1 className="title">Section</h1>
            <i className="help far fa-question-circle"></i>
            <div className="columns">
              <div className="control column">
                <label className="radio">
                  <input type="radio" name="answer" />
                  option a
            </label>
                <label className="radio">
                  <input type="radio" name="answer" />
                  option b
            </label>
                <label className="radio">
                  <input type="radio" name="answer" />
                  option c
            </label>
              </div>
              <figure className="image is-128x128 column">
                <img src="https://bulma.io/images/placeholders/128x128.png" />
              </figure>
            </div>
          </div>
        </section>
        <section>
          <button onClick={() => history.push('/seat-transfer')} className="button is-fullwidth">Button</button>
        </section>
      </div>
    </div >
  )
}