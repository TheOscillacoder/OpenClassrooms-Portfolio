import profilPic from '../../assets/photo_Guillaume_Caro_edited.jpg'
import './footer.scss'


function FooterContent() {
    return (
        <div className='footer'>
            <img src={profilPic} className="footer__logo" alt="photo de profil de Guillaume Caro" />
            <p className='footer__textContent'>© 2026 Guillaume Caro. Tous droits réservés</p>
        </div>
    )
}

export default FooterContent