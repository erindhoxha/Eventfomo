import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/context/theme-provider';
import { NavBar } from './components/NavigationMenu/NavigationMenu';
import Header from './components/Header/Header';
import Link from 'next/link';

export const metadata: Metadata = {
 title: 'Eventfomo',
 description: 'Never miss out on any gaming events anymore.',
};

export default function RootLayout(props: any) {
 return (
  <html lang="en">
   <body className="bg-gradient-to-r">
    <ThemeProvider
     attribute="class"
     defaultTheme="system"
     enableSystem
     disableTransitionOnChange
    >
     {props.directoryListing}
     {props.children}
    </ThemeProvider>
   </body>
  </html>
 );
}
