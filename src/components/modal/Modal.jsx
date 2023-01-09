import './modal.scss'
import { Link } from 'react-router-dom'

export default function Modal({active}) {
    return (
        <div className={`modal ${active && 'modal__active'}`}>
            <ul className="modal__menu">
                <li>
                    <Link to="/" className="modal__menu-link">Accueil</Link>
                </li>
                <li>
                    <Link to="/avis-de-passage" className="modal__menu-link">Avis de passage</Link>
                </li>
                <li>
                    <Link to="/creer" className="modal__menu-link">Créer</Link>
                </li>
            </ul>
        </div>
    )
}