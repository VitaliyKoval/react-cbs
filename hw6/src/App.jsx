import { Outlet } from 'react-router-dom';
import Header from './Pages/Header/Header';
import Sidebar from './Pages/Sidebar/Sidebar';

function App() {

  return (
    <div className='container'>
      <Header />
      <Sidebar />
      <Outlet/>
    </div>
  )
}

export default App
