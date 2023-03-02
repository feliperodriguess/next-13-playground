import Link from "next/link";
import { Poppins } from "next/font/google";

import "@/styles/global.css";

const poppins = Poppins({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const linkClassName =
    "text-xl text-medium text-white underline underline-offset-8";

  return (
    <html className={poppins.className} lang="en">
      <body>
        <header className="bg-secondary flex items-center justify-center gap-6 p-4 w-full">
          <Link className={linkClassName} href="/dashboard">
            Dashboard
          </Link>
          <Link className={linkClassName} href="/episodes">
            Episodes
          </Link>
        </header>
        <main className="bg-primary flex items-center justify-center py-16 w-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
