import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Staffly — People operations, made simple",
  description: "A calm, focused workspace for modern teams.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
