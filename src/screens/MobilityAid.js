import React, { useState } from 'react'
import ProgressBar from '../components/ProgressBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useHistory } from 'react-router-dom'
import { useStateValue } from '../components/StateProvider'
import wheelchairs from '../wheelchairs.json'

export default () => {
  let history = useHistory()
  let [state, setState] = useState({ filteredChairs: [], input: '', showStorage: false })
  const [{ mobilityAid }, dispatch] = useStateValue();

  const updateForm = (field, value) => {
    dispatch({ type: 'SAVE_MOBILITY_AID', form_field: { [field]: value } })
  }

  const searchWheelchairs = ({ KeyCode, target }) => {
    setState({
      ...state,
      filteredChairs: wheelchairs.filter(chair => chair.name.toLowerCase().includes(target.value.toLowerCase()))
    })
  }

  const selectChair = (selectedChair) => {
    return () => {
      setState({ ...state, filteredChairs: [], input: selectedChair.name })
      Object.keys(selectedChair).map(key => {
        updateForm(key, selectedChair[key])
      })
    }
  }

  return (
    <div className="app-container">
      <div className="container" >
        <Header />

        <ProgressBar activeScreen='Mobility aid' />

        <section className="section">
          <div className="question">
            <div className="question-left">
            </div>
            <div className="question-right">
              <h1>My mobility aid</h1>
            </div>
          </div>
        </section>

        {mobilityAid.name === '' ? <section className="section">
          <div className="question">
            <div className="question-left">
            </div>
            <div className="question-right">
              <h2>Find your mobility aid:
                <span className="icon help-text-button help-text-button-off">
                  <i className="help far fa-question-circle"></i>
                  <i className="help fas fa-question-circle"></i>
                </span>
              </h2>

              <div className="search panel-block">
                <p className="control has-icons-left">
                  <input onKeyUp={searchWheelchairs} className="input" type="text" placeholder="Make/Model" />
                  <span className="icon is-left">
                    <i className="fas fa-search" aria-hidden="true"></i>
                  </span>
                </p>
              </div>

              {state.filteredChairs.map((chair, i) => (
                <a onClick={selectChair(chair)} key={i} className="panel-block is-active">
                  {chair.name}
                </a>
              ))}

              {/* <p>missing title and error states</p> */}

            </div>
          </div>
        </section> : null}

        {!state.showStorage ? <section>
          <div className="question">
            <div className="question-left">
              <div className="mobility-aid-image">
                {mobilityAid.name ? 
                  <img src={mobilityAid.image} />: null}
              </div>
            </div>
            <div className="question-right">

            <h2>Dimensions</h2>
            
            <div className="dimensions-group">
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Name</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control">
                      <input onChange={({ target }) => updateForm('name', target.value)} value={mobilityAid.name} className="input" placeholder="Name" />
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Width</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control">
                      <input onChange={({ target }) => updateForm('width', target.value)} value={mobilityAid.width} className="input" placeholder="Width" />
                    </p>
                  </div>
                </div>
              </div>

              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Height</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control">
                      <input onChange={({ target }) => updateForm('height', target.value)} value={mobilityAid.height} className="input" placeholder="Height" />
                    </p>
                  </div>
                </div>
              </div>

              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Length</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control">
                      <input onChange={({ target }) => updateForm('length', target.value)} value={mobilityAid.length} className="input" placeholder="Length" />
                    </p>
                  </div>
                </div>
              </div>

              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Weight</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control">
                      <input onChange={({ target }) => updateForm('weight', target.value)} value={mobilityAid.weight} className="input" placeholder="Weight" />
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="mobility-aid-image">
              {mobilityAid.name ? 
                <img src={mobilityAid.image} />: null}
            </div> */}


            </div>
          </div>
        </section> : null}

        <section className="section">
          <div className="question">
            <div className="question-left">
            </div>
            <div className="question-right">
            <button onClick={() => history.push('/seat-transfer')} className="button button-grey">Back</button>
            <button onClick={() => history.push('/mobility-aid-storage')} className="button">Next</button>
            </div>
          </div>
        </section>

        <Footer />

      </div>
    </div >
  )
}
