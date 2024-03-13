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
import useCurrentEvents from "./hooks/useCurrentEvents";
import useFutureEvents from "./hooks/useFutureEvents";
import usePreviousEvents from "./hooks/usePreviousEvents";

export const revalidate = 3600;

export default async function Home() {
  const previousEvents = await usePreviousEvents({
    limit: 7,
  });

  const futureEvents = await useFutureEvents({
    limit: 7,
  });

  const currentEvents = await useCurrentEvents({
    limit: 7,
  });

  const dotaEvents = await useEvents({
    gameId: "dota",
    limit: 7,
  });

  const csgoEvents = await useEvents({
    gameId: "csgo",
    limit: 7,
  });

  const chessEvents = await useEvents({
    gameId: "chess",
    limit: 7,
  });

  const lolEvents = await useEvents({
    gameId: "lol",
    limit: 7,
  });

  const wowEvents = await useEvents({
    gameId: "wow",
    limit: 7,
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
            Daily newsletter that notifies you about upcoming events and
            tournaments.
          </Paragraph>
        </Box>
        <Box
          marginTop={8}
          className="lg:ml-12 flex flex-1 lg:justify-center w-full"
        >
          {!user ? <SubscribeForm /> : null}
        </Box>
      </Box>
      <div className="mt-12 sm:mt-24 w-full">
        <H3>How it works</H3>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3 w-full mt-4">
          <Card
            title="1. Subscribe"
            description="We will send you emails 24 hours prior to a tournament, so you won't miss any game."
          />
          <Card
            title="2. Select"
            description="Select the games you want to follow or sync on your calendar."
          />
          <Card
            title="3. Sync"
            description="You can sync with your Google calendar, Outlook and Apple calendar."
          />
        </div>
      </div>
      <Box marginTop={12} className="sm:mt-24 w-full">
        <H3>Events and tournaments</H3>
        <Box marginTop={4}>
          <MiniTable
            title="Happening now"
            items={currentEvents.data}
            href="/happening-now"
          />
        </Box>
        <div className="grid gap-4 md:grid-cols-2 mt-4">
          <MiniTable
            title="Recent tournaments"
            items={previousEvents.data}
            href="/recent-games"
          />
          <MiniTable
            title="Upcoming tournaments"
            items={futureEvents.data}
            href="/upcoming-games"
          />
        </div>
        <Box marginTop={12}>
          <H3>Upcoming events</H3>
          {futureEvents.data && (
            <Box marginTop={4}>
              <DataTable columns={columns} data={futureEvents.data} />
            </Box>
          )}
        </Box>
        <Box marginTop={12}>
          <H3>Tournaments by game</H3>
          <Box marginTop={4} className="grid gap-4 md:grid-cols-2">
            <MiniTable
              gameId="chess"
              title="Chess Tournaments"
              items={chessEvents.data}
            />
            <MiniTable
              gameId="dota"
              title="Dota 2 Tournaments"
              items={dotaEvents.data}
            />
            <MiniTable
              gameId="csgo"
              title="CS:GO 2 Tournaments"
              items={csgoEvents.data}
            />
            <MiniTable
              gameId="lol"
              title="League of Legends Tournaments"
              items={lolEvents.data}
            />
            <MiniTable
              gameId="wow"
              title="World of Warcraft Tournaments"
              items={wowEvents.data}
            />
          </Box>
        </Box>
      </Box>
    </main>
  );
}
