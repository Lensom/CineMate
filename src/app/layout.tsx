import "../styles/index.scss";


import Template from "../components/Template/Template";

import { Providers } from "./Redux/provider";


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
      <body>
        <Providers>
          <Template>
            {children}
          </Template>
        </Providers>
      </body>
    </html>
  );
}
