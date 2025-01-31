import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/shared/lib/classnames";
import { ThemeProvider } from "./providers/theme-provider";
import { Toaster } from "@/shared/ui/toaster";
import { ReactQueryProvider } from "./providers/react-query-provider";
import { NextTopLoader } from "../widgets/next-top-loader";
import { Navbar } from "@/widgets/navbar";
import { metadataConfig } from "@/constants/metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = metadataConfig.mainLayout;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ReactQueryProvider>
            <NextTopLoader />
            <Navbar />
            <div className="max-w-5xl mx-auto px-5 py-5">{children}</div>
            <Toaster />
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
