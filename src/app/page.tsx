import { PokemonCard } from '@/components'
import Services from '@/services'

const Home = async () => {
  const pokemons = await Services.GetPokemons()

  return (
    <div className="gap-16 flex-row">
      {pokemons?.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  )
}

export default Home
