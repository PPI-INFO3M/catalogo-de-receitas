import { useEffect, useState } from 'react'
import './App.css'
import Receita from './components/Receita'
import Cabecalho from './components/Cabecalho'
import DetalhesReceita from './paginas/DetalhesReceita'

function App() {
  const [recipes, setRecipes] = useState([]);

    useEffect(() => {
      fetch('https://dummyjson.com/recipes')
      .then((resposta) => resposta.json())
      .then((dados) => {setRecipes(dados.recipes)})
    }, []);

  return (
    <div className="App">

      <Cabecalho />

      {(recipes.length === 0) && <p>Carregando receitas...</p>}
    </div>
  )
}

export default App