import { Routes, Route, Link } from 'react-router-dom'
import Home from '../paginas/Home'
import './Cabecalho.css'

function Cabecalho() {
    return (
        <header>
            <h1 className='logo'>Sabor & Afetyo</h1>
            <nav>
                <Link to="/">Home</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>

            <p>Seu livro de receitas em um único lugar!</p>
        </header>
    );
}

export default Cabecalho;