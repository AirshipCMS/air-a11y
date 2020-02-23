import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProgressBar from '../components/ProgressBar'
import { useStateValue } from '../components/StateProvider'
import { useHistory } from 'react-router-dom'

export default () => {
  let history = useHistory()
  const [{ seatPreferences }, dispatch] = useStateValue();

  const updateForm = (field, value) => {
    dispatch({ type: 'SAVE_SEAT_PREFERENCE', form_field: { [field]: value } })
  }

  return (
    <div className="app-container">
      <div className="container">
        <Header />
        <ProgressBar activeScreen='Seating' />

        <section className="section">
          <div className="question">
            <div className="question-left">
              {/* <div className="help-text" id="help-question1">
                <p className="small">Small text here.</p>
              </div> */}
            </div>
            <div className="question-right">
              <h1>Seating</h1>

              <h2>I need a seat...
                <span className="icon help-text-button help-text-button-off">
                  <i className="help far fa-question-circle"></i>
                  <i className="help fas fa-question-circle"></i>
                </span>
              </h2>

              <div className="columns fancy-checkboxes">
                <div className="column is-half">
                  <label className={`fancy-checkbox ${seatPreferences.movable_arm_rests ? 'fancy-checkbox-checked' : ''}`}>
                    <div className="fancy-checkbox-image">
                      <i class="fas fa-wheelchair"></i>
                    </div>
                    <div className="fancy-checkbox-text">
                      <input onChange={({ target }) => updateForm('movable_arm_rests', target.checked)} checked={seatPreferences.movable_arm_rests} type="checkbox" />
                      <p>with movable arm rests</p>
                    </div>
                  </label>
                </div>
                <div className="column is-half">
                  <label className={`fancy-checkbox ${seatPreferences.accessible_buttons ? 'fancy-checkbox-checked' : ''}`}>
                    <div className="fancy-checkbox-image">
                      <i class="fas fa-braille"></i>
                    </div>
                    <div className="fancy-checkbox-text">
                      <input checked={seatPreferences.accessible_buttons} onChange={({ target }) => updateForm('accessible_buttons', target.checked)} type="checkbox" />
                      <p>with easily accessible call button, lights, A/C</p>
                    </div>
                  </label>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="section">
          <div className="question">
            <div className="question-left">
            </div>
            <div className="question-right">
              <h2>Seat location next to aisle
                <span className="icon help-text-button help-text-button-off">
                  <i className="help far fa-question-circle"></i>
                  <i className="help fas fa-question-circle"></i>
                </span>
              </h2>

              <div className="radio-group">
                <label className="radio">
                  <input onChange={({ target }) => updateForm('aisle_seat', 'required')} checked={seatPreferences.aisle_seat == 'required'} type="radio" name="aisle_seat" value="required" />
                  <p>I need a seat next to the aisle</p>
                </label>
                <label className="radio">
                  <input onChange={({ target }) => updateForm('aisle_seat', 'preferred')} checked={seatPreferences.aisle_seat == 'preferred'} type="radio" name="aisle_seat" value="preferred" />
                  <p>I prefer a seat next to the aisle</p>
                </label>
                <label className="radio">
                  <input onChange={({ target }) => updateForm('aisle_seat', 'not important')} checked={seatPreferences.aisle_seat == 'not important'} type="radio" name="aisle_seat" value="not important" />
                  <p>Not important</p>
                </label>
              </div>
            </div>
            <div className="column">
              <div className="placeholder"></div>
            </div>
          </div>

        </section>

        <section className="section">
          <div className="question">
            <div className="question-left">
            </div>
            <div className="question-right">
              <h2>Seat location next to bathroom
                <span className="icon help-text-button help-text-button-off">
                  <i className="help far fa-question-circle"></i>
                  <i className="help fas fa-question-circle"></i>
                </span>
              </h2>

              <div className="radio-group">
                <label className="radio">
                  <input onChange={({ target }) => updateForm('bathroom_seat', 'required')} checked={seatPreferences.bathroom_seat == 'required'} type="radio" name="bathroom_seat" value="required" />
                  <p>I need a seat next to a bathroom</p>
                </label>
                <label className="radio">
                  <input onChange={({ target }) => updateForm('bathroom_seat', 'preferred')} checked={seatPreferences.bathroom_seat == 'preferred'} type="radio" name="bathroom_seat" value="preferred" />
                  <p>I prefer a seat next to a bathroom</p>
                </label>
                <label className="radio">
                  <input onChange={({ target }) => updateForm('bathroom_seat', 'not important')} checked={seatPreferences.bathroom_seat == 'not important'} type="radio" name="bathroom_seat" value="not important" />
                  <p>Not important</p>
                </label>
              </div>
            </div>
          </div>

        </section>

        <section className="section">
          <div className="question">
            <div className="question-left">
            </div>
            <div className="question-right">
              <h2>Seat location in front row
                <span className="icon help-text-button help-text-button-off">
                  <i className="help far fa-question-circle"></i>
                  <i className="help fas fa-question-circle"></i>
                </span>
              </h2>
              <div className="radio-group">
                <label className="radio">
                  <input onChange={({ target }) => updateForm('front_row_seat', 'required')} checked={seatPreferences.front_row_seat == 'required'} type="radio" name="front_row_seat" value="required" />
                  <p>I need a seat in the front row (or row closest to the entrance)</p>
                </label>
                <label className="radio">
                  <input onChange={({ target }) => updateForm('front_row_seat', 'preferred')} checked={seatPreferences.front_row_seat == 'preferred'} type="radio" name="front_row_seat" value="preferred" />
                  <p>I prefer a seat in the front row (or row closest to the entrance)</p>
                </label>
                <label className="radio">
                  <input onChange={({ target }) => updateForm('front_row_seat', 'not important')} checked={seatPreferences.front_row_seat == 'not important'} type="radio" name="front_row_seat" value="not important" />
                  <p>Not important</p>
                </label>
              </div>

              <button onClick={() => history.push('/type-of-needs')} className="button button-grey">Back</button>
              <button onClick={() => history.push('/seat-transfer')} className="button">Next</button>

            </div>
          </div>
        </section>

        <Footer />

      </div>
    </div >
  )
}
