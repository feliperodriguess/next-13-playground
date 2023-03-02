import { CharactersList } from "@/components";

export default function DashboardOld({ characters }: any) {
  return <CharactersList characters={characters} />;
}

export async function getServerSideProps() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const characters = (await response.json())?.results;

  return {
    props: {
      characters,
    },
  };
}

// export async function getStaticProps() {
//   const response = await fetch("https://rickandmortyapi.com/api/character");
//   const characters = (await response.json())?.results;

//   return {
//     props: {
//       characters,
//     },
//     revalidate: 60,
//   };
// }
