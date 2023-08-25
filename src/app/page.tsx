import { PokemonCard } from '@/components'
import Services from '@/services'

const Home = async () => {
  const pokemons = await Services.GetPokemons()
  return (
    <div className="flex w-[1000px] p-3 ">
      <div className="grid grid-cols-2 gap-3">
        {pokemons?.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  )
}

export default Home
