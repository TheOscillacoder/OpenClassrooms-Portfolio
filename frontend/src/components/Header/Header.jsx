import { Link, NavLink } from "react-router-dom"

import ProfilPic from '../../assets/photo_Guillaume_Caro_edited.jpg'
import './header.scss'


function HeaderMenu() {
    return (
        <nav className='header'>
            <Link to="/"><img src={ProfilPic} className="header__pic" alt="photo de profil de Guillaume Caro" /></Link>
            <ul className='header__nav'>
                <li>
                    <NavLink to="/" className={
                        ({ isActive }) => isActive ? "active" : ""}>PRESENTATION</NavLink>
                </li>
                <li>
                    <NavLink to="" className={
                        ({ isActive }) => isActive ? "active" : ""}>COMPETENCES</NavLink>
                </li>
                <li>
                    <NavLink to="" className={
                        ({ isActive }) => isActive ? "active" : ""}>PROJETS</NavLink>
                </li>
                <li>
                    <NavLink to="" className={
                        ({ isActive }) => isActive ? "active" : ""}>PARCOURS</NavLink>
                </li>
                <li>
                    <NavLink to="" className={
                        ({ isActive }) => isActive ? "active" : ""}>CONTACT</NavLink>
                </li>
            </ul>

        </nav>
    )
}

export default HeaderMenu