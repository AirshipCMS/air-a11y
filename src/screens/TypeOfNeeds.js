import React from 'react'
import { useHistory } from 'react-router-dom'
import ProgressBar from '../components/ProgressBar'
import { useStateValue } from '../components/StateProvider'
import specialServices from '../specialServices'

export default () => {
  const [{ needs }, dispatch] = useStateValue();
  let history = useHistory()

  const updateForm = (field, value) => {
    dispatch({ type: 'SAVE_NEEDS', form_field: { [field]: value }})
  }

  return (
    <div className="container" >
      <div className="content">
        <ProgressBar activeScreen='Needs' />
        <h1 className="title">Type of Needs</h1>
        <section className="section">
          <div className="container">
            <h1 className="title">Section</h1>
            <div className="tile is-ancestor">
              {specialServices.map(need => (
                <div key={need.code} className="tile is-parent">
                  <article className="tile is-child box">
                    <label className="checkbox">
                      <input checked={needs[need.code]} onChange={({ target }) => updateForm(need.code, target.checked)} type="checkbox" name={need.code} />
                      {need.description}
                    </label>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>
        <button onClick={() => history.push('/seat+location')} className="button is-fullwidth">Button</button>
      </div>
    </div>
  )
}