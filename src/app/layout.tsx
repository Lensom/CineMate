import "./globals.css";
import { Inter } from "next/font/google";

import Template from "../components/Template/Template";

import { Providers } from "./Redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CineMate",
  description: "CineMate is app for save you films",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ua">
      <body className={inter.className}>
        <Template>
          <Providers>{children}</Providers>
        </Template>
      </body>
    </html>
  );
}
 