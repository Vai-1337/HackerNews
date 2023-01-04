import { NavLink } from "react-router-dom"
import '../css/menu.css'




const Menu = () => {
    
    return(
        <div className="menu">
            <ul>
                <li><NavLink className="navlink" to="/">Hacker News</NavLink> </li>
                <li><NavLink className="navlink" to="/new">new</NavLink> </li>
                <li><NavLink className="navlink" to="/past">past</NavLink></li>
                <li><NavLink className="navlink" to="/comments">comments</NavLink></li>
                <li><NavLink className="navlink" to="/ask">ask</NavLink></li>
                <li><NavLink className="navlink" to='/show'>show</NavLink> </li>
                <li><NavLink className="navlink" to='/jobs'>jobs</NavLink> </li>
                <li><NavLink className="navlink" to='/submit'>submit</NavLink> </li>
                <li><NavLink className="navlink" to='/login'>login</NavLink> </li>
            </ul>
        </div>
    )
}

export default Menu;