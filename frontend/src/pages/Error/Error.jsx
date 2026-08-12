// PAGE ERROR 404 //
import { Link } from "react-router-dom"
import './error.scss'

function ErrorPage() {
    return (
        <div className="error__Page">
            <h3 className='error'>404</h3>
            <p className='error__Text'>Oups ! La page que vous demandez n&apos;existe pas.</p>
            <p className ='indexReturnLink'>
            <Link to = "/">Retourner sur la page d&apos;accueil</Link>
            </p>
        </div>
    )
}

export default ErrorPage