import { NamedAPIResource, PokemonClient } from "pokenode-ts";

export function getImage(pokemon: NamedAPIResource) {
  const id = pokemon.url.split("/")[6];
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

export function getImageById(id: number) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

export const api = new PokemonClient();

export const colorMap = {
  black: "from-black to-gray-800",
  blue: "from-blue-500 to-blue-300",
  brown: "from-yellow-800 to-yellow-600",
  gray: "from-gray-500 to-gray-300",
  green: "from-green-500 to-green-300",
  pink: "from-pink-500 to-pink-300",
  purple: "from-purple-600 to-purple-400",
  red: "from-red-500 to-red-300",
  white: "from-white to-gray-200 text-black",
  yellow: "from-yellow-500 to-yellow-300",
};
