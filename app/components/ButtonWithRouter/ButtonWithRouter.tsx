"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

const ButtonWithRouter = () => {
  const router = useRouter();

  const handleSignOut = async (e: FormEvent<HTMLFormElement>) => {
    router.push("/");
  };

  return (
    <form onSubmit={handleSignOut} method="post" action="/auth/signout">
      <Button type="submit" variant="default">
        Sign out
      </Button>
    </form>
  );
};

export default ButtonWithRouter;
