import { EpisodesList } from "@/components";

export default async function EpisodesPage() {
  const response = await fetch("https://rickandmortyapi.com/api/episode", {
    cache: "no-store",
  });
  const data = await response.json();

  return <EpisodesList episodes={data?.results} />;
}

export const metadata = {
  title: "Episodes",
  description: "Next 13 Playground - Episodes",
  openGraph: {
    title: "Episodes",
    description: "Next 13 Playground - Episodes",
    url: "https://next-13-playground-three-pi.vercel.app/episodes",
    siteName: "Next.js",
    images: [
      {
        url: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        width: 300,
        height: 300,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Episodes",
    description: "Next 13 Playground - Episodes",
    images: ["https://rickandmortyapi.com/api/character/avatar/1.jpeg"],
    card: "summary_large_image",
  },
};
