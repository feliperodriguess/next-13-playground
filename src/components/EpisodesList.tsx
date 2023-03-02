import { Input } from "./Input";

export function EpisodesList({ episodes }: EpisodesListProps) {
  return (
    <ul className="flex flex-col justify-center gap-8 max-w-4xl w-full">
      <Input />

      {episodes.map((episode: any) => (
        <li
          className="border-tertiary border-[2px] flex justify-between p-6 rounded-lg w-full"
          key={episode.id}
        >
          <h2 className="font-medium text-xl text-white">
            {episode.name}
            <span className="font-light">{` (${episode.episode})`}</span>
          </h2>
          <p className="font-light text-lg text-white">{episode.air_date}</p>
        </li>
      ))}
    </ul>
  );
}

interface EpisodesListProps {
  episodes: Episode[];
}

interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}
