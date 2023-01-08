import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts";
import { Pokemon } from "../../interfaces";
import { useFavorites } from "../../state/AppContext";
import { getPokemonInfo } from "../../utils/getPokemonInfo";

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const [favorites, toggleFavorites] = useFavorites();
  const isFavorited = favorites.includes(`${pokemon.id}`);

  return (
    <Layout title={`Pokemon: ${pokemon.name}`}>
      <article className="flex flex-row gap-24">
        <section className="dark:bg-neutral-900 p-6 rounded-xl">
          <img src={pokemon.sprites.other?.dream_world.front_default} />
        </section>
        <section className="flex flex-col flex-1  dark:bg-neutral-900 p-6 rounded-xl">
          <div className="flex gap-12 w-full justify-between">
            <h1 className="text-6xl capitalize">{pokemon.name}</h1>
            <button
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              onClick={() => toggleFavorites(`${pokemon.id}`)}
            >
              {isFavorited ? "En favoritos" : "Guardar en favoritos"}
            </button>
          </div>
          <div className="flex items-center gap-2 ">
            <h1 className="text-3xl">Sprites:</h1>
            <div className="flex justify-start">
              <img
                src={pokemon.sprites.front_default}
                className="w-[100px] object-cover"
              />
              <img
                src={pokemon.sprites.back_default}
                className="w-[100px] object-cover"
              />
              <img
                src={pokemon.sprites.front_shiny}
                className="w-[100px] object-cover"
              />
              <img
                src={pokemon.sprites.back_shiny}
                className="w-[100px] object-cover"
              />
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const allPokemons = Array.from({ length: 151 }).map(
    (value, index) => `${index + 1}`
  );
  const paths = allPokemons.map((id) => ({
    params: { id },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const pokemon = await getPokemonInfo(id);

  if (!pokemon) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      pokemon,
    },
    revalidate: 84200,
  };
};

export default PokemonPage;
