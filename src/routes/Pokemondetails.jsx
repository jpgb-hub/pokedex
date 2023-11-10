import { useLoaderData } from "react-router-dom";
import { getPokemon } from "../services/getPokemon";

export async function loader({ params }) {
  const pokemon = await getPokemon(params.pokemonId);
  return { pokemon };
}

const PokemonDetail = () => {
  const { pokemon } = useLoaderData();

  // Estilo para el contenedor
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',  // Altura de toda la ventana
    padding: '40px'
  };

  // Estilos para la tarjeta
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '500px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: '1rem',
    margin: '0 auto'  // Asegura que la tarjeta se centre horizontalmente
  };

  // Estilos para la imagen
  const imageStyle = {
    width: '180px',
    height: '180px',
    margin: '0 auto'  // Centra la imagen
  };

  // Estilos para las listas
  const listStyle = {
    textAlign: 'left',
    paddingLeft: '0',
    listStyleType: 'none'
  };

  return (
    <div style={containerStyle}> {/* Contenedor para centrar la tarjeta */}
      <div style={cardStyle}>
        <img 
          style={imageStyle}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} 
          alt={pokemon.name} 
        />
        <h2>{pokemon.name}</h2>
        <p>Type: {pokemon.types?.map(type => type.type.name).join(', ')}</p>
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
        <p>Abilities: {pokemon.abilities?.map(ability => ability.ability.name).join(', ')}</p>
        <p>Base Experience: {pokemon.base_experience}</p>
        <div>
          <h3>Base Stats:</h3>
          <ul style={listStyle}>
            {pokemon.stats?.map(stat => (
              <li key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
