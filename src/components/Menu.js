import { NavLink } from "react-router-dom"
import '../css/menu.css'


const Menu = () => {
    return(
        <div className="menu">
            <ul>
                <li><NavLink to="/">Hacker News</NavLink> </li>
                <li><NavLink to="/new">new</NavLink> </li>
                <li><NavLink to="/past">past</NavLink></li>
                <li><NavLink to="/comments">comments</NavLink></li>
                <li><NavLink to="/ask">ask</NavLink></li>
                <li><NavLink to='/show'>show</NavLink> </li>
                <li><NavLink to='/jobs'>jobs</NavLink> </li>
                <li><NavLink to='/submit'>submit</NavLink> </li>
                <li><NavLink to='/login'>login</NavLink> </li>
            </ul>
        </div>
    )
}

export default Menu;