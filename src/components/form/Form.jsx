import './form.scss'
import CanvasDraw from 'react-canvas-draw'

export default function Form(  ) {
    return (
        <form className="form">
            <div className="form__contents">
                <div className="form__content">
                    <input type="text" id="client"
                           className="form__content-input"
                           placeholder="Nom du client / entreprise"/>
                </div>
                <div className="form__content">
                    <input type="date" id="date"
                           className="form__content-input"/>
                </div>
            </div>
            <div className="form__content">
                <textarea id="content"
                          className="form__content-textarea"
                          placeholder="Observations ou commentaires..."/>
            </div>
            <div className="form__contents">
                <div className="form__content">
                    <CanvasDraw className="form__content-draw"/>
                    <div className="form__content-label">
                        <span>Signature du technicien</span>
                    </div>
                </div>
                <div className="form__content">
                    <CanvasDraw className="form__content-draw"/>
                    <div className="form__content-label">
                        <span>Signature du client ou </span>
                        <label htmlFor="cachet">importer le cachet</label>
                        <input type="file" id="cachet" className="form__content-file"/>
                    </div>
                </div>
            </div>
            <button className="form__button" type="submit">Valider</button>
        </form>
    )
}