import React from 'react'
import ReactDOM from 'react-dom/client'
import Description from './Description.jsx'
import './index.css'
import Header from './Header.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Description />
  </React.StrictMode>,
)
