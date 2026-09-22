import './banner.scss'
import PropTypes from 'prop-types'


Banner.propTypes = {
    imageUrl: PropTypes.string,
    className: PropTypes.string
}

function Banner({ imageUrl, className, content, title, intro }) {
    return (
        <div>
            <p className='banner__intro'>{intro}</p>
            <h1 className="banner__title">{title}</h1>
            <img src={imageUrl} alt='photo de profil de Guillaume Caro' className={className}></img>
            <p className='banner__text'>{content}</p>
        </div>
    )
}

export default Banner