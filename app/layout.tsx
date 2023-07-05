import { NavBar } from "@/components";
import "./globals.css";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Lista de países",
  description: "Lista de países em Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={nunitoSans.className}>
        <main className="bg-gray-100 min-h-screen">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
