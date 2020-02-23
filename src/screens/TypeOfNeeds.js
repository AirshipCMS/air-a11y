import React from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProgressBar from '../components/ProgressBar'
import SpeechSelection from '../components/SpeechSelection'
import { useStateValue } from '../components/StateProvider'
import specialServices from '../specialServices'

export default () => {
  window.scrollTo(0, 0)
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
    dispatch({ type: 'SAVE_NEEDS', form_field: { [field]: value } })
  }

  return (
    <div className="app-container">
      <div className="container" >
        <Header />

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
                <SpeechSelection navigation={speechNavigation} selections={selections} />
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
                    <label className={`fancy-checkbox ${needs[need.code] ? 'fancy-checkbox-checked' : ''}`}>
                      <div className="fancy-checkbox-image">
                        <i className={`${need.image}`}></i>
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
                  <label className={`fancy-checkbox ${needs.serviceAnimal ? 'fancy-checkbox-checked' : ''}`}>
                    <div className="fancy-checkbox-image">
                      <i class="fas fa-dog"></i>
                    </div>
                    <div className="fancy-checkbox-text">
                      <input type="checkbox" checked={needs.serviceAnimal} onChange={({ target }) => updateForm('serviceAnimal', target.checked)} name='serviceAnimal' />
                      <p>Service animal</p>
                    </div>
                  </label>
                </div>
                <div className="column is-one-third">
                  <label className={`fancy-checkbox ${needs.other ? 'fancy-checkbox-checked' : ''}`}>
                    <div className="fancy-checkbox-image">
                      <i class="fas fa-universal-access"></i>
                    </div>
                    <div className="fancy-checkbox-text">
                      <input type="checkbox" checked={needs.other} onChange={({ target }) => updateForm('other', target.checked)} name='other' />
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

        <Footer />

      </div>
    </div>
  )
}
