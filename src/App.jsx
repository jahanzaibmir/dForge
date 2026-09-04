import React from 'react'
import Scene from './components/Scene'

export default function App(){
  return (
    <div className="app-bg">
      <header className="header">
        <h1>dForge — Document Verification (3D Prototype)</h1>
      </header>
      <main className="content">
        <div className="left">
          <button className="primary">Upload & Verify</button>
          <div className="cards">
            <Scene />
          </div>
        </div>
        <aside className="right">
          <div className="stats">
            <h3>Quick Stats</h3>
            <ul>
              <li>Verified: 12</li>
              <li>Pending: 3</li>
              <li>Failed: 1</li>
            </ul>
          </div>
        </aside>
      </main>
    </div>
  )
}
