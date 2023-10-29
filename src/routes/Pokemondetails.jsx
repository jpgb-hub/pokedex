import { useLoaderData } from "react-router-dom";
import { getPokemon } from "../services/getPokemon";

export async function loader({ params }) {
  const pokemon = await getPokemon(params.pokemonId);
  return { pokemon };
}

const PokemonDetail = () => {
  const { pokemon } = useLoaderData();

  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1em',
    maxWidth: '250px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'center'
  };

  const imageStyle = {
    width: '100px',
    height: '100px'
  };

  return (
    <div style={cardStyle}>
      <img 
        style={imageStyle}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} 
        alt={pokemon.name} 
      />
      <h2>{pokemon.name}</h2>
      <p>Type: {pokemon.type}</p>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      {/* Add any other details you want to display here */}
    </div>
  );
};

export default PokemonDetail;
