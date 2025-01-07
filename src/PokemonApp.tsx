import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";
import { useAppDispatch } from "./customHook/dispatchHook";
import { RootState } from "./store";

export const PokemonApp = () => {
  const dispatch = useAppDispatch();
  const { pokemons, isLoading, pageNumber } = useSelector(
    (state: RootState) => state.pokemon
  );

  useEffect(() => {
    dispatch(getPokemons(0));
  }, [dispatch]);

  return (
    <>
      <h1>PokemonApp</h1>
      {isLoading && <p>Loading...</p>}

      <ul>
        {pokemons.map((pokemon) => {
          return <li key={pokemon.name}>{pokemon.name}</li>;
        })}
      </ul>

      <button onClick={() => dispatch(getPokemons(pageNumber))}>
        Next
      </button>
    </>
  );
};
