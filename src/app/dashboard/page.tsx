import { Suspense } from "react";

import { CharacterCount, CharactersList, Spinner } from "@/components";

export default async function DashboardPage() {
  const response = await fetch("https://rickandmortyapi.com/api/character", {
    cache: "force-cache",
    next: {
      revalidate: 60 * 10,
    },
  });
  const data = await response.json();

  return (
    <div>
      <Suspense fallback={<Spinner />}>
        {/* @ts-ignore */}
        <CharacterCount />
      </Suspense>
      <CharactersList characters={data?.results} />;
    </div>
  );
}

export const metadata = {
  title: "Dashboard",
  description: "Next 13 Playground - Dashboard",
  openGraph: {
    title: "Dashboard",
    description: "Next 13 Playground - Dashboard",
    url: "https://next-13-playground-three-pi.vercel.app/dashboard",
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
    title: "Dashboard",
    description: "Next 13 Playground - Dashboard",
    images: ["https://rickandmortyapi.com/api/character/avatar/1.jpeg"],
    card: "summary_large_image",
  },
};
