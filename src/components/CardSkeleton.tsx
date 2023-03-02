export function CardSkeleton() {
  return (
    <div className="border-tertiary border-[2px] h-[450px] rounded-lg w-[300px] ">
      <div className="animate-pulse flex flex-col">
        <div className="bg-slate-700 h-[300px] rounded-t-lg w-full" />
        <div className="flex flex-col gap-4 justify-center p-4">
          <div className="flex gap-4 justify-between">
            <div className="h-[25px] bg-slate-700 rounded-lg w-1/2" />
            <div className="h-[25px] bg-slate-700 rounded-lg w-1/2" />
          </div>

          <div className="flex gap-4 justify-between">
            <div className="h-[25px] bg-slate-700 rounded-lg w-1/2" />
            <div className="h-[25px] bg-slate-700 rounded-lg w-1/2" />
          </div>

          <div className="flex gap-4 justify-between">
            <div className="h-[25px] bg-slate-700 rounded-lg w-1/2" />
            <div className="h-[25px] bg-slate-700 rounded-lg w-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
}
