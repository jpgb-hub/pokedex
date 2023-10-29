import React, { useEffect, useState } from 'react';
import './App.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const PokemonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 1rem;
  padding: 1rem;
`;

const PokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform .2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const PokemonName = styled.div`
  margin-top: 0.5rem;
  text-transform: capitalize;
  font-weight: bold;
`;

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((data) => data.json())
      .then((data) => setPokemons(data.results));
  }, []);

  return (
    <>
      <h1>Bienvenidos al PokeDex</h1>
      <PokemonGrid>
        {pokemons.map((pokemon, index) => (
          <PokemonCard key={pokemon.name}>
            <LazyLoadImage
              alt={pokemon.name}
              height="96px"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
              width="96px"
            />
            <PokemonName>{pokemon.name}</PokemonName>
          </PokemonCard>
        ))}
      </PokemonGrid>
    </>
  );
}

export default App;
