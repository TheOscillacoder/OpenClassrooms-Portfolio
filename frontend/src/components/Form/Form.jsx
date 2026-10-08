import './form.scss';

function ContactForm() {

    return (
        <form action="#" method='POST' className='contact-form'>
            <label htmlFor='nom-prenom' >Nom et prénom</label>
            <input id='nom-prenom' type='text' name='nom-prenom' placeholder='nom et prénom'></input>
            <label htmlFor='email'>E-mail</label>
            <input id='email' type='email' name='email' placeholder='entrez votre adresse e-mail'></input>
            <label htmlFor='message'>message</label>
            <textarea id='message' name='message' cols="30" rows="20" placeholder='Votre message'></textarea>
            <input id='formSubmit' type='submit' value="Envoyer"></input>
        </form>
    )
}

export default ContactForm
