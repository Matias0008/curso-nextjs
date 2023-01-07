import { useRouter } from "next/router";
import { SmallPokemon } from "../../interfaces";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  const { id, name, image } = pokemon;

  const router = useRouter();
  const onPokemonClick = () => {
    router.push(`/pokemon/${pokemon.name}`);
  };

  return (
    <div
      className="w-full flex flex-col gap-6 p-4 rounded-xl shadow-pokemonCardsShadow  dark:bg-neutral-900 dark:shadow-none cursor-pointer"
      onClick={() => onPokemonClick()}
    >
      <img
        src={image}
        alt={`Image of pokemon: ${name}`}
        className="h-[150px]"
      />
      <div className="flex justify-between">
        <h3 className="capitalize font-bold">{name}</h3>
        <h3>#{id}</h3>
      </div>
    </div>
  );
};
