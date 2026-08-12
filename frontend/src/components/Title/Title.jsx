import './title.scss'
import PropTypes from 'prop-types'

carrouselTitle.propTypes = {
        logement: PropTypes.object,
        title: PropTypes.string,
}

function carrouselTitle({ logement }) {

        return (
                <div className='carrouselText'>
                        <h3>{logement.title}</h3>
                        <p>{logement.location}</p>
                </div>
        )
}

export default carrouselTitle