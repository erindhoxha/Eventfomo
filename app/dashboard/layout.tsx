import Header from "../components/Header/Header";
import getSession from "../hooks/getSession";
import { Separator } from "@/components/ui/separator";
import { SidebarNav } from "../components/SidebarNav/SidebarNav";
import { Metadata } from "next";
import ButtonWithRouter from "../components/ButtonWithRouter/ButtonWithRouter";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Advanced form example using react-hook-form and Zod.",
};

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/dashboard",
  },
  {
    title: "Subscriptions",
    href: "/dashboard/subscriptions",
  },
];

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  const user = session?.user;

  return (
    <main className="flex flex-col items-start p-6 lg:p-6 container">
      <Header user={user} />
      <div className="space-y-6 mt-12 sm:mt-24 w-full">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set event preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </main>
  );
}
