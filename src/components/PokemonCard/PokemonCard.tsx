// import { Pokemon } from '@/types'

import Image from 'next/image'

export type PokemonCardProps = {
  pokemon: any
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => (
  <div
    key={pokemon.id}
    className={`flex px-4 pb-2 pt-6 rounded-xl justify-between hover:cursor-pointer shadow bg-type-${pokemon?.types[0]?.type?.name}`}
  >
    <div className="flex flex-col">
      <p className="text-white font-semibold first-letter:uppercase mb-1">
        {pokemon?.name}
      </p>
      <div className="flex flex-col gap-1">
        {pokemon?.types.map((pokemon: any) => (
          <div
            key={`${pokemon.id}-${pokemon.type.name}`}
            className="rounded-xl text-center w-min bg-slate-50/20 py-[1px] px-4"
          >
            <p className="text-white text-sm first-letter:uppercase">
              {pokemon.type.name}
            </p>
          </div>
        ))}
      </div>
    </div>
    <Image
      alt={pokemon.name}
      width={100}
      height={100}
      src={pokemon.sprites.other['official-artwork'].front_default}
    />
  </div>
)

export default PokemonCard
