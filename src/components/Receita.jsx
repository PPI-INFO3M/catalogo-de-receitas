

function Receita({ receita, aoClicar }) {

    return (
        <div className="card-receita">
            <div className="card-top">
                <img src={receita.image} alt="Foto da receita" />
                <h2>{receita.name}</h2>
                <p>Tempo de preparo: {(receita.prepTimeMinutes) + (receita.cookTimeMinutes)}</p>
                <p>Dificulade: {receita.difficulty}</p>
                <p>Nota: {receita.rating}</p>
            </div>

            <button onClick={() => aoClicar(receita)}>Ver receita</button>
        </div>

    )
}

export default Receita;