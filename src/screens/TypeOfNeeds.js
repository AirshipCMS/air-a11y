import React from 'react'
import ProgressBar from '../components/ProgressBar'
import { useHistory } from 'react-router-dom'
import needs from '../specialServices'

export default () => {
  let history = useHistory()

  return (
    < div className="container" >
      <div className="content">
        <ProgressBar activeScreen='Needs' />
        <h1 className="title">Type of Needs</h1>
        <section className="section">
          <div className="container">
            <h1 className="title">Section</h1>
            <div className="tile is-ancestor">
              {needs.map(need => (
                <div key={needs.code} className="tile is-parent">
                  <article className="tile is-child box">
                    <label className="checkbox">
                      <input type="checkbox" name={need.code} value={need.ocde}/>
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
    </div >
  )
}