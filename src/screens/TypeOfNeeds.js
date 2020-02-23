import React from 'react'
import { useHistory } from 'react-router-dom'
import ProgressBar from '../components/ProgressBar'
import SpeechSelection from '../components/SpeechSelection'
import { useStateValue } from '../components/StateProvider'
import specialServices from '../specialServices'

export default () => {
  const [{ needs }, dispatch] = useStateValue();
  let history = useHistory()

  const selections = specialServices.map(({ code, matches }) => ({
    name: code,
    matches,
    onSelect: () => updateForm(code, true)
  }))

  const speechNavigation = {
    back: () => history.push('/'),
    next: () => history.push('/seat+location')
  }

  const updateForm = (field, value) => {
    dispatch({ type: 'SAVE_NEEDS', form_field: { [field]: value }})
  }

  return (
    <div className="app-container">
      <div className="container" >
        <section className="section header">
          <div className="header-left">
            <a className="logo-text" href="/">air a11y</a>
          </div>
          <div className="header-right">
            <div className="logo-graphic">[logo]</div>
          </div>
        </section>

        <ProgressBar activeScreen='My needs' />
        
        <section className="section">
          <div className="question">
            <div className="question-left">
            </div>
            <div className="question-right">
              <h1>My needs</h1>
            </div>
          </div>
        </section>
        
        <section className="section">
          <div className="question">
            <div className="question-left">
              <div className="help-text">
                <SpeechSelection navigation={speechNavigation} selections={selections}/>
              </div>
            </div>
            <div className="question-right">

              <h2>Please address my needs for...
                <span className="icon help-text-button help-text-button-off">
                  <i className="help far fa-question-circle"></i>
                  <i className="help fas fa-question-circle"></i>
                </span>
              </h2>

              <div className="columns fancy-checkboxes">
                {specialServices.map(need => (
                  <div key={need.code} className="column is-one-third">
                    <label className="fancy-checkbox">
                      <div className="fancy-checkbox-image">
                        <div className="placeholder">pic</div>
                      </div>
                      <div className="fancy-checkbox-text">
                      <input checked={needs[need.code]} onChange={({ target }) => updateForm(need.code, target.checked)} type="checkbox" name={need.code} />
                        <p>{need.description}</p>
                      </div>
                    </label>
                  </div>
                ))}
                
                {/* mocked */}
                <div className="column is-one-third">
                <label className="fancy-checkbox">
                    <div className="fancy-checkbox-image">
                      <div className="placeholder">pic</div>
                    </div>
                    <div className="fancy-checkbox-text">
                      <input type="checkbox" />
                      <p>Service animal</p>
                    </div>
                  </label>
                </div>
                <div className="column is-one-third">
                  <label className="fancy-checkbox">
                    <div className="fancy-checkbox-image">
                      <div className="placeholder">pic</div>
                    </div>
                    <div className="fancy-checkbox-text">
                      <input type="checkbox" />
                      <p>Other</p>
                    </div>
                  </label>
                </div>
                <div className="column is-one-third">
                  
                </div>
                {/* mocked */}

              </div>

            <button onClick={() => history.push('/')} className="button button-grey">Back</button>
            <button onClick={() => history.push('/seat+location')} className="button">Next</button>

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
