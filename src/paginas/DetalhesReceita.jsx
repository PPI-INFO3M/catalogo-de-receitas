import { Routes, Route, Link } from 'react-router-dom'
import Home from '../paginas/Home'

function DetalhesReceita({ receita }) {
    return (
        <div className="card-detalhes">
            <div className="top">
                <img src={receita.image} alt="" />
                <h2>{receita.name}</h2>
            </div>            
            
            <div className="informacoes">
                <div>
                    <img src="" alt="" />
                    <p>{receita.prepTimeMinutes + receita.cookTimeMinutes}</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <p>{receita.difficulty}</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <p>{receita.servings}</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <p>{receita.reviewCount}</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <p>{receita.rating}</p>
                </div>
            </div>

            <div className="ingredientes">
                <h3>Ingredientes</h3>
                <ul>
                    {receita.ingredients.map((ingrediente, index) =>
                    (<li key={index}>{ingrediente}</li>)
                    )}
                </ul>
            </div>

            <div className="instrucoes">
                <h3>Instruções</h3>
                <ol>
                    {receita.instructions.map((instrucoes, index) =>
                    (<li key={index}>{instrucoes}</li>)
                    )}
                </ol>
            </div>
            {receita.tags.map((tag, index) =>
            (<p key={index}>#{tag}</p>)
            )}

            <button onClick={<Link to="/" />}>Voltar</button>

            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    )
}

export default DetalhesReceita