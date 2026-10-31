import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shri Swami Travels",
  description: "Domestic tours, pilgrimages, sightseeing, and vehicle rentals.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
