export function CharacterDetailsSkeleton() {
  return (
    <div className="animate-pulse flex flex-col gap-6 items-center justify-center h-[80vh] w-full">
      <div className="bg-slate-700 rounded-lg h-8 w-1/4" />
      <div className="bg-slate-700 rounded-lg h-[350px] w-[300px]" />
      <div className="bg-slate-700 rounded-lg h-6 w-1/4" />
      <div className="bg-slate-700 rounded-lg h-6 w-1/4" />
      <div className="bg-slate-700 rounded-lg h-6 w-1/4" />
    </div>
  );
}
