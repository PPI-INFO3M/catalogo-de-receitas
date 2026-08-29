import { Link } from 'react-router-dom';
import '../App.css'

function Receita({ receita }) {

    return (
        <div className="card-receita">
            <div className="card-receita-top">
                <img src={receita.image} alt="Foto da receita" />
                <Link to={`/${receita.id}`}>
                    <h2>{receita.name}</h2>
                </Link>
            </div>
            <div className="card-receita-bottom">
                <p><span className="material-symbols-outlined">timer</span> {(receita.prepTimeMinutes) + (receita.cookTimeMinutes)}</p>
                <p><span className="material-symbols-outlined">speed</span> {receita.difficulty}</p>
                <p className="texto-avaliacao"><span className="material-symbols-outlined">star</span> {receita.rating}</p>
            </div>

        </div>

    )
}

export default Receita;