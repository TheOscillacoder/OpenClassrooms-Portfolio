import './rating.scss'
import PropTypes from 'prop-types'
import starRatingRed from '../../assets/star-active-3.svg'
import starRatingGrey from '../../assets/star-inactive-1.svg'


Rating.propTypes = {
    logement: PropTypes.object,
    rating: PropTypes.string
}


function Rating({logement}) {
    const ratingValue = logement.rating

    const starRating = Array(5).fill(0)

    return(
        <article>            
            {
            starRating.map((_, index) => (
                <img key={`${index}-${logement.title}`}                                       
                src={(ratingValue) > index ? starRatingRed  : starRatingGrey}                   
                ></img> 
                )) 
                }               
        </article>        
    )
}

export default Rating