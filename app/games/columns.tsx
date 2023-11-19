'use client';

import { Button } from '@/components/ui/button';
import { Database } from '@/database.generated.types';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Games = {
 id: number;
 name?: string;
 game?: Database['public']['Enums']['Game'];
 prizePool?: string;
 date?: string;
 createdAt?: Date;
};

export const columns: ColumnDef<Games>[] = [
 {
  accessorKey: 'name',
  header: 'Name',
 },
 {
  accessorKey: 'prizePool',
  header: ({ column }) => {
   return (
    <Button
     style={{
      paddingLeft: 0,
     }}
     variant="none"
     onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
    >
     Prize Pool
     <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
   );
  },
 },
 {
  accessorKey: 'date',
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
