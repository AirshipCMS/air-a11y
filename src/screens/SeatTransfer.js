import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProgressBar from '../components/ProgressBar'
import { useStateValue } from '../components/StateProvider'
import { useHistory } from 'react-router-dom'

export default () => {
  let history = useHistory()
  const [{ seatTransfer }, dispatch] = useStateValue();

  const updateForm = (field, value) => {
    dispatch({ type: 'SAVE_SEAT_TRANSFER', form_field: { [field]: value } })
  }

  return (
    <div className="app-container">
      <div className="container" >
        <Header />

        <ProgressBar activeScreen='Assistance' />

        <section className="section">
          <div className="question">
            <div className="question-left">
            </div>
            <div className="question-right">
              <h1>Assistance</h1>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="question">
            <div className="question-left">
            </div>
            <div className="question-right">
              <h2>Getting to my seat
                <span className="icon help-text-button help-text-button-off">
                  <i className="help far fa-question-circle"></i>
                  <i className="help fas fa-question-circle"></i>
                </span>
              </h2>

              <div className="columns fancy-checkboxes">
                <div className="column is-half">
                  <label className={`fancy-checkbox ${seatTransfer.aisle_chair ? 'fancy-checkbox-checked' : ''}`}>
                    <div className="fancy-checkbox-image">
                      <i class="far fa-person-dolly-empty"></i>
                    </div>
                    <div className="fancy-checkbox-text">
                      <input onChange={({ target }) => updateForm('aisle_chair', target.checked)} checked={seatTransfer.aisle_chair} type="checkbox" name="aisle_chair" />
                      <p>Request an aisle chair to help with transfer to my seat on the plane</p>
                    </div>
                  </label>
                </div>
                <div className="column is-half">
                  <label className={`fancy-checkbox ${seatTransfer.seat_assistance ? 'fancy-checkbox-checked' : ''}`}>
                    <div className="fancy-checkbox-image">
                      <i class="fas fa-people-carry"></i>
                    </div>
                    <div className="fancy-checkbox-text">
                      <input onChange={({ target }) => updateForm('seat_assistance', target.checked)} checked={seatTransfer.seat_assistance} type="checkbox" name="seat_assistance" />
                      <p>Request additional assistance to transfer to my seat. An additional person/transporter will help you to your seat.</p>
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
              <h2>Getting from check-in to the gate, and back
                <span className="icon help-text-button help-text-button-off">
                  <i className="help far fa-question-circle"></i>
                  <i className="help fas fa-question-circle"></i>
                </span>
              </h2>

              <div className="columns fancy-checkboxes">
                <div className="column is-half">
                  <label className={`fancy-checkbox ${seatTransfer.request_wheelchair ? 'fancy-checkbox-checked' : ''}`}>
                    <div className="fancy-checkbox-image">
                      <i class="fas fa-wheelchair"></i>
                    </div>
                    <div className="fancy-checkbox-text">
                      <input onChange={({ target }) => updateForm('request_wheelchair', target.checked)} checked={seatTransfer.request_wheelchair} type="checkbox" name="request_wheelhcair" />
                      <p>Request a wheelchair to help me get to/from the aircraft.</p>
                    </div>
                  </label>
                </div>
                <div className="column is-half">
                  <label className={`fancy-checkbox ${seatTransfer.transportation_assistance ? 'fancy-checkbox-checked' : ''}`}>
                    <div className="fancy-checkbox-image">
                      <i class="far fa-person-dolly"></i>
                    </div>
                    <div className="fancy-checkbox-text">
                      <input onChange={({ target }) => updateForm('transportation_assistance', target.checked)} checked={seatTransfer.transportation_assistance} type="checkbox" name="transportation_assistance" />
                      <p>Request additional assistance to pull/push me in the wheelchair to and from the aircraft. An additional person/transporter will help you get to/from the aircraft.</p>
                    </div>
                  </label>
                </div>
              </div>

              <button onClick={() => history.push('/seat+location')} className="button button-grey">Back</button>
              <button onClick={() => history.push('/mobility-aid')} className="button">Next</button>

            </div>
          </div>
        </section>

        <Footer />

      </div>
    </div >
  )
}
