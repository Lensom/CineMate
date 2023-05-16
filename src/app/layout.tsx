
import Template from "@/components/Template/Template";
import { Providers } from "./Redux/provider";

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
      <body className={montserrat.className} suppressHydrationWarning={true} >
        <Providers>
          <Template>
            {children}
          </Template>
        </Providers>
      </body>
    </html>
  );
}
