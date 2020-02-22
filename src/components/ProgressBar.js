import React from 'react'
const pages = ['Needs', 'Seat+Location', 'Seat Transfer', 'Mobility Aid']

export default ({ activeScreen }) => (
  <div className="tabs is-toggle is-fullwidth">
    <ul>
      {pages.map(page => (
        <li key={page} className={activeScreen === page ? "is-active" : ''}>
          <a>
            <span>{page}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
)