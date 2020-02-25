import React, { useEffect } from 'react'
import ProgressBar from '../components/ProgressBar'
import { useStateValue } from '../components/StateProvider'
import { useHistory } from 'react-router-dom'
import specialServices from '../specialServices'

export default () => {
  let history = useHistory()

  const [props, dispatch] = useStateValue();

  const speechNavigation = {
    back: () => history.goBack(),
    next: () => history.push('/search-flights')
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch({ type: 'A11Y_SELECTIONS', selections:[] })
    dispatch({ type: 'A11Y_NAVIGATION', ...{ speechNavigation } })
  }, [])

  return (
    <div className="container" >

      <ProgressBar activeScreen='Summary' />

      <section className="section">
        <div className="question">
          <div className="question-left">

          </div>

          <div className="question-right">
            <h1 className="summary-actions-header">
              <div className="summary-actions-title">
                <span className="summary-actions-text">Summary</span>
                <span className="summary-email-print">
                  <button className="button"><i class="far fa-envelope"></i><span>Email</span></button>
                  <button className="button"><i class="fas fa-print"></i><span>Print</span></button>
                </span>
              </div>
              <div className="summary-actions-buttons">
              <button onClick={() => history.push('/search-flights')} className="button"><i class="fas fa-plane"></i>Search Flights</button>
              <button className="button"><i class="fas fa-phone"></i>Speak to Agent</button>
              </div>
            </h1>


            <h1>My needs</h1>

            <h2>Please address my needs for...</h2>
            <div className="columns fancy-checkboxes fancy-checkboxes-summary">
              {specialServices.map(need => {
                if (props.needs[need.code]) {
                  return (
                    <div key={need.code} className="column">
                      <label className="fancy-checkbox">
                        <div className="fancy-checkbox-image">
                          <i className={need.image}></i>
                        </div>
                        <div className="fancy-checkbox-text">
                          <p>{need.description}</p>
                        </div>
                      </label>
                    </div>
                  )
                }
              })}
            </div>

            <h1>Seating</h1>

            <h2>I need a seat...</h2>
            {props.seatPreferences.movable_arm_rests ? <p>with movable arm rests</p> : null}
            {props.seatPreferences.accessible_button ? <p>with easily accessible call button, lights, A/C</p> : null}

            <h2>Seat location next to aisle</h2>
            {props.seatPreferences.aisle_seat === 'required' ? <p>I need a seat next to the aisle</p> : null}
            {props.seatPreferences.aisle_seat === 'preferred' ? <p>I prefer a seat next to the aisle</p> : null}
            {props.seatPreferences.aisle_seat === 'not important' ? <p>Not important</p> : null}

            <h2>Seat location next to bathroom</h2>
            {props.seatPreferences.bathroom_seat === 'required' ? <p>I need a seat next to a bathroom</p> : null}
            {props.seatPreferences.bathroom_seat === 'preferred' ? <p>I prefer a seat next to a bathroom</p> : null}
            {props.seatPreferences.bathroom_seat === 'not important' ? <p>Not important</p> : null}

            <h2>Seat location in front row</h2>
            {props.seatPreferences.front_row_seat === 'required' ? <p>I need a seat in the front row (or row closest to the entrance)</p> : null}
            {props.seatPreferences.front_row_seat === 'preferred' ? <p>I prefer a seat in the front row (or row closest to the entrance)</p> : null}
            {props.seatPreferences.front_row_seat === 'not important' ? <p>Not important</p> : null}

            <h1>Assistance</h1>

            <h2>Getting to my seat</h2>
            {props.seatTransfer.aisle_chair ? <p>Request an aisle chair to help with transfer to my seat on the plane</p> : null}
            {props.seatTransfer.seat_assistance ? <p>Request additional assistance to transfer to my seat. An additional person/transporter will help you to your seat.</p> : null}

            <h2>Getting from check-in to the gate, and back</h2>
            {props.seatTransfer.request_wheelchair ? <p>Request a wheelchair to help me get to/from the aircraft.</p> : null}
            {props.seatTransfer.transportation_assistance ? <p>Request additional assistance to pull/push me in the wheelchair to and from the aircraft. An additional person/transporter will help you get to/from the aircraft.</p> : null}

            <h1>My mobility aid</h1>

            <h2>Dimensions</h2>

            <div className="dimensions-group">
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Width</label>
                </div>
                <p>{props.mobilityAid.width}</p>
              </div>

              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Height</label>
                </div>
                <p>{props.mobilityAid.height}</p>
              </div>

              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Length</label>
                </div>
                <p>{props.mobilityAid.length}</p>
              </div>

              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Weight</label>
                </div>
                <p>{props.mobilityAid.weight}</p>
              </div>
            </div>

            <h1>Storing my mobility aid</h1>

            <h2>Dimensions</h2>
            <p>My mobility aid does not fold</p>
            {/* <p>hardcoded.</p> */}

            {props.mobilityAidStorage.cabinStorage ? <div className="content">
              <h1>Additional equipment</h1>
              <p>{props.mobilityAidStorage.additional_equipment}</p>
            </div> : null}

            {/* <p>[there's more stuff to render, though no need for presentation]</p> */}
          </div>
        </div>
      </section>

    </div>
  )
}
