import { Link } from "react-router-dom"

import ProfilPic from '../../assets/photo_Guillaume_Caro.webp'
import './footer.scss'


function FooterContent() {
    return (
        <footer className='footer'>
            <p className='footer__textContent'><Link to="/adminlogin">©</Link> 2026 Guillaume Caro. Tous droits réservés
                <a href="/#header"><img src={ProfilPic} className="footer__logo" alt="photo de profil de Guillaume Caro"
                    width="30" height="30" /></a>
            </p>

        </footer>
    )
}

export default FooterContent