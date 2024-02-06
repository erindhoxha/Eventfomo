"use client";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const ButtonWithRouter = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignOut = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    router.push("/");
  };

  return (
    <form onSubmit={handleSignOut} method="post" action="/auth/signout">
      <Button type="submit" variant="default">
        {loading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}{" "}
        Sign out
      </Button>
    </form>
  );
};

export default ButtonWithRouter;
