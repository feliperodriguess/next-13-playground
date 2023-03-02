export async function CharacterCount() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();

  return (
    <div className="border-tertiary border-[2px] font-bold text-base text-white mx-auto mb-10 rounded-2xl py-3 px-5 uppercase w-fit">
      {data?.info?.count} characters
    </div>
  );
}
