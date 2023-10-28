import { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((data) => data.json())
      .then((data) => setPokemons(data.results));
  }, []);

  return (
    <>
    <h1>PokeDex</h1>
    <ul>
      {pokemons.map((pokemon, index) => (
        <li key={pokemon.name}>
          {pokemon.name}
          <LazyLoadImage
            alt={pokemon.name}
            height="96px"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`}
            width="96px"
          />
        </li>
      ))}
    </ul>
  </>
  )
}

export default App
