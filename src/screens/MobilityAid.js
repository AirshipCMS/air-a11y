import React, { useState, Children } from 'react'
import ProgressBar from '../components/ProgressBar'
import { useHistory } from 'react-router-dom'
import wheelchairs from '../wheelchairs.json'

export default () => {
  let history = useHistory()
  let [state, setState] = useState({ filteredChairs: [], selectedChair: null, input: '', showStorage: false, form: { cabin_storage: false } })

  const searchWheelchairs = ({ KeyCode, target }) => {
    setState({
      ...state,
      filteredChairs: wheelchairs.filter(chair => chair.name.toLowerCase().includes(target.value.toLowerCase()))
    })
  }

  const selectChair = (selectedChair) => {
    return () => {
      setState({ ...state, filteredChairs: [], selectedChair, input: selectedChair.name })
    }
  }

  const next = () => {
    if (!state.showStorage) {
      setState({ ...state, showStorage: true })
    } else {
      history.push('/summary')
    }
  }

  const updateForm = (field, value) => {
    setState({
      ...state,
      form: {
        ...state.form,
        [field]: value
      }
    })
  }

  return (
    <div className="container" >
      <div className="content">
        <ProgressBar activeScreen='Mobility Aid' />
        <h1 className="title">About my Mobility Aid</h1>
        {state.selectedChair === null ? <section className="section">
          <div className="container">
            <h1 className="title">Tell us about your mobility aid</h1>
            <div className="panel-block">
              <p className="control has-icons-left">
                <p>Populates wheelchair name, and the dimensions into the fields below, then pulls in and shows an image.</p>
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
                      <input value={state.selectedChair ? state.selectedChair.width : ''} className="input" type="email" placeholder="Width" />
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
                      <input value={state.selectedChair ? state.selectedChair.height : ''} className="input" type="email" placeholder="Height" />
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
                      <input value={state.selectedChair ? state.selectedChair.length : ''} className="input" type="email" placeholder="Length" />
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
                      <input value={state.selectedChair ? state.selectedChair.weight : ''} className="input" type="email" placeholder="Weight" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              {state.selectedChair ? <figure className="image is-128x128">
                <img src={state.selectedChair.image} />
              </figure> : null}
            </div>
          </div>
        </section> : null}
        {state.showStorage ? <section className="section">
          <div className="container">
            <h1 className="title">Storing my mobility aid</h1>
            <h2 className="title">Disassembled Dimensions:</h2>
            <div className="control">
              <label className="radio">
                <input type="radio" name="aid_folds" />
                My mobility aid folds
              </label>
              <label className="radio">
                <input type="radio" name="aid_folds" />
                My mobility aid does not fold
              </label>
            </div>
            <p>Please add folded/disassembled dimensions, in case it needs to be stored in the aircraft cargo (below the plane).</p>
            <div className="columns">
              <div className="column">
                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Width</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control">
                        <input value={state.selectedChair ? state.selectedChair.width : ''} className="input" type="email" placeholder="Width" />
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
                        <input value={state.selectedChair ? state.selectedChair.height : ''} className="input" type="email" placeholder="Height" />
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
                        <input value={state.selectedChair ? state.selectedChair.length : ''} className="input" type="email" placeholder="Length" />
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
                        <input value={state.selectedChair ? state.selectedChair.weight : ''} className="input" type="email" placeholder="Weight" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                {state.selectedChair ? <figure className="image is-128x128">
                  <img src={state.selectedChair.image} />
                </figure> : null}
              </div>
            </div>
            <div className="container">
              <h1 className="title">Batteries (if applicable):</h1>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <label className="checkbox">
                      <input type="checkbox" name='WCBW' />
                      Wet cell / acid (spillable)
                    </label>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <label className="checkbox">
                      <input type="checkbox" name='WCBD' />
                      Dry cell / gel (non-spillable)
                    </label>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <label className="checkbox">
                      <input type="checkbox" name='WCLB' onChange={({ target }) => updateForm('WCLB', target.checked)} />
                      Lithium (number of grams):
                    </label>
                  </article>
                </div>
                {state.form.WCLB ? <div>
                  <input className="input" type="text" />
                </div> : null}
              </div>
            </div>
            <div className="container">
              <h1>For Wheelchairs</h1>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <label className="checkbox">
                      <input type="checkbox" name='foldable_back_rest' onChange={({ target }) => updateForm('foldable_back_rest', target.checked)} />
                      My wheelchair’s back rest folds down. Fold lever location:
                    </label>
                    {state.form.foldable_back_rest ? <div>
                      <input className="input" type="text" />
                    </div> : null}
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <label className="checkbox">
                      <input type="checkbox" name='removable_leg_rest' onChange={({ target }) => updateForm('removable_leg_rest', target.checked)} />
                      My wheelchair’s leg rest can be lowered or removed. Instructions:
                    </label>
                    {state.form.removable_leg_rest ? <div>
                      <textarea className="textarea"></textarea>
                    </div> : null}
                  </article>
                </div>
              </div>
            </div>
            <div className="content">
              <h1>For powerchairs:</h1>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <label className="checkbox">
                    <input type="checkbox" name='removable_joystick' onChange={({ target }) => updateForm('removable_joystick', target.checked)} />
                    My powerchair’s joystick can be removed. Instructions:
                    </label>
                  {state.form.removable_joystick ? <div>
                    <textarea className="textarea"></textarea>
                  </div> : null}
                </article>
              </div>
            </div>
            <div className="box">
              <div className="content">
                <h1>Cabin Storage</h1>
                <label className="checkbox">
                  <input type="checkbox" name="cabin_storage" onChange={({ target }) => updateForm("cabin_storage", target.checked)} />
                  Please store my mobility aid in the cabin closet so I can access it easily. 
Note: aircrafts have limited space in the cabin closet for foldable wheelchairs or mobility aids, and can store your mobility aid on a first-come, first-served basis. Depending on availability, your mobility aid may need to be stored in the aircraft cargo (below the plane).
                </label>
              </div>
            </div>

            {state.form.cabinStorage ? <div className="box">
              <div className="content">
                <h1>Additional equipment</h1>
                <p>I have medical equipment and/or wheelchair parts to store in the cabin closet (if space is available):</p>
                <input className="input" placeholder=""/>
              </div>
            </div> : null}

            <div className="box">
              <div className="content">
                <h1>Aircraft cargo storage</h1>
                <p>Any specific instructions for baggage handlers/ground staff?</p>
                <textarea className="textarea" placeholder=""></textarea>
              </div>
            </div>
          </div>
        </section> : null}
        <button onClick={next} className="button is-fullwidth">Button</button>
      </div>
    </div >
  )
}