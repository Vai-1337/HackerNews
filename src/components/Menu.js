import { NavLink } from "react-router-dom"
import '../css/menu.css'




const Menu = () => {
    
    return(
        <div className="menu">
            <ul>
                <li><NavLink className={({ isActive }) => (isActive ? "activeLink" : "navlink")}  to="/hackerNews">Hacker News</NavLink> </li>
                <li><NavLink className={({ isActive }) => (isActive ? "activeLink" : "navlink")}  to="/new">new</NavLink> </li>
                <li><NavLink className={({ isActive }) => (isActive ? "activeLink" : "navlink")}  to="/past">past</NavLink></li>
                <li><NavLink className={({ isActive }) => (isActive ? "activeLink" : "navlink")}  to="/comments">comments</NavLink></li>
                <li><NavLink className={({ isActive }) => (isActive ? "activeLink" : "navlink")}  to="/ask">ask</NavLink></li>
                <li><NavLink className={({ isActive }) => (isActive ? "activeLink" : "navlink")}  to='/show'>show</NavLink> </li>
                <li><NavLink className={({ isActive }) => (isActive ? "activeLink" : "navlink")}  to='/jobs'>jobs</NavLink> </li>
                <li><NavLink className={({ isActive }) => (isActive ? "activeLink" : "navlink")}  to='/submit'>submit</NavLink> </li>
                <li><NavLink className={({ isActive }) => (isActive ? "activeLink" : "navlink")}  to='/'>login</NavLink> </li>
            </ul>
        </div>
    )
}

export default Menu;