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
    maxWidth: '350px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
    backgroundColor: 'white',   // Fondo blanco para la tarjeta
    margin: 'auto',             // Centrar horizontalmente
    position: 'absolute',       // Estos tres estilos son para centrar
    top: '50%',                 // la tarjeta verticalmente en la pantalla
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '1.2em'
    
};

const imageStyle = {
    width: '150px',
    height: '150px'
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
