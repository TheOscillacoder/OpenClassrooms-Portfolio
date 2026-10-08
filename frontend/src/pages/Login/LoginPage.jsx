import './loginPage.scss'
import LoginForm from '../../components/Form/LoginForm.jsx'



function LoginPage() {
    return (
        <section id="login" className='login'>
            <h1 className="loginTitle">Log in</h1>
            <LoginForm></LoginForm>
        </section>
    )
}


export default LoginPage