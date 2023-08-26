// import { Pokemon } from '@/types'
"use client";
import Image from "next/image";
import PokemonModal from "../PokemonModal/PokemonModal";
import { useState } from "react";

export type PokemonCardProps = {
  pokemon: any;
};

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const [modal, setModal] = useState(false);

  <div
    onClick={() => setModal(!modal)}
    key={pokemon.id}
    className={`flex py-3 px-2 rounded-xl justify-between hover:cursor-pointer shadow bg-type-${pokemon?.types[0]?.type?.name}`}
  >
    {modal && <PokemonModal />}
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
      src={pokemon.sprites.other["official-artwork"].front_default}
    />
  </div>;
};

export default PokemonCard;
