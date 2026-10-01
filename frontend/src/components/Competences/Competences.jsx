import './competences.scss'
import PropTypes from 'prop-types'
import compLogos from './compLogos.js'

Competences.propTypes = {
    competence: PropTypes.object,
}

function Competences({ compTag, compAlt }) {

    const logos = compLogos[compTag]

    if (!logos) {
        console.log(`Logo manquant pour la compétence : "${compTag}"`)
    }

    return (
        <article className='compItem'>
            {/* associe la compétence à son logo ou son texte si pas de logo */}
            {
                logos ? <img src={compLogos[compTag]} alt={compAlt}></img>
                    : <li className="textCompItem">{compTag}</li>
            }
        </article>

    )
}

export default Competences