import DebouncedInput from "@/components/DebouncedInput";
import { Loading } from "@/components/Loading";
import { NotFound } from "@/components/NotFound";
import PokemonCard from "@/components/PokemonCard";
import { usePokemon } from "@/hooks/usePokemon";
import { NoMorePokemon } from "../components/NoMorePokemon";

export default function Home() {
  const { searchResults, loading, hasNext, setSearch, observerRef, search } =
    usePokemon();

  return (
    <div className="p-4">
      <div className="mb-4 flex justify-center items-center gap-5">
        <h1 className="text-2xl font-semibold text-center">Pokemon List</h1>
        <DebouncedInput onInput={setSearch} />
      </div>
      <div className="flex flex-wrap gap-5 items-center justify-center mt10">
        {searchResults?.map((pokemon, i) => (
          <PokemonCard key={i + 1} pokemon={pokemon} />
        ))}
      </div>
      {search && searchResults?.length === 0 && <NotFound />}
      {loading && <Loading />}
      {!hasNext && <NoMorePokemon />}
      <div ref={observerRef} className="h-1"></div>
    </div>
  );
}
