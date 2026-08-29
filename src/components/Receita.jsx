import { Routes, Route, Link } from 'react-router-dom'
import DetalhesReceita from '../paginas/DetalhesReceita';

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

            <div className='button'>
                <Link to="/{receita.name}">Acessar receita</Link>
            </div>


            <Routes>
                <Route path="/{receita.name}" element={<DetalhesReceita />} />
            </Routes>
        </div>

    )
}

export default Receita;