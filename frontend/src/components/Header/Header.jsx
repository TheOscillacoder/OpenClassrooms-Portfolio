import { Link } from "react-router-dom"

import ProfilPic from '../../assets/photo_Guillaume_Caro.webp'
import './header.scss'


function HeaderMenu() {
    return (
        <nav id='header' className='header'>
            <Link to="/"><img src={ProfilPic} className="header__pic" alt="photo de profil de Guillaume Caro"
                width="150" height="150" fetchPriority="high" />
            </Link>
            <ul className='header__nav'>
                <li>
                    <a href="/#presentation" className="header__link">PRESENTATION</a>
                </li>
                <li>
                    <a href="/#competences" className="header__link">COMPETENCES</a>
                </li>
                <li>
                    <a href="/#projets" className="header__link">PROJETS</a>
                </li>
                <li>
                    <a href="/#parcours" className="header__link">PARCOURS</a>
                </li>
                <li>
                    <a href="/#contact" className="header__link">CONTACT</a>
                </li>
            </ul>

        </nav>
    )
}

export default HeaderMenu