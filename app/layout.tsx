import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/context/theme-provider";
import Footer from "./components/Footer/Footer";

export const metadata: Metadata = {
  title: "Eventfomo - Gaming Events Tracker",
  description: "Never miss out on any gaming events anymore.",
};

export default async function RootLayout(props: any) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gradient-to-r bg-hero-pattern h-[100vh] max-h-[100vh]">
        <div className="min-h-full flex flex-col">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {props.directoryListing}
            {props.children}
          </ThemeProvider>
          <Footer />
        </div>
      </body>
    </html>
  );
}
