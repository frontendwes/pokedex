import { Pokemon } from '@/types';
import Image from 'next/image';

export type PokemonCardProps = {
  pokemon: Pokemon;
};

const PokemonCard = ({ pokemon }: PokemonCardProps) => (
  <div key={pokemon.id} className="flex max-w-200">
    <Image
      alt={pokemon.name}
      width={200}
      height={200}
      src={pokemon.sprites.other['official-artwork'].front_default}
    />
    <p className="text-red-900">{pokemon.name}</p>
  </div>
);

export default PokemonCard;
