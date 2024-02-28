import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import logo from './assets/react.svg'

const root = ReactDOM.createRoot(document.getElementById('root'));

timer();

function timer() {
  const head = React.createElement('h2', {}, 'Hello');
  const par = React.createElement('p', null, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nobis aliquid consequatur illum sunt officia unde, voluptates error sequi at consectetur ut incidunt porro, numquam eaque.');
  const image = React.createElement('img', { src: logo, alt: 'logo' });

  root.render(
    <React.StrictMode>
      
      <h2>Hello</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nobis aliquid consequatur illum sunt officia unde, voluptates error sequi at consectetur ut incidunt porro, numquam eaque.</p>
      <img src={logo} alt='logo' />
      
      {head}
      {par}
      {image}

      <App />
      <h2>Timer</h2>
      <h3>{new Date().toLocaleTimeString()}</h3>
      <button onClick={timer}>Update</button>
    </React.StrictMode>,
  )
}

// function timer() {
//   root.render(
//     <React.StrictMode>
//       <App />
//       <h2>Timer</h2>
//       <h3>{new Date().toLocaleTimeString()}</h3>
//     </React.StrictMode>,
//   )
// }

// setInterval(timer, 1000);
