import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

import './home.scss'

export default function Home(  ) {
    return (
        <main className="home">
            <div className="home__container">
                <img src={logo} alt="Logo de Clean 3000" className="home__logo"/>
                <div className="home__content">
                    <Link to="/creer"
                          title="Lien vers la création d'un avis de passage"
                          className="home__content-link">
                        Créer <span>un avis de passage</span>
                    </Link>
                    <Link to="/avis-de-passage"
                          title="Lien vers la liste de tout les avis de passage"
                          className="home__content-link">
                        Voir <span>les avis de passage</span>
                    </Link>
                </div>
            </div>
        </main>
    )
}