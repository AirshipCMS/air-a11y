import React from 'react'
import { useHistory } from 'react-router-dom'

const pages = [
  ['My needs','/type-of-needs'],
  ['Seating', '/seat+location'],
  ['Assistance', '/seat-transfer'],
  ['Mobility aid', '/mobility-aid'],
  ['Storage', '/mobility-aid-storage'],
  ['Summary', '/summary']
]

export default ({ activeScreen }) => {
  const history = useHistory()

  return (
    <div className="tabs is-toggle is-fullwidth">
      <ul>
        {pages.map(([name, path]) => (
          <li key={name} onClick={() => history.push(path)} className={activeScreen === name ? "is-active" : ''}>
            <a>
              <span>{name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
