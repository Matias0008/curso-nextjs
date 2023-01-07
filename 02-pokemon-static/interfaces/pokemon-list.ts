export interface PokemonListResponse {
  count: number;
  next: string;
  previous: string | null;
  results: SmallPokemon[];
}

export interface SmallPokemon {
  id: number;
  url: string;
  name: string;
  image: string;
}
