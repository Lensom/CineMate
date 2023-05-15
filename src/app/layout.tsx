
import Template from "@/components/Template/Template";
import { Providers } from "./Redux/provider";
import { RootStyleRegistry } from './rootStyleRegistry';

import { Montserrat } from "next/font/google";

import "../styles/index.scss";

export const metadata = {
  title: "CineMate",
  description: "CineMate is app for save you films",
};


const montserrat = Montserrat({ subsets: ["cyrillic"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ua">
      <body className={montserrat.className}>
        <Providers>
          <Template>
            <RootStyleRegistry>{children}</RootStyleRegistry>
          </Template>
        </Providers>
      </body>
    </html>
  );
}
