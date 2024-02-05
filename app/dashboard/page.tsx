import { Separator } from "@/components/ui/separator";
import { redirect } from "next/navigation";
import getSession from "../hooks/getSession";

export default async function DashboardPage() {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/");
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          This is how others will see you on the site.
        </p>
      </div>
      <Separator />
    </div>
  );
}
