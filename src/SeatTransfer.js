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
            <h1 className="title">Getting to my seat</h1>
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <label class="checkbox">
                    <input type="checkbox" name="aisle_chair" />
                    Request an aisle chair to help with transfer to my seat on the plane
                    </label>
                  <figure class="image is-128x128">
                    <img src="https://bulma.io/images/placeholders/128x128.png" />
                  </figure>
                  <span className="icon">
                    <i className="help far fa-question-circle"></i>
                  </span>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <label class="checkbox">
                    <input type="checkbox" name="seat_assistance" />
                    Request additional assistance to transfer to my seat. An additional person/transporter will help you to your seat.
                    </label>
                  <figure class="image is-128x128">
                    <img src="https://bulma.io/images/placeholders/128x128.png" />
                  </figure>
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
            <h1 className="title">Getting from check-in to the gate, and back</h1>
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <label class="checkbox">
                    <input type="checkbox" name="request_wheelhcair" />
                    Request a wheelchair to help me get to/from the aircraft.
                    </label>
                  <figure class="image is-128x128">
                    <img src="https://bulma.io/images/placeholders/128x128.png" />
                  </figure>
                  <span className="icon">
                    <i className="help far fa-question-circle"></i>
                  </span>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <label class="checkbox">
                    <input type="checkbox" name="transportation_assistance" />
                    Request additional assistance to pull/push me in the wheelchair to and from the aircraft. An additional person/transporter will help you get to/from the aircraft.
                    </label>
                  <figure class="image is-128x128">
                    <img src="https://bulma.io/images/placeholders/128x128.png" />
                  </figure>
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