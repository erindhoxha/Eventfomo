import { Metadata } from "next";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "../components/UserAuthForm/UserAuthForm";
import LinkComponent from "../components/Link/Link";
import { Box } from "../components/Box/Box";
import getSession from "../hooks/getSession";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default async function AuthenticationPage() {
  const session = await getSession();
  const user = session?.user;

  if (user) {
    redirect("/dashboard");
  }

  return (
    <>
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 top-4 md:right-8 md:top-8",
        )}
      >
        Go back
      </Link>
      <Box className="py-24 px-6 lg:p-0 h-[100vh] flex">
        <Box className="dark:bg-gray-800 hidden h-full max-w-lg flex-col bg-muted p-10 lg:flex">
          <Box className="z-20 flex items-center">
            <LinkComponent size="none" variant="none" href="/">
              <p className="text-lg font-bold tracking-normal mr-4 border-b border-b-green-500">
                Eventfomo
              </p>
            </LinkComponent>
          </Box>
          <Box className="z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                This subscription is a life saver. It has reminded me to find my
                favourite games and to not forget to watch them. I love it!
              </p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </Box>
        </Box>
        <Box className="lg:p-8 flex-1 flex md:items-center">
          <Box className="mx-auto flex w-full flex-col md:justify-center space-y-6 sm:w-[350px]">
            <Box className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">Sign in</h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to sign in to your account
              </p>
            </Box>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              We will send you a magic link to your email.
              <br />
              Can't see it? Please check your spam folder.
            </p>
          </Box>
        </Box>
      </Box>
    </>
  );
}
