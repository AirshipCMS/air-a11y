import React from 'react'
import ProgressBar from '../components/ProgressBar'
import SpeechInput from '../components/SpeechInput'
import { useHistory } from 'react-router-dom'
import { useStateValue } from '../components/StateProvider'

export default () => {
  let history = useHistory()
  const [{ mobilityAid, mobilityAidStorage }, dispatch] = useStateValue();

  const updateForm = (field, value) => {
    dispatch({ type: 'SAVE_MOBILITY_AID_STORAGE', form_field: { [field]: value } })
  }

  return (
    <div className="container" >
      <div className="content">
        <ProgressBar activeScreen='Mobility Aid Storage' />
        <h1 className="title">Storing my mobility aid</h1>
        <section className="section">
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
            <div className="container">
              <h1 className="title">Batteries (if applicable):</h1>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <label className="checkbox">
                      <input value={mobilityAidStorage.WCBW} onChange={({ target }) => updateForm('WCBW', target.checked)} type="checkbox" name='WCBW' />
                      Wet cell / acid (spillable)
                    </label>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <label className="checkbox">
                      <input value={mobilityAidStorage.WCBD} onChange={({ target }) => updateForm('WCBD', target.checked)} type="checkbox" name='WCBD' />
                      Dry cell / gel (non-spillable)
                    </label>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <label className="checkbox">
                      <input value={mobilityAidStorage.WCLB} onChange={({ target }) => updateForm('WCLB', target.checked)} type="checkbox" name='WCLB' onChange={({ target }) => updateForm('WCLB', target.checked)} />
                      Lithium (number of grams):
                    </label>
                  </article>
                </div>
                {mobilityAidStorage.WCLB ? <div>
                  <input value={mobilityAidStorage.lithium_number_of_grams} onChange={({ target }) => updateForm('lithium_number_of_grams', target.checked)} className="input" type="text" />
                </div> : null}
              </div>
            </div>
            <div className="container">
              <h1>For Wheelchairs</h1>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <label className="checkbox">
                      <input value={mobilityAidStorage.foldable_back_rest} type="checkbox" name='foldable_back_rest' onChange={({ target }) => updateForm('foldable_back_rest', target.checked)} />
                      My wheelchair’s back rest folds down. Fold lever location:
                    </label>
                    {mobilityAidStorage.foldable_back_rest ? <div>
                      <input className="input" type="text" />
                    </div> : null}
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <label className="checkbox">
                      <input value={mobilityAidStorage.removable_leg_rest} type="checkbox" name='removable_leg_rest' onChange={({ target }) => updateForm('removable_leg_rest', target.checked)} />
                      My wheelchair’s leg rest can be lowered or removed. Instructions:
                    </label>
                    {mobilityAidStorage.removable_leg_rest ? <div>
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
                    <input value={mobilityAidStorage.removable_joystick} type="checkbox" name='removable_joystick' onChange={({ target }) => updateForm('removable_joystick', target.checked)} />
                    My powerchair’s joystick can be removed. Instructions:
                    </label>
                  {mobilityAidStorage.removable_joystick ? <div>
                    <textarea className="textarea"></textarea>
                  </div> : null}
                </article>
              </div>
            </div>
            <div className="box">
              <div className="content">
                <h1>Cabin Storage</h1>
                <label className="checkbox">
                  <input value={mobilityAidStorage.cabin_storage} type="checkbox" name="cabin_storage" onChange={({ target }) => updateForm("cabin_storage", target.checked)} />
                  Please store my mobility aid in the cabin closet so I can access it easily.
Note: aircrafts have limited space in the cabin closet for foldable wheelchairs or mobility aids, and can store your mobility aid on a first-come, first-served basis. Depending on availability, your mobility aid may need to be stored in the aircraft cargo (below the plane).
                </label>
              </div>
            </div>

            {mobilityAidStorage.cabinStorage ? <div className="box">
              <div className="content">
                <h1>Additional equipment</h1>
                <p>I have medical equipment and/or wheelchair parts to store in the cabin closet (if space is available):</p>
                <input value={mobilityAidStorage.additional_equipment} onChange={({ target }) => updateForm('additional_equipment', target.checked)} className="input" placeholder="" />
              </div>
            </div> : null}

            <div className="box">
              <div className="content">
                <h1>Aircraft cargo storage</h1>
                <SpeechInput setText={text => updateForm('instructions', text)}/>
                <p>Any specific instructions for baggage handlers/ground staff?</p>
                <textarea value={mobilityAidStorage.instructions} onChange={({ target }) => updateForm('instructions', target.checked)} className="textarea" placeholder=""></textarea>
              </div>
            </div>
          </div>
        </section>
        <button onClick={() => history.push('/summary')} className="button is-fullwidth">Button</button>
      </div>
    </div >
  )
}
