import Header from "./components/Header/Header";
import SubscribeForm from "./components/SubscribeForm/SubscribeForm";
import {
  H3,
  Paragraph,
  SmallMutedText,
} from "./components/Typography/Typography";
import Card from "./components/Card/Card";
import MiniTable from "./components/MiniTable/MiniTable";
import { Box } from "./components/Box/Box";
import useEvents from "./hooks/useEvents";
import { DataTable } from "./games/data-table";
import { columns } from "./games/columns";
import getSession from "./hooks/getSession";
import Animated from "./components/AnimatedHeader/AnimatedHeader";

export default async function Home() {
  const allEvents = await useEvents();

  const eventsHappenedBefore = allEvents.data?.filter((event) => {
    const now = new Date();
    const endsAt = event.ends_at ? new Date(event.ends_at) : undefined;
    return endsAt && endsAt < now;
  });

  const eventsHappeningNow = allEvents.data?.filter((event) => {
    const now = new Date();
    const startsAt = new Date(event.starts_at);
    const endsAt = event.ends_at ? new Date(event.ends_at) : undefined;

    return endsAt && startsAt <= now && endsAt >= now;
  });

  const eventsHappeningSoon = allEvents.data?.filter((event) => {
    const now = new Date();
    const startsAt = new Date(event.starts_at);
    const endsAt = event.ends_at ? new Date(event.ends_at) : undefined;

    return endsAt && startsAt > now && endsAt > now;
  });

  const dotaEvents = await useEvents({
    gameId: "dota",
    limit: 5,
  });

  const csgoEvents = await useEvents({
    gameId: "csgo",
    limit: 5,
  });

  const chessEvents = await useEvents({
    gameId: "chess",
    limit: 5,
  });

  const lolEvents = await useEvents({
    gameId: "lol",
    limit: 5,
  });

  const session = await getSession();
  const user = session?.user;

  return (
    <main className="flex flex-col items-start p-6 lg:p-6 container">
      <Header user={user} />
      <Box className="flex flex-col lg:flex-row mt-[90px] w-full">
        <Box className="flex-col max-w-xs sm:max-w-lg lg:max-w-md text-sm flex">
          <Animated />
          <Paragraph>
            The events you can't miss, the best content from your favourite
            games, in a daily email that you can sync on your calendar
          </Paragraph>
        </Box>
        <Box
          marginTop={8}
          className="lg:ml-12 flex flex-1 lg:justify-center w-full"
        >
          <SubscribeForm />
        </Box>
      </Box>
      <div className="mt-12 sm:mt-24 w-full">
        <H3>How it works</H3>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3 w-full mt-4">
          <Card
            title="1. Subscribe"
            description="Subscribe with your email address. Please note that we will send you emails 24 hours prior to a tournament, so you won't miss any game."
          />
          <Card
            title="2. Select"
            description="Select the games you want to follow or sync on your calendar. You can also choose all games, we will send you an email before a tournament happens."
          />
          <Card
            title="3. Sync"
            description="Enjoy everyday emails that you can sync on your calendar. You can sync with your Google calendar, Outlook and Apple calendar."
          />
        </div>
        <SmallMutedText marginTop="2">
          You can unsubscribe anytime.
        </SmallMutedText>
      </div>
      <Box marginTop={12} className="sm:mt-24 w-full">
        <H3>All events</H3>
        <Box marginTop={4}>
          <MiniTable
            title="Events happening right now"
            items={eventsHappeningNow}
          />
        </Box>
        <div className="grid gap-4 md:grid-cols-2 mt-4">
          <MiniTable title="Recent Tournaments" items={eventsHappenedBefore} />
          <MiniTable title="Upcoming Tournaments" items={eventsHappeningSoon} />
        </div>
        <Box marginTop={12}>
          <H3>Upcoming events</H3>
          {allEvents.data && (
            <Box marginTop={4}>
              <DataTable columns={columns} data={allEvents.data} />
            </Box>
          )}
        </Box>
        <Box marginTop={12}>
          <H3>Tournaments by game</H3>
          <Box marginTop={4} className="grid gap-4 md:grid-cols-2">
            <MiniTable title="Chess Tournaments" items={chessEvents.data} />
            <MiniTable title="Dota 2 Tournaments" items={dotaEvents.data} />
            <MiniTable title="CS:GO 2 Tournaments" items={csgoEvents.data} />
            <MiniTable
              title="League of Legends Tournaments"
              items={lolEvents.data}
            />
          </Box>
        </Box>
      </Box>
    </main>
  );
}
