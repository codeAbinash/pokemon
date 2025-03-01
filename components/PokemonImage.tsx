/* eslint-disable @next/next/no-img-element */

"use client";

import { getImageById } from "@/utils/utils";

export function PokemonImage({ id }: { id: number }) {
  return (
    <div className="text-center">
      <img src={getImageById(id)} alt="pokemon" />
    </div>
  );
}
