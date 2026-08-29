import { useEffect, useState } from 'react'
import Receita from '../components/Receita'


function Home() {
    const [recipes, setRecipes] = useState([]);


    useEffect(() => {
      fetch('https://dummyjson.com/recipes')
      .then((resposta) => resposta.json())
      .then((dados) => {setRecipes(dados.recipes)})
    }, []);


    return (
        <div className="Home">
            {recipes.map((recipe) => (
                <Receita key={recipe.id} receita={recipe} />))}
        </div>
    )
}

export default Home