import Header from '../components/Header/Header';

export default function GamesLayout({
 children, // will be a page or nested layout
}: {
 children: React.ReactNode;
}) {
 return (
  <main className="flex flex-col items-start p-6 lg:p-6 container">
   <Header />
   {children}
  </main>
 );
}
