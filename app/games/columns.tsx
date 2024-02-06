"use client";

import { Button } from "@/components/ui/button";
import { Database } from "@/database.generated.types";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { format } from "date-fns";

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
    cell: (asd) => {
      const date = asd.getValue() as string;
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
    cell: (asd) => {
      const date = asd.getValue() as string;
      return format(new Date(date || ""), "dd/MM/yyyy");
    },
  },
];
