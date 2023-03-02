import { CharacterDetails } from "@/components";

export default async function CharacterPage({
  params: { characterId },
}: CharacterPageProps) {
  const response = await fetch(
    "https://rickandmortyapi.com/api/character/" + characterId
  );
  const data = await response.json();

  return <CharacterDetails character={data} />;
}

export async function generateStaticParams() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();

  return data.results.map((character: any) => ({
    characterId: character.id.toString(),
  }));
}

export async function generateMetadata({
  params: { characterId },
}: CharacterPageProps) {
  const response = await fetch(
    "https://rickandmortyapi.com/api/character/" + characterId
  );
  const data = await response.json();
  return {
    title: data.name,
    description: data.status,
    openGraph: {
      title: data.name,
      description: data.status,
      url:
        "https://next-13-playground-three-pi.vercel.app/character/" + data.id,
      siteName: "Next.js",
      images: [
        {
          url: data.image,
          width: 300,
          height: 300,
        },
      ],
      locale: "en-US",
      type: "website",
    },
    twitter: {
      title: data.name,
      description: data.status,
      images: [data.image],
      card: "summary_large_image",
    },
  };
}

interface CharacterPageProps {
  params: {
    characterId: string;
  };
}
