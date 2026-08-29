import { useEffect, useState } from 'react'
import Receita from '../components/Receita'
import '../App.css'
import banner from '../assets/banner.jpg'


function Home() {
    const [recipes, setRecipes] = useState([]);


    useEffect(() => {
      fetch('https://dummyjson.com/recipes')
      .then((resposta) => resposta.json())
      .then((dados) => {setRecipes(dados.recipes)})
    }, []);


    return (
        <div className="Home">
            <section className="secao-informacoes">
                <h1>
                    Receitas que abraçam o coração
                </h1>
                <p>Um catálago curado de pratos caseiros, testados e aprovados para trazer mais calor à sua mesa.</p>
            </section>

            <img className="banner" src={banner} alt="Banner" />
            
            <h2 className="titulo-secao">Receitas</h2>
            <section className="secao-receitas">
                {recipes.map((recipe) => (
                    <Receita key={recipe.id} receita={recipe} />))}
            </section>
        </div>
    )
}

export default Home