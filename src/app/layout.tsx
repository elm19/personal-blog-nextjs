import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Personal Blog",
  description: "A Next.js Practice Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
