"use client";

import { Button } from "@/components/ui/button";
import { Database } from "@/database.generated.types";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { format } from "date-fns";
import { Event } from "../types/global";

export type Games = {
  id: number;
  name?: string;
  game?: Database["public"]["Enums"]["Game"];
  prizePool?: string;
  date?: string;
  createdAt?: Date;
};

export const columns: ColumnDef<Games>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "starts_at",
    header: ({ column }) => {
      return (
        <Button
          style={{
            paddingLeft: 0,
          }}
          variant="none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Start date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: (c) => {
      const date = c.getValue() as string;
      return format(new Date(date || ""), "dd/MM/yyyy");
    },
  },
  {
    accessorKey: "ends_at",
    header: ({ column }) => {
      return (
        <Button
          style={{
            paddingLeft: 0,
          }}
          variant="none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          End date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: (c) => {
      const date = c.getValue() as string;
      return format(new Date(date || ""), "dd/MM/yyyy");
    },
  },
  {
    accessorKey: "social_links",
    header: "Links",
    cell: (c) => {
      const row = c.row.original as Event;
      const twitchUrl = row.twitch_url;
      const youtubeUrl = row.youtube_url;
      return (
        <div className="flex ml-auto items-center">
          {!youtubeUrl && !twitchUrl ? (
            <p className="text-muted-foreground">N/A</p>
          ) : null}
          {youtubeUrl ? (
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="mr-2"
            >
              <img
                width="24"
                className="sm:min-w-[24] sm:min-h-[24] min-w-[24px] min-h-[24px]"
                height="24"
                src={`/img/icons/youtube.png`}
                alt={`Youtube link`}
              />
            </a>
          ) : null}
          {twitchUrl ? (
            <a
              href={twitchUrl}
              target="_blank"
              rel="noreferrer"
              className="mr-2"
            >
              <img
                width="24"
                className="sm:min-w-[24] sm:min-h-[24] min-w-[24px] min-h-[24px]"
                height="24"
                src={`/img/icons/twitch.png`}
                alt={`Twitch link`}
              />
            </a>
          ) : null}
        </div>
      );
    },
  },
];
