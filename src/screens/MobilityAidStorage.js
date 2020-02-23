import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
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
    <div className="app-container">
      <div className="container" >
        <Header />

        <ProgressBar activeScreen='Storage' />

        <section className="section">
          <div className="question">
            <div className="question-left">
            </div>
            <div className="question-right">
              <h1>Storing my mobility aid</h1>
              <p>Please add folded/disassembled instructions, in case your mobility aid needs to be stored in the aircraft cargo below the plane.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="question">
            <div className="question-left">
            </div>
            <div className="question-right">
              <h2>Mobility aid disassembly</h2>
              <div className="radio-group">
                <label className="radio">
                  <input type="radio" name="aid_folds" onChange={({ target }) => "@TODO"} checked={mobilityAid.folds} />
                  <p>My mobility aid folds</p>
                </label>
                <label className="radio">
                  <input type="radio" name="aid_folds" onChange={({ target }) => "@TODO"} checked={!mobilityAid.folds} />
                  <p>My mobility aid does not fold</p>
                </label>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="question">
            <div className="question-left">
            </div>
            <div className="question-right">

              <h2>Disassembled Dimensions</h2>

              <div className="dimensions-group">
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

                { mobilityAid.folds &&
                  <div className="field is-horizontal">
                    <div className="field-label is-normal">
                      <label className="label">Folded Width</label>
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <p className="control">
                          <input onChange={({ target }) => updateForm('folded-width', target.value)} value={mobilityAid.folded.width} className="input" placeholder="Folded Width" />
                        </p>
                      </div>
                    </div>
                  </div>
                }

              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="question">
            <div className="question-left">
            </div>
            <div className="question-right">
              <h2>Batteries (if applicable)</h2>
              <div className="checkbox-group">
                <label className="checkbox-simple">
                  <input checked={mobilityAidStorage.WCBW} onChange={({ target }) => updateForm('WCBW', target.checked)} type="checkbox" name='WCBW' />
                  <p>Wet cell / acid (spillable)</p>
                </label>
                <label className="checkbox-simple">
                  <input checked={mobilityAidStorage.WCBD} onChange={({ target }) => updateForm('WCBD', target.checked)} type="checkbox" name='WCBD' />
                  <p>Dry cell / gel (non-spillable)</p>
                </label>
                <label className="checkbox-simple">
                  <input checked={mobilityAidStorage.WCLB} onChange={({ target }) => updateForm('WCLB', target.checked)} type="checkbox" name='WCLB' onChange={({ target }) => updateForm('WCLB', target.checked)} />
                  <p>Lithium</p>
                </label>
              </div>
              {mobilityAidStorage.WCLB ? <label>
                <p>Weight (Grams)</p>
                <input value={mobilityAidStorage.lithium_number_of_grams} onChange={({ target }) => updateForm('lithium_number_of_grams', target.checked)} className="input" type="text" />
              </label> : null}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="question">
            <div className="question-left">
            </div>
            <div className="question-right">
              <h2>For wheelchairs</h2>
              <div className="checkbox-group">
                <label className="checkbox-simple">
                  <input checked={mobilityAidStorage.foldable_back_rest} type="checkbox" name='foldable_back_rest' onChange={({ target }) => updateForm('foldable_back_rest', target.checked)} />
                  <p>My wheelchair’s back rest folds down.</p>
                </label>
              </div>
              {mobilityAidStorage.foldable_back_rest ? <label>
                <p>Fold lever location:</p>
                <input className="input" type="text" />
              </label> : null}
              <div className="checkbox-group">
                <label className="checkbox-simple">
                  <input checked={mobilityAidStorage.removable_leg_rest} type="checkbox" name='removable_leg_rest' onChange={({ target }) => updateForm('removable_leg_rest', target.checked)} />
                  <p>My wheelchair’s leg rest can be lowered or removed.</p>
                </label>
              </div>

              {mobilityAidStorage.removable_leg_rest ? <label>
                <p>Instructions:</p>
                <textarea className="textarea"></textarea>
              </label> : null}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="question">
            <div className="question-left">
            </div>
            <div className="question-right">
              <h2>For powerchairs</h2>
              <div className="checkbox-group">
                <label className="checkbox-simple">
                  <input checked={mobilityAidStorage.removable_joystick} type="checkbox" name='removable_joystick' onChange={({ target }) => updateForm('removable_joystick', target.checked)} />
                  <p>My powerchair’s joystick can be removed.</p>
                </label>
              </div>
              {mobilityAidStorage.removable_joystick ? <label>
                <p>Instructions:</p>
                <textarea className="textarea"></textarea>
              </label> : null}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="question">
            <div className="question-left">
            </div>
            <div className="question-right">
              <h2>Cabin storage</h2>
              <div className="checkbox-group">
                <label className="checkbox-simple">
                  <input checked={mobilityAidStorage.cabin_storage} type="checkbox" name="cabin_storage" onChange={({ target }) => updateForm("cabin_storage", target.checked)} />
                  <p>Please store my mobility aid in the cabin closet so I can access it easily.</p>
                </label>
                <p className="small">Note: aircrafts have limited space in the cabin closet for foldable wheelchairs or mobility aids, and can store your mobility aid on a first-come, first-served basis. Depending on availability, your mobility aid may need to be stored in the aircraft cargo (below the plane).</p>
              </div>

              {mobilityAidStorage.cabin_storage ?
                <label>
                  <p>I have the following medical equipment and/or wheelchair parts to store in the cabin closet (if space is available):</p>
                  <input value={mobilityAidStorage.additional_equipment} onChange={({ target }) => updateForm('additional_equipment', target.checked)} className="input" placeholder="" />
                </label>: null}

            </div>
          </div>
        </section>

        <section className="section">
          <div className="question">
            <div className="question-left">
              <div className="help-text">
                <SpeechInput setText={text => updateForm('instructions', text)}/>
              </div>
            </div>
            <div className="question-right">
              <h2>Aircraft cargo storage</h2>
              <p>Any specific instructions for baggage handlers/ground staff?</p>
              <textarea value={mobilityAidStorage.instructions} onChange={({ target }) => updateForm('instructions', target.checked)} className="textarea" placeholder=""></textarea>

              <button onClick={() => history.push('/mobility-aid')} className="button button-grey">Back</button>
              <button onClick={() => history.push('/summary')} className="button">Next</button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div >
  )
}
