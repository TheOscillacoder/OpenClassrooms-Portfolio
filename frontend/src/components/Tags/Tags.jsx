import './tags.scss'
import PropTypes from 'prop-types'

 Tags.propTypes = { 
        logement: PropTypes.object,
        tags: PropTypes.string,       
     }

function Tags ({logement}) {

    return (      
            <ul className='tags'>
                {logement.tags.map((tag, index) => (
                <li className='tagItem'key={`${tag}-${index}`}>{tag}</li>
                ))
                }
            </ul>                      
    )
}

export default Tags