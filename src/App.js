import { BrowserRouter, Switch, Route } from 'react-router-dom'

// styles and components
import './App.css'
import Dashboard from './pages/dashboard/Dashboard'
import Create from './pages/create/Create'
import Project from './pages/project/Project'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Dashboard />
          </Route>
          <Route path='/create'>
            <Create />
          </Route>
          <Route path='/project:id'>
            <Project />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
