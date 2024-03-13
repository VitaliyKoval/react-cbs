import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'
import Welcome from './Pages/Welcome/Welcome.jsx';
import StateHook from './Pages/StateHookPage/StateHook.jsx';
import Community from './Pages/Community/Community.jsx';
import Resources from './Pages/Resources/Resources.jsx';
import About from './Pages/About/About.jsx';
import Users from './Pages/Users/Users.jsx';
import ErrorPage from './Pages/Error/ErrorPage.jsx';
import UserPage from './Pages/Users/UserPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<Welcome />} />
      <Route path='/statehooks' element={<StateHook />} />
      <Route path='/community' element={<Community />} />
      <Route path='/resources' element={<Resources />} />
      <Route path='/about' element={<About />} />
      <Route path='/users' element={<Users />} loader={loader} />
      <Route path='/users/:userId' element={<UserPage />} loader={userLoader} errorElement={<ErrorPage/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

function userLoader({ params }) {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(data => data.filter(obj => obj.username === params.userId)[0]);
}

function loader() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json());
}
