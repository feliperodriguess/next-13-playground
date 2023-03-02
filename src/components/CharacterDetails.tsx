import Image from "next/image";

import { Character } from "./Card";

export function CharacterDetails({ character }: CharacterDetailsProps) {
  return (
    <div className="flex flex-col gap-6 items-center justify-center h-[80vh] w-full">
      <h1 className="font-bold text-white text-2xl uppercase">
        {character.name}
      </h1>
      <Image
        src={character.image}
        alt={character.name}
        className="rounded-lg"
        height={450}
        width={300}
      />
      <p className="font-light text-white text-lg ">
        Appeared on {character.episode.length} episodes
      </p>
      <p className="font-light text-white text-lg ">
        Origin: {character.origin.name}
      </p>
      <p className="font-light text-white text-lg ">
        Location: {character.location.name}
      </p>
    </div>
  );
}

export interface CharacterDetailsProps {
  character: Character;
}
