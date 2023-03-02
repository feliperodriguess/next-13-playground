import { Card, Character } from "./Card";

export function CharactersList({ characters }: CharactersListProps) {
  return (
    <div className="grid grid-cols-3 gap-6 max-w-5xl w-full">
      {characters?.map((character: any) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
}

interface CharactersListProps {
  characters: Character[];
}
