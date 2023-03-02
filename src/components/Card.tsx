import Image from "next/image";
import Link from "next/link";

export function Card({
  character: { id, image, name, species, status },
}: CardProps) {
  return (
    <Link href={`/character/${id}`}>
      <div className="border-tertiary border-[2px] max-w-[300px] rounded-lg w-fit">
        <Image
          alt={name}
          className="rounded-t-lg"
          height={450}
          priority
          src={image}
          width={300}
        />
        <div className="flex flex-col gap-4  justify-items-center p-4">
          <div className="flex gap-4 justify-between">
            <h2 className="font-medium  text-white text-lg">Name:</h2>
            <p className="font-light text-white text-lg truncate">{name}</p>
          </div>
          <div className="flex justify-between">
            <h2 className="font-medium  text-white text-lg">Status:</h2>
            <p className="font-light text-white text-lg">{status}</p>
          </div>
          <div className="flex justify-between">
            <h2 className="font-medium text-white text-lg">Species:</h2>
            <p className="font-light text-white text-lg">{species}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  episode: string[];
  location: {
    name: string;
  };
  origin: {
    name: string;
  };
}

interface CardProps {
  character: Character;
}
