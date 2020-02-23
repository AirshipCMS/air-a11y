import React from 'react'
import ProgressBar from '../components/ProgressBar'
import SpeechSelection from '../components/SpeechSelection'
import { useHistory } from 'react-router-dom'
import needs from '../specialServices'

export default () => {
  let history = useHistory()

  const selections = needs.map(({ code, matches }) => ({
    name: code,
    matches,
    onSelect: () => console.log(`REPLACE ME\nsetTypeOfNeed ('${code}')`)
  }))

  const speechNavigation = {
    back: () => history.push('/'),
    next: () => history.push('/seat+location')
  }

  return (
    < div className="container" >
      <div className="content">
        <ProgressBar activeScreen='Needs' />
        <SpeechSelection navigation={speechNavigation} selections={selections}/>
        <h1 className="title">Type of Needs</h1>
        <section className="section">
          <div className="container">
            <h1 className="title">Section</h1>
            <div className="tile is-ancestor">
              {needs.map(need => (
                <div key={needs.code} className="tile is-parent">
                  <article className="tile is-child box">
                    <label className="checkbox">
                      <input type="checkbox" name={need.code} value={need.code} />
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
