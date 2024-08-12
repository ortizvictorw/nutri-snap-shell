import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from "mfe-login/Login";

import './index.css'

const App = () => (
  <div className="container">
    <Login />
    <div>Name: nutri-snap-shell</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
  </div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)