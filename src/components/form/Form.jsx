import { useRef, useState } from 'react'
import CanvasDraw from 'react-canvas-draw'

import './form.scss'

export default function Form() {
    const signTech = useRef( null )
    const signUser = useRef(null)

    const [name, setName] = useState( '' )
    const [date, setDate] = useState( '' )
    const [content, setContent] = useState( '' )
    const [tech, setTech] = useState()
    const [user, setUser] = useState()
    const [cachet, setCachet] = useState(null)
    const [active, setActive] = useState( false )
    const [data, setData] = useState( JSON.parse( localStorage.getItem( 'avis' ) ) || [] )

    const upload = ( e ) => {
        if (e.target.files.length) {
            const file = e.target.files[0]

            const reader = new FileReader()
            reader.readAsDataURL(file)

            reader.onloadend = () => {
                const imgUrl = reader.result
                setCachet(imgUrl)
            }
        }
    }

    const addSign = ( e ) => {
        e.preventDefault()

        const signOfTech = signTech.current.canvasContainer.childNodes[1].toDataURL()
        const signOfUser = signUser.current.canvasContainer.childNodes[1].toDataURL()

        setTech(signOfTech)
        setUser(signOfUser)
        setActive(true)
    }

    const addToAvis = ( e ) => {
        const newAvis = {
            id: 'A2P-' + Date.now(),
            name,
            date,
            content,
            tech,
            user,
            cachet
        }

        data.push( newAvis )

        setData( data )
        setName( '' )
        setDate( '' )
        setContent( '' )
        setTech( '' )


        localStorage.setItem( 'avis', JSON.stringify( data ) )
    }


    return (
        <form className="form" onSubmit={addToAvis}>
            <div className="form__contents">
                <div className="form__content">
                    <input type="text" id="client"
                           className="form__content-input"
                           placeholder="Nom du client / entreprise"
                           onChange={( event ) => setName( event.target.value )}
                           value={name}/>
                </div>
                <div className="form__content">
                    <input type="date" id="date"
                           className="form__content-input"
                           onChange={( event ) => setDate( event.target.value )}
                           value={date}/>
                </div>
            </div>
            <div className="form__content">
                <textarea id="content"
                          className="form__content-textarea"
                          placeholder="Observations ou commentaires..."
                          onChange={( event ) => setContent( event.target.value )}
                          value={content}/>
            </div>
            <div className="form__contents">
                <div className="form__content">
                    <CanvasDraw ref={signTech} className="form__content-draw"/>
                    <div className="form__content-label">
                        <span>Signature du technicien</span>
                    </div>
                </div>
                <div className="form__content">
                    <CanvasDraw ref={signUser} className="form__content-draw"/>
                    <div className="form__content-label">
                        <span>Signature du client </span>
                        <span>ou </span>
                        <label htmlFor="cachet">importer le cachet</label>
                        <input type="file" id="cachet"
                               className="form__content-file"
                               onChange={upload}/>
                    </div>
                </div>
            </div>
            <div className="form__infos">
                <button className="form__infos-button" onClick={addSign}>
                    <i className="bx bxs-pen form__infos-button--icon"></i>
                    sauvegarder les signatures
                </button>
                <span className={`form__infos-instruction ${active && 'form__infos-instruction--active'}`}>
                    <i className="bx bx-up-arrow-alt bx-tada"/>
                    Vous devez sauvegarder les signatures avant de pouvoir valider cet avis de passage.
                </span>
            </div>
            <button className={`form__button ${active && 'form__button-active'}`} type="submit">Valider</button>
        </form>
    )
}