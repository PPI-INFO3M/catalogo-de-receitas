import './Cabecalho.css'

function Cabecalho() {
    return (
        <header>
            <h1 className='logo'>Sabor & Afetyo</h1>
            <nav>
                <ul>
                    <li>Receitas</li>
                    <li>Categorais</li>
                    <li>Sobre</li>
                </ul>
            </nav>
            <p>Seu livro de receitas em um único lugar!</p>
        </header>
    );
}

export default Cabecalho;