import React, { useState, Children } from 'react'
import ProgressBar from './components/ProgressBar'
import { useHistory } from 'react-router-dom'
import wheelchairs from './wheelchairs.json'

export default () => {
  let history = useHistory()
  let [state, setState] = useState({ filteredChairs: [], selectedChair: null, input: '' })

  const searchWheelchairs = ({ KeyCode, target }) => {
    setState({
      filteredChairs: wheelchairs.filter(chair => chair.name.toLowerCase().includes(target.value.toLowerCase()))
    })
  }

  const selectChair = (selectedChair) => {
    return () => {
      setState({ filteredChairs: [], selectedChair, input: selectedChair.name })
    }
  }

  return (
    <div className="container" >
      <div className="content">
        <ProgressBar activeScreen='Mobility Aid' />
        <h1 className="title">About my Mobility Aid</h1>
        <section className="section">
          <div className="container">
            <h1 className="title">Section</h1>
            <div className="panel-block">
              <p className="control has-icons-left">
                <input value={state.input} onKeyUp={searchWheelchairs} className="input" type="text" placeholder="Wheelchair Model" />
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
        </section>
        {state.selectedChair ? <section>
          <div className="columns">
            <div className="column">
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Width</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control">
                      <input value={state.selectedChair.width} className="input" type="email" placeholder="Width" />
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
                      <input value={state.selectedChair.height} className="input" type="email" placeholder="Height" />
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
                      <input value={state.selectedChair.length} className="input" type="email" placeholder="Length" />
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
                      <input value={state.selectedChair.weight} className="input" type="email" placeholder="Weight" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <figure className="image is-128x128">
                <img src={state.selectedChair.image} />
              </figure>
            </div>
          </div>
        </section> : null}
        <button onClick={() => history.push('/seat+location')} className="button is-fullwidth">Button</button>
      </div>
    </div >
  )
}