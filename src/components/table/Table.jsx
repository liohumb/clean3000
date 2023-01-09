import './table.scss'
import { Link } from 'react-router-dom'

export default function Table() {
    return (
        <ul className="table">
            <li className="table__header">
                <div className="table__col table__col-name">Nom</div>
                <div className="table__col table__col-date">Date</div>
                <div className="table__col table__col-content">Observations</div>
                <div className="table__col table__col-options"><i className="bx bxs-cog"/></div>
            </li>
            <li className="table__row">
                <Link to="/avis-de-passage/:id" className="table__col table__col-name" data-label="Nom">John Doe</Link>
                <Link to="/avis-de-passage/:id" className="table__col table__col-date" data-label="Date">{Date.now()}</Link>
                <Link to="/avis-de-passage/:id" className="table__col table__col-content" data-label="Observation">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Delectus eius et exercitationem, ipsam laboriosam minus possimus quos reprehenderit similique sunt
                    veritatis vero. Eaque enim facilis magnam nam nulla, officiis sapiente.
                </Link>
                <div className="table__col table__col-options">
                    <i className="bx bxs-edit table__col-edit"/>
                    <span> | </span>
                    <i className='bx bxs-trash table__col-delete'></i>
                </div>
            </li>
        </ul>
    )
}