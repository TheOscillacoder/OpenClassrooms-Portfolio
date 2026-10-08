import './form.scss';

function LoginForm() {
    return (
        <form action="#" method='POST' ids='formIds' className='contact-form'>
            <label htmlFor='email'>E-mail</label>
            <input id='email' type='email' name='email' placeholder='entrez votre adresse e-mail'></input>
            <label htmlFor='password'>Mot de passe</label>
            <input id='password' type='password' name='password' placeholder='Entrez votre mot de passe'></input>
            <input id='formSubmit' type='submit' value="Envoyer"></input>
        </form>
    )
}

export default LoginForm