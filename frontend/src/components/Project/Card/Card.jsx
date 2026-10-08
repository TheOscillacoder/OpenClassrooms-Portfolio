import './card.scss'
import PropTypes from 'prop-types'
import Collapse from '../Collapse/Collapse.jsx'
import GitHubLogo from '../../../assets/github-brands-solid-full.svg'
import SocialLinks from '../../SocialLinks/SocialLinks.jsx'


ProjetCard.propTypes = {
  projet: PropTypes.object,
  title: PropTypes.string,
  cover: PropTypes.string
}


function ProjetCard({ projet }) {

  if (!projet)
    return null;

  const projetDescriptions = projet.description
  const projetGitHub = projet.url

  const projetTags = projet.tags
  return (
    <article className='projetCard'>
      <div className='card__gradient'>
        <img src={projet.cover} alt={`logo de ${projet.title}`} className='cardPic' />
      </div>
      <h3 className='cardTitle'>{projet.title}</h3>
      <ul className='projetTags'>
        {projetTags.map((tag, index) =>
          <li className="tagItem" key={`${tag}-${index}`}>{tag}</li>
        )}
      </ul>
      {projetGitHub ?
        <SocialLinks Url={projet.url} imageUrl={GitHubLogo} className="socialLogo" alt="logo github"></SocialLinks>
        : ""
      }
      <Collapse text="En savoir Plus..." content={projetDescriptions}></Collapse>
    </article>
  )
}

export default ProjetCard
