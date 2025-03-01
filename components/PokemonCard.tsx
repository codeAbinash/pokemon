/* eslint-disable @next/next/no-img-element */

import { getImage } from "@/utils/utils";
import Link from "next/link";
import { NamedAPIResource } from "pokenode-ts";

type PokemonCardProps = {
  pokemon: NamedAPIResource;
};
export default function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <Link href={`/pokemon/${pokemon.name}`} passHref>
      <div className="border border-zinc-500/10 shadow-xl shadow-zinc-500/10 rounded-2xl overflow-hidden transform px-5 pt-3 transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
        <img
          src={getImage(pokemon)}
          alt={pokemon.name}
          className="size-44 mx-auto"
        />
        <div className="mb-3 mt-2 capitalize text-center text-lg font-semibold">
          {pokemon.name}
        </div>
      </div>
    </Link>
  );
}
