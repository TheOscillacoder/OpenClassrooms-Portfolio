import './banner.scss'
import PropTypes from 'prop-types'


Banner.propTypes = {
    imageUrl: PropTypes.string,
    className: PropTypes.string
}

function Banner({ imageUrl, className, content, title, intro }) {
    return (
        <div className='banner'>
            <div className='bannerPicDiv'>
                <img src={imageUrl} alt='photo de profil de Guillaume Caro' className={className}></img>
            </div>
            <div className='banner__content'>
                <p className='banner__intro'>{intro}</p>
                <h1 className='banner__title'>{title}</h1>
                <p className='banner__text'>{content}</p>

            </div>
        </div>
    )
}

export default Banner