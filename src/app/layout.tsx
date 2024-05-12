import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import GlobalShell from "~/GlobalShell";

export const metadata = {
  title: "Trevor Tress",
  description: "Portfolio for Trevor Tress",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <GlobalShell>{children}</GlobalShell>
      </body>
    </html>
  );
}
