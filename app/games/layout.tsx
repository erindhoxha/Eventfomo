import Header from "../components/Header/Header";
import getSession from "../hooks/getSession";

export default async function GamesLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  const user = session?.user;

  return (
    <main className="flex flex-col items-start p-6 lg:p-6 container">
      <Header user={user} />
      {children}
    </main>
  );
}
