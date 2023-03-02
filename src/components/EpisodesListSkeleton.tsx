export function EpisodesListSkeleton() {
  return (
    <ul className="flex flex-col justify-center gap-8 max-w-4xl w-full">
      {Array.from(Array(10).keys())?.map((item) => (
        <li
          className="animate-pulse border-tertiary border-[2px] flex justify-between p-6 rounded-lg w-full"
          key={item}
        >
          <div className="bg-slate-700 h-7 rounded-lg w-1/3" />
          <div className="bg-slate-700 h-7 rounded-lg w-1/3" />
        </li>
      ))}
    </ul>
  );
}
