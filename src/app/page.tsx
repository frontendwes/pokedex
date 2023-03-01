import Services from '@/services'
import { PokemonCard } from '@/components'

const Home = async () => {
  console.log('teste')
  const pokemons = await Services.GetPokemons()

  return pokemons?.map((pokemon) => (
    <PokemonCard key={pokemon.id} pokemon={pokemon} />
  ))
}

export default Home
