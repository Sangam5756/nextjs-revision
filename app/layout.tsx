import type { Metadata } from "next";
import "./globals.css";
import Providers from "./provider";

export const metadata: Metadata = {
  title: "NextJs Practice",
  description: "Nextjs Revision concepts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
