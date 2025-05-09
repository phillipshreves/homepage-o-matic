import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Homepage-o-matic",
  description: "Homepage-o-matic is a tool to easily configure your homepage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
