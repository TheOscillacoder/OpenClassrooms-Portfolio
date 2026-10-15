import './form.scss';
import { useState } from 'react';
import { sendContactForm } from './SendContactForm.js'

function ContactForm() {
    const [result, setResult] = useState({ ok: true, text: "" });

    const onSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;



        const response = await sendContactForm(new FormData(form));
        setResult(response);

        if (response.ok) form.reset();
    };





    return (
        <form onSubmit={onSubmit} noValidate className='contact-form'>
            <label htmlFor='nom-prenom' >Nom et prénom</label>
            <input id='nom-prenom' type='text' name='nom-prenom' placeholder='nom et prénom'></input>

            <label htmlFor='email'>E-mail</label>
            <input id='email' type='email' name='email' placeholder='entrez votre adresse e-mail'></input>

            <label htmlFor='message'>message</label>
            <textarea id='message' name='message' cols="30" rows="20" placeholder='Votre message'></textarea>

            <input id='formSubmit' type='submit' value="Envoyer"></input>
            <p className={result.ok ? "successForm" : "errorForm"}>{result.text}</p>
        </form>
    )
}

export default ContactForm
