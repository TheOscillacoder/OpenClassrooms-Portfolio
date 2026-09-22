import './compGroup.scss'
import Competences from './Competences.jsx'
import PropTypes from 'prop-types'

CompetencesGroup.propTypes = {
    category: PropTypes.string,
    skills: PropTypes.array,
    competence: PropTypes.object
}

function CompetencesGroup({ group }) {

    return (
        <article>
            <h3 className='compTitle'>{group.category}</h3>
            <ul className='compGroup'>
                {/* mappe les données des compétences sur chaque item avec son logo */}
                {group.skills.map((skill) =>
                    <Competences key={skill} compTag={skill} alt={skill}></Competences>
                )}
            </ul>
        </article>

    )
}

export default CompetencesGroup