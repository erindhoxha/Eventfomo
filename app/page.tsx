import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from './components/Header/Header';
import SubscribeForm from './components/SubscribeForm/SubscribeForm';
import { H1, H2, H3, H4, Paragraph } from './components/Typography/Typography';
import Card from './components/Card/Card';
import { Payment, columns } from './games/columns';
import { DataTable } from './games/data-table';

async function getData(): Promise<Payment[]> {
 // Fetch data from your API here.
 return [
  {
   id: '728ed52f',
   amount: 100,
   status: '2023 World Championship [Worlds 2023]',
   email: '24 Oct, 2024 21:00',
  },
 ];
}

export default function Home() {
 const data = getData();
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

    <p className="text-sm text-muted-foreground mt-2">
     You can unsubscribe anytime.
    </p>
   </div>

   <div className="mt-12 sm:mt-24 w-full">
    {/* Make this pop */}
    <H3>Latest games</H3>
    <div className="mt-4">
     <DataTable
      columns={columns}
      data={[
       {
        id: '728ed52f',
        amount: '$400,000',
        status: '2023 World Championship [Worlds 2023]',
        email: '24 Oct, 2024 21:00',
       },
       {
        id: '728ed52f',
        amount: '$100,000',
        status: '2023 Dota TI Championship',
        email: '24 Oct, 2024 21:00',
       },
      ]}
     />
    </div>
   </div>
  </main>
 );
}
