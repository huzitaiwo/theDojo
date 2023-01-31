import { useState } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// styles and components
import './App.css'
import Dashboard from './pages/dashboard/Dashboard'
import Create from './pages/create/Create'
import Project from './pages/project/Project'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import UserList from './components/UserList'

function App() {
  const { user, authIsReady } = useAuthContext()
  const [active, setActive] = useState(true)
  const [pressed, setPressed] = useState(true)

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
        {user && <Sidebar pressed={pressed} setPressed={setPressed} />}
        <div className={pressed === true ? "container" : "container close-sidebar"}>
          <Navbar setActive={setActive} active={active} />
          <Switch>
            <Route exact path='/'>
              {!user && <Redirect to='/login' />}
              {user && <Dashboard />}
            </Route>
            <Route path='/create'>
              {!user && <Redirect to='/login' />}
              {user&& <Create /> }
            </Route>
            <Route path='/projects/:id'>
              {!user && <Redirect to='/login' />}
              {user && <Project />}
            </Route>
            <Route path='/login'>
              {user && <Redirect to='/' />}
              {!user && <Login />}
            </Route>
            <Route path='/signup'>
              {user && <Redirect to='/' />}
              {!user && <Signup />}
            </Route>
          </Switch>
        </div>
        {active && user && <UserList active={active} />}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App
