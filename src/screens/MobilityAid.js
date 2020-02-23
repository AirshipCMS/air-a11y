import React, { useState, Children } from 'react'
import ProgressBar from '../components/ProgressBar'
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
    <div className="container" >
      <div className="content">
        <ProgressBar activeScreen='Mobility Aid' />
        <h1 className="title">About my Mobility Aid</h1>
        {mobilityAid.name === null ? <section className="section">
          <div className="container">
            <h1 className="title">Tell us about your mobility aid</h1>
            <div className="panel-block">
              <p>Populates wheelchair name, and the dimensions into the fields below, then pulls in and shows an image.</p>
              <p className="control has-icons-left">
                <input onKeyUp={searchWheelchairs} className="input" type="text" placeholder="Wheelchair Model" />
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
          </div>
        </section> : null}
        {!state.showStorage ? <section>
          <h1 className="title">Dimensions</h1>
          <div className="columns">
            <div className="column">
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
            <div className="column">
              {mobilityAid.name ? <figure className="image is-128x128">
                <img src={mobilityAid.image} />
              </figure> : null}
            </div>
          </div>
        </section> : null}
        <button onClick={() => history.push('/mobility-aid-storage')} className="button is-fullwidth">Button</button>
      </div>
    </div >
  )
}