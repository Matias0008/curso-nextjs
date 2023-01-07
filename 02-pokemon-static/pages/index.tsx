import { GetStaticProps, NextPage } from "next";

import { PokemonListResponse, SmallPokemon } from "../interfaces";
import { pokeApi } from "../api";
import { Layout } from "../components/layouts";
import { PokemonCard } from "../components/pokemon";

interface Props {
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = (props) => {
  return (
    <>
      <Layout title="Listado de pokemons">
        <div className="grid grid-cols-pokemonCards gap-8">
          {props.pokemons.map((pokemon) => {
            return <PokemonCard pokemon={pokemon} key={pokemon.id} />;
          })}
        </div>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default Home;
