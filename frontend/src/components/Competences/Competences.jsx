import './competences.scss'
import PropTypes from 'prop-types'
import compLogos from './compLogos.js'

Competences.propTypes = {
    competence: PropTypes.object,
}

function Competences({ compTag, }) {

    const logos = compLogos[compTag];


    return (
        <li className='compItem'>
            {/* associe la compétence à son logo ou son texte si pas de logo */}
            {
                logos ? <img src={compLogos[compTag]} alt={compTag}></img>
                    : <span className="textCompItem">{compTag}</span>
            }
        </li>

    )
}

export default Competences