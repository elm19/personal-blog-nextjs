import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import CssBaseline from '@mui/material/CssBaseline';
import { HeaderNavBar } from "@/components/HeaderNavBar";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});


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
      <body className={roboto.variable}>
          <AppRouterCacheProvider>
           <ThemeProvider theme={theme}>
              <CssBaseline />
              < HeaderNavBar />
              {children}
           </ThemeProvider>
          </AppRouterCacheProvider>
       </body>
    </html>
  );
}


