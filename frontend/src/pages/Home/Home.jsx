import { useState, useEffect } from 'react'

import Banner from '../../components/Banner/Banner.jsx'
import SocialLinks from '../../components/SocialLinks/SocialLinks.jsx'
import CompGroup from '../../components/Competences/CompGroup.jsx'
import ContactForm from '../../components/Form/Form/Form.jsx'
import CarrouselProjets from '../../components/Carroussel/Carrousel.jsx'
import { compListe } from '../../data/competences.jsx'

import './home.scss'

import ProfilPic from '../../assets/photo_Guillaume_Caro_edited.jpg'
import LinkedinLogo from '../../assets/square-linkedin-brands-solid-full.svg'
import GitHubLogo from '../../assets/github-brands-solid-full.svg'


function HomePage() {

  const [ProjetListe, SetProjetListe] = useState([]);

  useEffect(() => {
    async function fetchProjets() {
      const projetResponse = await fetch('/projets.json')
      const projetsData = await projetResponse.json();
      SetProjetListe(projetsData)
    }
    fetchProjets();
  },
    []);

  return (
    <div>
      <section className='hero'>
        <Banner imageUrl={ProfilPic} className='bannerPic' intro="Bonjour, moi c'est Guillaume" title="Développeur Web" content="Bienvenue sur mon PortFolio,
        ici vous trouverez les projets que j'ai pu réaliser au cours de ce parcours de formation :
        html et css, javascript dynamique, gestion de projet, optimisation SEO d'un site, intégration frontend d'une app React jusqu'à intégration/gestion intégrale du Backend"></Banner>
      </section>
      <section id='presentation' className='presentation'>
        <h2 className='title'>Présentation</h2>
        <SocialLinks Url="www.linkedin.com/in/guillaume-caro-984336176" imageUrl={LinkedinLogo} alt='logo Linkedin' className='socialLogo'></SocialLinks>
        <SocialLinks Url="https://github.com/TheOscillacoder?tab=repositories" imageUrl={GitHubLogo} alt="logo github" className="socialLogo"></SocialLinks>
        <p className='presentation__text'>Issu d'une formation initiale audiovisuelle en tant qu'ingénieur du son,
          J'ai toujours voulu savoir coder et comment fonctionnent les sites internet
          J'ai sauté le pas, j'ai réalisé tous ces projets au cours d'un long parcours de formation et je suis aujourd'hui
          Développeur web</p>
      </section>
      <section id='competences'>
        <h2 className='title'>Compétences</h2>
        {/* mappe les données sur chaque groupe de compétence */}
        {compListe.map((group) =>
          <CompGroup key={group.category} group={group}></CompGroup>
        )}
      </section>
      <section id='projets' className='projets'>
        <h2 className='title'>Projets</h2>
        <CarrouselProjets projets={ProjetListe}></CarrouselProjets>
      </section>
      <section id='parcours' className='parcours'>
        <h2 className='title'>Parcours</h2>
        <p className='parcours__text'>Diplômé de l'ESRA en option audiovisuel, j'ai eu plusieurs expériences professionnelles par la suite dans
          des studios de post-production et doublage prestigieux de la place de Paris, en tant que stagiaire assistant.
          J'ai par le suite eu une opportunité professionnelle dans une entreprise qui m'a éloigné de ce domaine et milieu professionnel pour un environnement plus proche d'un travail de bureau d'études;
          Mais toujours en mettant en application mes compétences et mon savoir faire d'ingénieur du son.
          Après quelques années j'ai fini par quitter cette entreprise et ai finalement décidé de me réorienter professionnellement dans le developpement web, en poursuivant ce parcours de formation chez Openclassrooms.
        </p>
      </section>
      <section id='contact' className='contact'>
        <h2 className='title'>Contact</h2>
        <ContactForm></ContactForm>
      </section>
    </div>
  )
}
export default HomePage