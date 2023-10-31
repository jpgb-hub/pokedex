import { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './App.css'; // suponiendo que tienes un archivo App.css

function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((data) => data.json())
      .then((data) => setPokemons(data.results));
  }, []);

  return (
    <>
      <h1>Bienvenidos al PokeDex</h1>
      <div className="pokemon-grid">
        {pokemons.map((pokemon, index) => (
          <div className="pokemon-card" key={pokemon.name}>
            <LazyLoadImage
              alt={pokemon.name}
              height="96px"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
              width="96px"
            />
            <div className="pokemon-name">{pokemon.name}</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default App;

