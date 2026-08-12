import './form.scss';

function contactForm() {

    return (
        < div >
            <form action="#" method='POST' ids='formIds' class='login-form'>
                <label for='nom&prenom' >Nom et prénom</label>
                <input id='nom&prenom' type='text' name='nom&prenom' placeholder='nom et prénom'></input>
                <label for='email'>E-mail</label>
                <input id='email' type='email' name='email' placeholder='entrez votre adresse e-mail'></input>
                <label for='message' >message</label>
                <textarea id='message' name='message' placeholder='Votre message'></textarea>
                <input id='formSubmit' type='submit' value="Se connecter"></input>
            </form>
        </div >
    )
}

export default contactForm
