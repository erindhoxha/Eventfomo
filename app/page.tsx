import Header from './components/Header/Header';
import SubscribeForm from './components/SubscribeForm/SubscribeForm';
import {
 H1,
 H3,
 Paragraph,
 SmallMutedText,
} from './components/Typography/Typography';
import Card from './components/Card/Card';
import MiniTable from './components/MiniTable/MiniTable';
import { Box } from './components/Box/Box';
import useAllUpcomingEvents from './hooks/useAllUpcomingEvents';
import useAllOngoingEvents from './hooks/useAllOngoingEvents';
import useAllPreviousEvents from './hooks/useAllPreviousEvents';
import { DataTable } from './games/data-table';
import { columns } from './games/columns';

export default async function Home() {
 const upcomingEvents = await useAllUpcomingEvents();
 const ongoingEvents = await useAllOngoingEvents();
 const previousEvents = await useAllPreviousEvents();

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
    <MiniTable title="Popular ongoing events" items={ongoingEvents.data} />
    {/* Make this pop */}
    <div className="grid gap-4 md:grid-cols-2 mt-4">
     <MiniTable title="Recent Tournaments" items={previousEvents.data} />
     <MiniTable title="Upcoming Tournaments" items={upcomingEvents.data} />
    </div>
    <div className="mt-12">
     <H3>Upcoming events</H3>
     {previousEvents.data && (
      <Box marginTop={4}>
       <DataTable columns={columns} data={previousEvents.data} />
      </Box>
     )}
    </div>
    <Box marginTop={12}>
     <H3>Tournaments by game</H3>
     <div className="grid gap-4 md:grid-cols-2 mt-4">
      <MiniTable title="Chess Tournaments" items={upcomingEvents.data} />
      <MiniTable
       title="League of Legends Tournaments"
       items={upcomingEvents.data}
      />
      <MiniTable
       title="League of Legends Tournaments"
       items={upcomingEvents.data}
      />
      <MiniTable
       title="League of Legends Tournaments"
       items={upcomingEvents.data}
      />
     </div>
    </Box>
   </div>
  </main>
 );
}
