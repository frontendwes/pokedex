import { Pokemon } from '@/types'
import Image from 'next/image'

export type PokemonCardProps = {
  pokemon: Pokemon
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => (
  <Image
    key={pokemon.id}
    alt={pokemon.name}
    width={200}
    height={200}
    src={pokemon.sprites.other['official-artwork'].front_default}
  />
)

export default PokemonCard
