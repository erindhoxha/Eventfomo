import Header from '@/app/components/Header/Header';
import MiniTable from '@/app/components/MiniTable/MiniTable';
import { H1, H2, H3, Paragraph } from '@/app/components/Typography/Typography';
import { Metadata } from 'next';
import { DataTable } from '../data-table';
import Card from '@/app/components/Card/Card';

export const metadata: Metadata = {
  title: 'Chess games',
  description: 'Sync your calendar with your favourite chess games.',
};

export default function ChessPage() {
  return (
    <>
      <div className="mt-12 sm:mt-24 w-full">
        <H3>Chess events and tournaments</H3>
        <div className="mt-4">
          <MiniTable title="Popular ongoing events" />
        </div>
        {/* Make this pop */}
        <div className="grid gap-4 md:grid-cols-2 mt-4">
          <MiniTable title="Recent Tournaments" />
          <MiniTable title="Upcoming Tournaments" />
        </div>
        {/* <div className="mt-12">
          <H3>Upcoming events</H3>
          <div className="mt-4">
            <DataTable columns={columns} data={data} />
          </div>
        </div> */}
      </div>
    </>
  );
}
