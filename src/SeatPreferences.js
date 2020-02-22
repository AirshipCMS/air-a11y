import React from 'react'
import ProgressBar from './components/ProgressBar'
import { useHistory } from 'react-router-dom'

export default () => {
  let history = useHistory()

  return (
    < div className="container" >
      <div className="content">
        <ProgressBar activeScreen='Seat+Location' />
        <h1 className="title">Seat and Location</h1>
        <section className="section">
          <div className="container">
            <h1 className="title">I need a seat...</h1>
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p className="title">With movable arm rests</p>
                  <input type="checkbox" />
                  <span className="icon">
                    <i className="help far fa-question-circle"></i>
                  </span>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p className="title">Easily accessible call button, lights, A/C</p>
                  <input type="checkbox" />
                  <i className="help far fa-question-circle"></i>
                </article>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h1 className="title">Seat location next to aisle</h1>
            <i className="help far fa-question-circle"></i>
            <div className="columns">
              <div className="control column">
                <label className="radio">
                  <input type="radio" name="aisle_seat" value="required" />
                  I need a seat next to the aisle
                </label>
                <label className="radio">
                  <input type="radio" name="aisle_seat" value="preferred" />
                  I prefer a seat next to the aisle
                </label>
                <label className="radio">
                  <input type="radio" name="aisle_seat" value="not important" />
                  Not important
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
            <h1 className="title">Seat location next to bathroom</h1>
            <i className="help far fa-question-circle"></i>
            <div className="columns">
              <div className="control column">
                <label className="radio">
                  <input type="radio" name="bathroom_seat" value="required" />
                  I need a seat next to a bathroom
                </label>
                <label className="radio">
                  <input type="radio" name="bathroom_seat" value="preffered" />
                  I prefer a seat next to a bathroom
                </label>
                <label className="radio">
                  <input type="radio" name="bathroom_seat" value="not important" />
                  Not important
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
            <h1 className="title">Seat location in front row</h1>
            <i className="help far fa-question-circle"></i>
            <div className="columns">
              <div className="control column">
                <label className="radio">
                  <input type="radio" name="front_row_seat" value="required" />
                  I need a seat in the front row (or row closest to the entrance)
                </label>
                <label className="radio">
                  <input type="radio" name="front_row_seat" value="preffered" />
                  I prefer a seat in the front row (or row closest to the entrance)
                </label>
                <label className="radio">
                  <input type="radio" name="front_row_seat" value="not important" />
                  Not important
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