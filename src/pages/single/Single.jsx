import { useParams } from 'react-router-dom'

import './single.scss'

export default function Single( props) {
    const {id} = useParams()
    const {avis} = props

    const item = avis.find( ( item ) => item.id === id)

    return (
        <main className="single">
            <h1 className="single__title">Avis de Passage</h1>
            <div className="single__container">
                <div className="single__content">
                    <div className="single__content-name">
                        <span>nom: {item.name}</span>
                    </div>
                    <div className="single__content-date">
                        <span>date: {item.date}</span>
                    </div>
                    <div className="single__content-content">
                        <p>Observations: <br/>
                            {item.content}</p>
                    </div>
                </div>
                <div className="single__images">
                    <div className="single__images-img">
                        <img src={item.tech} alt="Signature du technicien"/>
                        <span>signature du technicien</span>
                    </div>
                    <div className="single__images-img">
                        {item.cachet ?
                            <>
                                <img src={item.cachet} alt="Cachet de l'entreprise"/>
                                <span>cachet de l'entreprise</span>
                            </>
                        :
                            <>
                                <img src={item.user} alt="Signature du client"/>
                                <span>signature du client</span>
                            </>
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}