import { useRouter } from "next/router";
import { Layout } from "../../components/layouts";
import { FavoritePokemons } from "../../components/pokemon";
import { useFavorites } from "../../state/AppContext";

const FavoritesPage = () => {
  const [favorites] = useFavorites();
  const router = useRouter();

  const onFavoriteClick = (id: string) => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Layout title="Pokemons favoritos">
      <h1 className="text-5xl mb-8">Pokemones favoritos</h1>
      {favorites.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons
          favorites={favorites}
          onFavoriteClick={(id: string) => onFavoriteClick(id)}
        />
      )}
    </Layout>
  );
};

const NoFavorites = () => {
  return <h1 className="text-xl">No hay favoritos.</h1>;
};

export default FavoritesPage;
