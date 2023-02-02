import { NavLink } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"
import Avatar from './Avatar'

// styles & images
import "./Sidebar.css"
import DashboardIcon from '../assets/dashboard_icon.svg'
import AddIcon from '../assets/add_icon.svg'
import UserIcon from '../assets/users.svg'
import Close from '../assets/close.svg'

export default function Sidebar({ pressed, setPressed}) {
  const { user } = useAuthContext()

  return (
    <div className={pressed === true ? "sidebar  close-sidebar" : "sidebar"}>
      <div className="sidebar-content">
        <div className="user">
          <div onClick={() => setPressed(!pressed)} className="close">
            <img className={pressed === true ? "r-180" : ""} src={Close} alt="close" />
          </div>
          <Avatar src={user.photoURL}/>
          <p>Hey {user.displayName}</p>  
        </div>  
        <nav className="links">
          <ul>
            <li>
              <NavLink exact to="/">
                <img src={DashboardIcon} alt="dashboard icon" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">
                <img src={AddIcon} alt="add project icon" />
                <span>New Project</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/userlist">
                <img src={UserIcon} alt="user icon" />
                <span>All Users</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}