"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form as UIForm,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Icons } from "@/components/ui/icons";
import useSignInWithEmail from "@/app/hooks/useSignInWithEmail";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SwitchBox from "../SwitchBox/SwitchBox";
import { Separator } from "@/components/ui/separator";
import { Box } from "../Box/Box";
import Link from "next/link";
import LinkComponent from "../Link/Link";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Email address must be at least 2 characters.",
  }),
});

const Form = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const [submitted, setSubmitted] = useState(false);
  const [open, setOpen] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await useSignInWithEmail(values.email).then((data) => {
      data.error
        ? form.setError("email", {
            message:
              "Sorry, there's something wrong on our end. Please try again later.",
          })
        : (setSubmitted(true), setOpen(true));
    });
  }

  const subscriptionTypes = [
    {
      id: "chess",
      name: "Chess",
    },
    {
      id: "dota",
      name: "Dota 2",
    },
    {
      id: "lol",
      name: "League of Legends",
    },
    {
      id: "csgo",
      name: "CS:GO 2",
    },
    {
      id: "wow",
      name: "World of Warcraft",
    },
  ];

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>You are subscribed!</DialogTitle>
            <DialogDescription>
              Do you want to choose which games you want to receive updates?
              {subscriptionTypes.map((item) => (
                <Box marginTop={2}>
                  <SwitchBox
                    key={item.id}
                    gameId={item.id}
                    gameName={item.name}
                    checked={true}
                  />
                  {item.id !==
                    subscriptionTypes[subscriptionTypes.length - 1].id && (
                    <Separator />
                  )}
                </Box>
              ))}
              <Box marginTop={2}>
                <Button variant="default" className="w-full">
                  Save
                </Button>
              </Box>
              <Box marginTop={2}>
                You can also change your preferences later in your{" "}
                <Link className="text-primary" href="/login">
                  profile.
                </Link>
              </Box>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <UIForm {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full lg:w-max"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div>
                    <p className="text-sm mb-1.5">Join 100+ users</p>
                    <div className="flex flex-col sm:flex-row max-w-sm space-y-2 sm:space-y-0">
                      <Input
                        className="lg:min-w-[250px]"
                        placeholder="Your best email"
                        {...field}
                      />
                      <Button
                        type="submit"
                        className="lg:ml-1"
                        disabled={form.formState.isSubmitting}
                      >
                        {form.formState.isSubmitting && (
                          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Subscribe
                      </Button>
                    </div>
                    {submitted && (
                      <div className="text-xs mt-2">
                        Please check your mailbox.
                      </div>
                    )}
                  </div>
                </FormControl>
                <FormMessage className="text-destructive" />
                <FormDescription className="max-w-[230px]">
                  We will send you events on this email 24 hours before
                  tournaments start.
                </FormDescription>
              </FormItem>
            )}
          />
        </form>
      </UIForm>
    </>
  );
};

export default Form;
