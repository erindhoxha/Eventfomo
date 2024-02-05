import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div>
      <div className="mb-2">
        <h1>Subscriptions</h1>
        <p className=" text-sm text-muted-foreground">
          Subscribe to your favourite games and get notified about upcoming
          events.
        </p>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <Label
            htmlFor="chess"
            className="flex items-center w-full cursor-pointer py-4"
          >
            <Image
              src={`/img/icons/chess.png`}
              width={24}
              height={24}
              alt="Chess"
            />
            <p className="text-sm ml-1">Chess</p>
          </Label>
          <Switch id="chess" />
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <Label
            htmlFor="dota2"
            className="flex items-center w-full cursor-pointer py-4"
          >
            <Image
              src={`/img/icons/dota.png`}
              width={24}
              height={24}
              alt="dota2"
            />
            <p className="text-sm ml-1">Dota 2</p>
          </Label>
          <Switch id="dota2" />
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <Label
            htmlFor="lol"
            className="flex items-center w-full cursor-pointer py-4"
          >
            <Image
              src={`/img/icons/lol.png`}
              width={24}
              height={24}
              alt="lol"
            />
            <p className="text-sm ml-1">League of Legends</p>
          </Label>
          <Switch id="lol" />
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <Label
            htmlFor="csgo"
            className="flex items-center w-full cursor-pointer py-4"
          >
            <Image
              src={`/img/icons/csgo.png`}
              width={24}
              height={24}
              alt="csgo"
            />
            <p className="text-sm ml-1">CS:GO</p>
          </Label>
          <Switch id="csgo" />
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <Label
            htmlFor="wow"
            className="flex items-center w-full cursor-pointer py-4"
          >
            <Image
              src={`/img/icons/wow.png`}
              width={24}
              height={24}
              alt="wow"
            />
            <p className="text-sm ml-1">World of Warcraft</p>
          </Label>
          <Switch id="wow" />
        </div>
        <Separator />
      </div>
    </div>
  );
};

export default Page;
