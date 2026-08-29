import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './paginas/Home'
import DetalhesReceita from './paginas/DetalhesReceita'

function App() {
  return (
    <div className="App">
      <header className="cabecalho">
            <h1 className='logo'>Sabor & Afetyo</h1>
            <nav>
                <Link to="/">Home</Link>
            </nav>
            <p>Seu livro de receitas em um único lugar!</p>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<DetalhesReceita />} />
            </Routes>

        </header>
    </div>
  )
}

export default App