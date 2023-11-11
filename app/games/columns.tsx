'use client';

import { ColumnDef } from '@tanstack/react-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Games = {
  id: string;
  name?: string;
  game?: string;
  prizePool?: string;
  eventDate?: string;
};

export const columns: ColumnDef<Games>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'prizePool',
    header: 'Prize Pool',
  },
  {
    accessorKey: 'eventDate',
    header: 'Event Date',
  },
];
