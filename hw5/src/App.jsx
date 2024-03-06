import './App.css'
import { Users } from './components/Users'
import { Todos } from './components/Todos'
import { Comments } from './components/Comments'
import { MyComponent } from './components/MyComponent'
import { ChildComponent } from './components/ChildComponent'
import { useState } from 'react'

function App() {
  const [data, setData] = useState({ name: 'John', age: 30 });

  const updateProps = () => {
    setData({ name: 'Alice', age: 25 });
  };

  return (
    <>
      <div>
      <h1>Parent component</h1>
      <ChildComponent data={data} />
      <button onClick={updateProps}>Update props</button>
    </div>
      <MyComponent />
      <Users/>
      <Todos />
      <Comments/>
    </>
  )
}

export default App
