
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonState {
  pokemons: Pokemon[];
  isLoading: boolean;
  pageNumber: number;
}

const initialState: PokemonState = {
  pokemons: [],
  isLoading: false,
  pageNumber: 0,
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemon: (state, action: PayloadAction<{ pokemons: Pokemon[]; pageNumber: number }>) => {
      state.isLoading = false;
      state.pokemons = action.payload.pokemons;
      state.pageNumber = action.payload.pageNumber;
    },
  },
});

export const { startLoadingPokemons, setPokemon } = pokemonSlice.actions;

