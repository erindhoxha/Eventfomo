import Header from './components/Header/Header';
import SubscribeForm from './components/SubscribeForm/SubscribeForm';
import {
 H1,
 H3,
 Paragraph,
 SmallMutedText,
} from './components/Typography/Typography';
import Card from './components/Card/Card';
import { Games, columns } from './games/columns';
import MiniTable from './components/MiniTable/MiniTable';
import { Box } from './components/Box/Box';
import { createClient } from '@supabase/supabase-js';
import supabase from '@/supabase';

async function getOngoingEvents() {
 return [
  {
   id: '1234',
   name: 'The international 2018',
   game: 'dota',
   description: 'EG vs LGD, best of 3',
   eventDate: '10/07/2021',
  },
  {
   id: '1234',
   name: 'WoW Arena World Championship',
   game: 'wow',
   description: 'Method vs Cloud9, best of 5',
   eventDate: '10/07/2021',
  },
  {
   id: '1234',

   name: 'League of Legends Poland Championship',
   game: 'lol',
   description: 'Liquid vs EG, best of 3',
   eventDate: '10/07/2021',
  },
 ];
}

async function getData(): Promise<Games[]> {
 // Fetch data from your API here.
 return [
  {
   id: '728ed52f',
   name: 'The International 13',
   game: 'dota',
   prizePool: '$40,018,195',
   eventDate: '10/07/2024',
  },
  {
   id: '728ed52f',
   name: 'League of Legends Poland Championship',
   game: 'lol',
   prizePool: '$11,018,195',
   eventDate: '10/07/2024',
  },
  {
   id: '728ed52f',
   name: 'CS:GO Major',
   game: 'csgo',
   prizePool: '$1,018,195',
   eventDate: '15/03/2023',
  },
  {
   id: '728ed52f',
   name: 'The International',
   game: 'dota',
   prizePool: '$40,018,195',
   eventDate: '10/07/2021',
  },
  {
   id: '728ed52f',
   name: 'A tournament name',
   game: 'wow',
   prizePool: '$40,018,195',
   eventDate: '10/07/2021',
  },
  {
   id: '728ed52f',
   name: 'Test name',
   game: 'chess',
   prizePool: '$40,018,195',
   eventDate: '10/07/2021',
  },
  {
   id: '728ed52f',
   name: 'Magnus Carlsen vs Hikaru Nakamura',
   game: 'chess',
   prizePool: '$40,018,195',
   eventDate: '10/07/2021',
  },
  {
   id: '728ed52f',
   name: 'Another test chess name',
   game: 'chess',
   prizePool: '$40,018,195',
   eventDate: '10/07/2021',
  },
  {
   id: '728ed52f',
   name: 'A tournament name',
   game: 'wow',
   prizePool: '$40,018,195',
   eventDate: '10/07/2021',
  },
  {
   id: '728ed52f',
   name: 'The International',
   game: 'dota',
   prizePool: '$40,018,195',
   eventDate: '10/07/2021',
  },
 ];
}

export default async function Home() {
 // Create a single supabase client for interacting with your database

 let { data, error } = await supabase.from('all-upcoming-events').select('');

 console.log('Data', data);

 return (
  <main className="flex flex-col items-start p-6 lg:p-6 container">
   <Header />
   <div className="flex flex-col lg:flex-row mt-[90px] w-full">
    <div className="flex-col max-w-xs sm:max-w-lg lg:max-w-md text-sm flex">
     <H1>Your personal gaming calendar</H1>
     <Paragraph>
      The events you can't miss, the best content from your favourite games, in
      a daily email that you can sync on your calendar
     </Paragraph>
    </div>
    <div className="mt-8 lg:ml-12 flex flex-1 lg:justify-center w-full">
     <SubscribeForm />
    </div>
   </div>

   <div className="mt-12 sm:mt-24 w-full">
    <H3>How it works</H3>
    <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3 w-full mt-4">
     <Card
      description="1. Subscribe"
      subtext="Subscribe with your email address. Please note that we will send you emails 24 hours prior to a tournament, so you won't miss any game."
     />
     <Card
      description="2. Select"
      subtext="Select the games you want to follow or sync on your calendar. You can also choose all games, we will send you an email before a tournament happens."
     />
     <Card
      description="3. Sync"
      subtext="Enjoy everyday emails that you can sync on your calendar. You can sync with your Google calendar, Outlook and Apple calendar."
     />
    </div>

    <SmallMutedText marginTop="2">You can unsubscribe anytime.</SmallMutedText>
   </div>

   <div className="mt-12 sm:mt-24 w-full">
    <MiniTable title="Popular ongoing events" items={data} />
    {/* Make this pop */}
    <div className="grid gap-4 md:grid-cols-2 mt-4">
     <MiniTable title="Recent Tournaments" items={data} />
     <MiniTable title="Upcoming Tournaments" items={data} />
    </div>
    <div className="mt-12">
     <H3>Upcoming events</H3>
     <Box marginTop={4}>
      {/* <DataTable columns={columns} data={data} /> */}
     </Box>
    </div>
    <Box marginTop={12}>
     <H3>Tournaments by game</H3>
     <div className="grid gap-4 md:grid-cols-2 mt-4">
      <MiniTable
       title="Chess Tournaments"
       items={[
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
       ]}
      />
      <MiniTable
       title="League of Legends Tournaments"
       items={[
        {
         id: '1234',
         name: 'The international 2018',
         game: 'lol',
         description: 'EG vs LGD, best of 3',
         eventDate: '10/07/2021',
        },
        {
         id: '1234',
         name: 'WoW Arena World Championship',
         game: 'lol',
         description: 'Method vs Cloud9, best of 5',
         eventDate: '10/07/2021',
        },
        {
         id: '1234',

         name: 'League of Legends Poland Championship',
         game: 'lol',
         description: 'Liquid vs EG, best of 3',
         eventDate: '10/07/2021',
        },
       ]}
      />
      <MiniTable
       title="League of Legends Tournaments"
       items={[
        {
         id: '1234',
         name: 'The international 2018',
         game: 'dota',
         description: 'EG vs LGD, best of 3',
         eventDate: '10/07/2021',
        },
        {
         id: '1234',
         name: 'WoW Arena World Championship',
         game: 'dota',
         description: 'Method vs Cloud9, best of 5',
         eventDate: '10/07/2021',
        },
        {
         id: '1234',

         name: 'League of Legends Poland Championship',
         game: 'dota',
         description: 'Liquid vs EG, best of 3',
         eventDate: '10/07/2021',
        },
       ]}
      />
      <MiniTable
       title="League of Legends Tournaments"
       items={[
        {
         id: '1234',
         name: 'The international 2018',
         game: 'csgo',
         description: 'EG vs LGD, best of 3',
         eventDate: '10/07/2021',
        },
        {
         id: '1234',
         name: 'WoW Arena World Championship',
         game: 'csgo',
         description: 'Method vs Cloud9, best of 5',
         eventDate: '10/07/2021',
        },
        {
         id: '1234',

         name: 'League of Legends Poland Championship',
         game: 'csgo',
         description: 'Liquid vs EG, best of 3',
         eventDate: '10/07/2021',
        },
       ]}
      />
     </div>
    </Box>
   </div>
  </main>
 );
}
