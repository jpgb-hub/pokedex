import { useLoaderData } from "react-router-dom";
import { getPokemon } from "../services/getPokemon";

export async function loader({ params }) {
  const pokemon = await getPokemon(params.pokemonId);
  return { pokemon };
}

const PokemonDetail = () => {
  const { pokemon } = useLoaderData();
  return <div>{pokemon.name}</div>;
};

export default PokemonDetail;
