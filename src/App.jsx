import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Receita from './components/Receita'
import Cabecalho from './components/Cabecalho'
import DetalhesReceita from './components/DetalhesReceita'

function App() {
  const [recipes, setRecipes] = useState([]);
  const [receitaSelecionada, setReceitaSelecionada] = useState(null);

    useEffect(() => {
      fetch('https://dummyjson.com/recipes')
      .then((resposta) => resposta.json())
      .then((dados) => {setRecipes(dados.recipes)})
    }, []);

    function selecionarReceita(receita) {
      setReceitaSelecionada(receita)
    };

    function aoVoltar() {
      setReceitaSelecionada(null)
    };

  return (
    <div className="App">

      <Cabecalho />
      {(recipes.length === 0) && <p>Carregando receitas...</p>}

      {receitaSelecionada ? (
        <DetalhesReceita receita={receitaSelecionada} aoVoltar={aoVoltar} />

      ) : (
        recipes.map((recipe) => (
        <Receita key={recipe.id} receita={recipe} aoClicar={selecionarReceita} />
      )))}



    </div>
  )
}

export default App