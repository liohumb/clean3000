import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo-mini.png'

import './nav.scss'
import Modal from '../../components/modal/Modal'

export default function Nav() {
    const [active, setActive] = useState( false )

    const toggleMenu = () => {
        if (active) {
            return setActive(false)
        } else {
            setActive(true)
        }
    }

    return (
        <>
            <header className="nav">
                <Link to="/"
                      title="Bouton pour retourner sur la page d'accueil de Clean 3000"
                      className="nav__logo">
                    <img src={logo} alt="Logo de clean 3000"/>
                </Link>
                <ul className="nav__menu">
                    <li>
                        <Link to="/avis-de-passage" className="nav__menu-link">
                            <span>Avis de passage</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/creer" className="nav__menu-link">
                            <span>Créer</span>
                        </Link>
                    </li>
                </ul>
                <button className="nav__burger"  onClick={toggleMenu}>
                    <i className={`bx ${active ? 'bx-x' : 'bx-menu'}`}/>
                </button>
            </header>

            <Modal active={active}/>
        </>
    )
}