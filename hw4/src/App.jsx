import { useState } from 'react'
import './App.css'


function App() {
  const [numbers, setNumbers] = useState([Math.floor(Math.random() * 1001)]);
  const [number, setNumber] = useState(Math.floor(Math.random() * 101));
  const [color, setColor] = useState();

  function handler() {
    setNumbers([...numbers, Math.floor(Math.random() * 1001)])
  }

  function handlerColor() {
    function r() {
      return Math.floor(Math.random() * 256);
    }
    const color = `rgb(${r()},${r()},${r()})`;
    setColor({color: color})
  }

  return (
    <>
      <button onClick={handlerColor}>Random color</button>
      <p style={color}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet repudiandae a veniam, aliquam vitae laboriosam aliquid cumque voluptate error impedit est sint temporibus accusamus. Modi recusandae dignissimos placeat error!</p>
      <button onClick={() => setNumber(Math.floor(Math.random() * 101))}>Random value</button>
      <h2>{number}</h2>
      <button onClick={handler}>Set numbers</button>
      <ul>
        {numbers.map((number, idx) => <li key={idx}>{number}</li>)}
      </ul>
    </>
  )
}

export default App
