import './collapse.scss'
import { useState } from 'react'
import PropTypes from 'prop-types'
import Arrow from '../../../assets/arrow-back.svg'

Collapse.propTypes = {
    titre: PropTypes.string,
    content: PropTypes.string,
}

function Collapse({ text, content }) {

    const [Open, setOpen] = useState(false)

    // valeur par défaut ==> pas ouvert

    function handleClick() {
        console.log('cliqué')
        setOpen(!Open)

    }

    return (
        <article className='collapse'>
            <div className='collapse__item'>
                <p>{text}</p>
                <img src={Arrow} className={!Open ? 'arrowDown' : ""} onClick={handleClick}></img>
                {/* lorsque valeur state est contraire à valeur par defaut (pas ouvert) on applique la rotation au chevron et le collapse n'est plus fermé                              */}
            </div>
            {Open && <div className='collapse__content'>{content}</div>}
            {/* content est par défaut pas ouvert */}
        </article>
    )
}

export default Collapse
