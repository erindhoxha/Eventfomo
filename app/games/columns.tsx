'use client';

import { Button } from '@/components/ui/button';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import { Paragraph } from '../components/Typography/Typography';

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
    header: ({ column }) => {
      return (
        <Button
          style={{
            paddingLeft: 0,
          }}
          variant="none"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Event Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
];
