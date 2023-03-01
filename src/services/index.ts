import axios from 'axios'

export type PokemonURL = {
  url: string
}

const Services = {
  GetPokemons: async () => {
    try {
      const { data: pokemonsList } = await axios.get(
        'https://pokeapi.co/api/v1/pokemon?limit=151',
      )
      const pokemonsURLs = await pokemonsList.results?.map(
        ({ url }: PokemonURL) => axios.get(url),
      )
      const allRequests = await Promise.all(pokemonsURLs)
      const pokemonsData = allRequests.map(({ data }) => data)
      return pokemonsData
    } catch (error) {
      console.log(error)
    }
  },
}

export default Services
