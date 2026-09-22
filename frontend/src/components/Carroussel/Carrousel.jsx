import './Carrousel.scss'
import PropTypes from 'prop-types'
import { useState } from 'react'
import CarrouselPrev from '../../assets/carrousel-previous-logo.svg'
import CarrouselNext from '../../assets/carrousel-next-logo.svg'
import ProjetCard from '../Project/Card/Card.jsx'


CarrouselProjets.propTypes = {
    projets: PropTypes.object,
    index: PropTypes.number,
}


function CarrouselProjets({ projets }) {

    const [projetIndex, setProjetIndex] = useState(0);

    if (!projets || projets.length === 0)
        return null

    const selectProjet = projets[projetIndex];

    function PrevClick() {
        setProjetIndex(projetIndex === 0 ? projets.length - 1 : projetIndex - 1)
    }
    // lorsque picIndex === 1ère valeure du tableau ==> - 1 index vers valeur max du tableau state

    function NextClick() {
        setProjetIndex(projetIndex === projets.length - 1 ? 0 : projetIndex + 1)
    }
    // lorsque picIndex ===  valeur max du tableau state ==> + 1 vers 1ère valeur du tableau

    return (
        <article className='carrousel'>
            <div className='carrousel__logo'>
                <img src={CarrouselPrev} alt='logo Carrousel image précédente' className='carrousel__prev' onClick={PrevClick}></img>
                <img src={CarrouselNext} alt='logo Carrousel image suivante' className='carrousel__next' onClick={NextClick}></img>
            </div>
            <p className='carrousel__position'>{`${projetIndex + 1} / ${projets.length}`}</p>
            <ProjetCard projet={selectProjet}></ProjetCard>

        </article>
    )
}

export default CarrouselProjets




