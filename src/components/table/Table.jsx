import { Link } from 'react-router-dom'

import './table.scss'

export default function Table(props) {
    const avis = JSON.parse(localStorage.getItem('avis')).reverse()

    return (
        <ul className="table">
            <li className="table__header">
                <div className="table__col table__col-name">Nom</div>
                <div className="table__col table__col-date">Date</div>
                <div className="table__col table__col-content">Observations</div>
                <div className="table__col table__col-options"><i className="bx bxs-cog"/></div>
            </li>
            {avis.map( ( item ) => (
                <li className="table__row" key={item.id}>
                    <Link to={`/avis-de-passage/${item.id}`} className="table__col table__col-name" data-label="Nom">{item.name}</Link>
                    <Link to={`/avis-de-passage/${item.id}`} className="table__col table__col-date" data-label="Date">{item.date}</Link>
                    <Link to={`/avis-de-passage/${item.id}`} className="table__col table__col-content" data-label="Observation">{item.content}</Link>
                    <div className="table__col table__col-options">
                        <i className="bx bxs-edit table__col-edit"/>
                        <span> | </span>
                        <i className='bx bxs-trash table__col-delete'></i>
                    </div>
                </li>
            ))}
        </ul>
    )
}