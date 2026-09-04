import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../App.css'

function DetalhesReceita() {
    const { id } = useParams();
    const [receita, setReceita] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/recipes/${id}`)
        .then((resposta) => resposta.json())
        .then((dados) => {setReceita(dados)})
    }, []);
    if (!receita) {
            return <p>Carregando receita...</p>;
        }
    return (
        <div className="pagina-detalhes">
            <section className="card-detalhes-top">
                <p>DIFICULADADE {receita.difficulty}</p>

                <h2>{receita.name}</h2>

                
            </section>            
            
            <img src={receita.image} alt="" />

            <section className="section-informacoes">
                <div className="cards-informacoes">
                    <div className="card-informacao">
                        <span className="material-symbols-outlined">timer</span>
                        <p>PREPARO</p>
                        <h3>{receita.prepTimeMinutes} min</h3>
                    </div>
                    <div className="card-informacao">
                        <span className="material-symbols-outlined">soup_kitchen</span>
                        <p>COZIMENTO</p>
                        <h3>{receita.cookTimeMinutes} min</h3>
                    </div>
                    <div className="card-informacao">
                        <span className="material-symbols-outlined">group</span>
                        <p>PORÇÕES</p>
                        <h3>{receita.servings}</h3>
                    </div>
                    <div className="card-informacao">
                        <span className="material-symbols-outlined">local_fire_department</span>
                        <p>CAL0RIAS</p>
                        <h3>{receita.caloriesPerServing}</h3>
                    </div>
                </div>
                <div className="avaliacao">
                    <span className="material-symbols-outlined">star</span>
                    <h3>{receita.rating}</h3>
                </div>

            </section>

            <section className="section-preparacao">
                <div className="container-ingredientes">
                    <div className="container-titulo">
                        <h3>Ingredientes</h3>
                        <hr />
                    </div>

                    <ul>
                        {receita.ingredients.map((ingrediente, index) =>
                        (<li key={index}>{ingrediente}</li>)
                        )}
                    </ul>
                </div>

                <div className="container-instrucoes">
                    <div className="container-titulo">
                        <h3>Intruções</h3>
                        <hr />
                    </div>

                    <ol>
                        {receita.instructions.map((instrucao, index) =>
                        (<li key={index}>{instrucao}</li>)
                    )}
                    </ol>
                </div>
            </section>

            <section className="section-bottom-detalhe">
                <div className="container-tags">
                    {receita.tags.map((tag, index) =>
                    (<p key={index}>{tag}</p>)
                    )}
                </div>

                <Link className='button' to="/">
                <span className="material-symbols-outlined">arrow_back</span>
                Voltar
                </Link>

            </section>
        </div>
    )
}

export default DetalhesReceita