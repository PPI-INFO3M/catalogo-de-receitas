import { Link } from 'react-router-dom';
import './Receita.css';

function Receita({ receita }) {

    return (
        <div className="card-receita">
            <div className="card-top">
                <img src={receita.image} alt="Foto da receita" />
                <h2>{receita.name}</h2>
                <p>Tempo de preparo: {(receita.prepTimeMinutes) + (receita.cookTimeMinutes)}</p>
                <p>Dificulade: {receita.difficulty}</p>
                <p>Nota: {receita.rating}</p>
            </div>

            <Link className='button' to={`/${receita.id}`}>Acessar receita</Link>
        </div>

    )
}

export default Receita;