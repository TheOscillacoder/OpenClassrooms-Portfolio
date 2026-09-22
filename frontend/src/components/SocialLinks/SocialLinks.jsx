import './socialLinks.scss'

import PropTypes from 'prop-types'


SocialLinks.propTypes = {
    imageUrl: PropTypes.string,
    alt: PropTypes.string
}

function SocialLinks({ Url, imageUrl, alt, className }) {
    return (
        <a href={Url} target='_blank' rel='noopener noreferrer'>
            <img src={imageUrl} alt={alt} className={className}></img>
        </a>

    )
}
export default SocialLinks