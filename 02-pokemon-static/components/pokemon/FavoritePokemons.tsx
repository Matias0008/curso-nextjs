import Image from "next/image";

interface Props {
  favorites: string[];
  onFavoriteClick: (id: string) => void;
}

export const FavoritePokemons: React.FC<Props> = ({
  favorites,
  onFavoriteClick,
}) => {
  const handleClick = (id: string) => {
    onFavoriteClick(id);
  };

  return (
    <div className="grid grid-cols-pokemonCards w-full gap-6">
      {favorites.map((id) => {
        return (
          <div
            className="bg-neutral-900 p-6 rounded-xl"
            key={id}
            onClick={() => handleClick(id)}
          >
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
              width="0"
              height="0"
              alt={id}
              key={id}
              className="w-[150px] h-[150px]"
            />
          </div>
        );
      })}
    </div>
  );
};
