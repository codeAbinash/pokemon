import { PokemonImage } from "@/components/PokemonImage";
import TopPart from "@/components/TopPart";
import { api, colorMap } from "@/utils/utils";
import { BarChart, Move, Power, Ruler, Star, Type, Weight } from "lucide-react"; // Import Lucide icons
import { Pokemon } from "pokenode-ts";

export async function fetchPokemon(name: string): Promise<Pokemon> {
  return await api.getPokemonByName(name);
}

export async function fetchPokemonColor(name: string): Promise<string> {
  const species = await api.getPokemonSpeciesByName(name);
  return species.color.name;
}

export type PokemonDetailsProps = {
  params: {
    name: string;
  };
};

export default async function PokemonDetail({ params }: PokemonDetailsProps) {
  const pokemon = await fetchPokemon(params.name);
  const color = (await fetchPokemonColor(params.name)) as keyof typeof colorMap;
  console.log(pokemon.id);

  const bgColorClass = colorMap[color] || "from-gray-500 to-gray-300";

  return (
    <div className="relative text-center font-sans min-h-screen flex flex-col items-center justify-center text-white p-5">
      <TopPart bgColorClass={bgColorClass} id={pokemon.id} />
      <div className="relative flex justify-center items-center flex-col z-10">
        <h1 className="text-4xl capitalize font-bold mb-4">{pokemon.name}</h1>
        <PokemonImage id={pokemon.id} />
        <div className="mt-5 flex flex-roe flex-wrap gap-4 text-left gap-x-5 bg-white text-sm text-black p-6 rounded-3xl shadow-lg w-xl">
          <p>
            <Ruler className="inline-block mr-2" />
            <span className="font-medium">Height:</span> {pokemon.height} dm
          </p>
          <p>
            <Weight className="inline-block mr-2" />
            <span className="font-medium">Weight:</span> {pokemon.weight} hg
          </p>
          <p>
            <Star className="inline-block mr-2" />
            <span className="font-medium">Base Experience:</span>{" "}
            {pokemon.base_experience}
          </p>
          <p className="mb-2 gap-1 flex flex-wrap">
            <Type className="inline-block mr-2" />
            <span className="font-medium">Types:</span>{" "}
            {pokemon.types.map((typeInfo) => (
              <span
                key={typeInfo.type.name}
                className="inline-block bg-gray-200 text-gray-800 px-2.5 py-0.5 rounded-full mr-2"
              >
                {typeInfo.type.name}
              </span>
            ))}
          </p>
          <p className="mb-2 gap-1 flex flex-wrap">
            <Power className="inline-block mr-2" />
            <span className="font-medium">Abilities:</span>{" "}
            {pokemon.abilities.map((abilityInfo) => (
              <span
                key={abilityInfo.ability.name}
                className="inline-block bg-gray-200 text-gray-800 px-2.5 py-0.5 rounded-full mr-2"
              >
                {abilityInfo.ability.name}
              </span>
            ))}
          </p>
          <p className="mb-2 gap-1 flex flex-wrap">
            <BarChart className="inline-block mr-2" />
            <span className="font-medium">Stats:</span>{" "}
            {pokemon.stats.map((statInfo) => (
              <span
                key={statInfo.stat.name}
                className="inline-block bg-gray-200 text-gray-800 px-2.5 py-0.5 rounded-full mr-2"
              >
                {statInfo.stat.name}: {statInfo.base_stat}
              </span>
            ))}
          </p>
          <p className="mb-2 gap-1 flex flex-wrap">
            <Move className="inline-block mr-2" />
            <span className="font-medium">Moves:</span>{" "}
            {pokemon.moves.slice(0, 5).map((moveInfo) => (
              <span
                key={moveInfo.move.name}
                className="inline-block bg-gray-200 text-gray-800 px-2.5 py-0.5 rounded-full mr-2"
              >
                {moveInfo.move.name}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
