import MiniTable from '@/app/components/MiniTable/MiniTable';
import { H3, SmallMutedText } from '@/app/components/Typography/Typography';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
 title: 'Chess games',
 description: 'Sync your calendar with your favourite chess games.',
};

export default async function ChessPage() {
 async function getData() {
  return [
   {
    id: '1234',
    name: 'The international 2018',
    game: 'chess',
    description: 'EG vs LGD, best of 3',
    eventDate: '10/07/2021',
   },
   {
    id: '1234',
    name: 'WoW Arena World Championship',
    game: 'chess',
    description: 'Method vs Cloud9, best of 5',
    eventDate: '10/07/2021',
   },
   {
    id: '1234',
    name: 'League of Legends Poland Championship',
    game: 'chess',
    description: 'Liquid vs EG, best of 3',
    eventDate: '10/07/2021',
   },
  ];
 }

 const items = await getData();

 return (
  <>
   <div className="mt-12 sm:mt-24 w-full">
    <div className="flex flex-col">
     <H3>Chess events and tournaments</H3>
     <div className="flex mt-4 max-w-sm">
      <Button variant="default">Subscribe</Button>
      <SmallMutedText marginLeft="2" marginTop="0">
       We will send you emails about ongoing and upcoming Chess events.
      </SmallMutedText>
     </div>
    </div>

    <div className="mt-4">
     <MiniTable title="Popular ongoing events" items={items} />
    </div>
    {/* Make this pop */}
    <div className="grid gap-4 md:grid-cols-2 mt-4">
     <MiniTable title="Recent Tournaments" items={items} />
     <MiniTable title="Upcoming Tournaments" items={items} />
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
