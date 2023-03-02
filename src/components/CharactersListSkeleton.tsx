import { CardSkeleton } from "./CardSkeleton";

export function CharactersListSkeleton() {
  return (
    <div className="grid grid-cols-3 gap-6 max-w-5xl w-full">
      {Array.from(Array(6).keys())?.map((item) => (
        <CardSkeleton key={item} />
      ))}
    </div>
  );
}
