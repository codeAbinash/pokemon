import { api } from "@/utils/utils";
import { NamedAPIResource, NamedAPIResourceList } from "pokenode-ts";
import { useEffect, useRef, useState } from "react";

export function usePokemon() {
  const [pokemonList, setPokemonList] = useState<
    NamedAPIResourceList["results"]
  >([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasNext, setHasNext] = useState(true);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<NamedAPIResource[] | null>(
    null
  );

  const observerRef = useRef(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      const response = await api.listPokemons(offset, 100);
      setPokemonList((prevList) => [...prevList, ...response.results]);
      setHasNext(!!response.next);
      setLoading(false);
    };
    if (hasNext) fetchPokemon();
  }, [offset, hasNext]);

  useEffect(() => {
    const s = search.trim().toLowerCase();
    setSearchResults(
      pokemonList.filter((pokemon) => pokemon.name.toLowerCase().includes(s))
    );
  }, [search, pokemonList]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNext)
        setOffset((prevOffset) => prevOffset + 20);
    });
    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [hasNext]);

  return {
    searchResults,
    loading,
    hasNext,
    setSearch,
    observerRef,
    search,
  };
}
