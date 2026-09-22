import { Link } from "react-router-dom"

import ProfilPic from '../../assets/photo_Guillaume_Caro_edited.jpg'
import './header.scss'


function HeaderMenu() {
    return (
        <nav id='header' className='header'>
            <Link to="/"><img src={ProfilPic} className="header__pic" alt="photo de profil de Guillaume Caro" /></Link>
            <ul className='header__nav'>
                <li>
                    <a href="/#presentation" className={
                        ({ isActive }) => isActive ? "active" : ""}>PRESENTATION</a>
                </li>
                <li>
                    <a href="/#competences" className={
                        ({ isActive }) => isActive ? "active" : ""}>COMPETENCES</a>
                </li>
                <li>
                    <a href="/#projets" className={
                        ({ isActive }) => isActive ? "active" : ""}>PROJETS</a>
                </li>
                <li>
                    <a href="/#parcours" className={
                        ({ isActive }) => isActive ? "active" : ""}>PARCOURS</a>
                </li>
                <li>
                    <a href="/#contact" className={
                        ({ isActive }) => isActive ? "active" : ""}>CONTACT</a>
                </li>
            </ul>

        </nav>
    )
}

export default HeaderMenu