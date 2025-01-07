import { setPokemon, startLoadingPokemons } from "./pokemonSlice";
import { AppDispatch } from "../../store";

export const getPokemons = (page = 0) => {
  return async (dispatch: AppDispatch) => {
    dispatch(startLoadingPokemons());

    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
    const data = await resp.json();

    dispatch(setPokemon({ pokemons: data.results, pageNumber: page + 1 }));
  };
};
