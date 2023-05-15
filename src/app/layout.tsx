
import Template from "@/components/Template/Template";
import { Providers } from "./Redux/provider";
import { RootStyleRegistry } from './rootStyleRegistry';

import "../styles/index.scss";

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
            <RootStyleRegistry>{children}</RootStyleRegistry>
          </Template>
        </Providers>
      </body>
    </html>
  );
}
