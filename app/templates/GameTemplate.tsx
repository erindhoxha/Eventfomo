import Link from "next/link";
import ButtonWithSubscribe from "../components/ButtonWithSubscribe/ButtonWithSubscribe";
import MiniTable from "../components/MiniTable/MiniTable";
import { H3, SmallMutedText } from "../components/Typography/Typography";
import getSession from "../hooks/getSession";
import useEvents from "../hooks/useEvents";
import useSubscription from "../hooks/useSubscription";
import getPreviousEvents from "../utils/getPreviousEvents";
import getFutureEvents from "../utils/getFutureEvents";
import getCurrentEvents from "../utils/getCurrentEvents";

const GameTemplate = async ({
  title,
  description,
  gameId,
}: {
  title: string;
  description: string;
  gameId: string;
}) => {
  const allEvents = await useEvents({
    gameId: gameId,
    limit: 50,
  });

  const session = await getSession();
  const userId = session?.user?.id;

  const previousEvents = getPreviousEvents(allEvents.data);
  const futureEvents = getFutureEvents(allEvents.data);
  const currentEvents = getCurrentEvents(allEvents.data);

  const subscription = await useSubscription({
    id: userId,
    game_id: gameId,
  });

  const subscribed =
    (subscription &&
      subscription.data?.length &&
      subscription.data?.length > 0) ||
    false;

  return (
    <>
      <div className="mt-12 sm:mt-24 w-full">
        <div className="flex lg:flex-row flex-col justify-between lg:items-end">
          <div className="flex flex-col">
            <H3>{title}</H3>
            <SmallMutedText>{description}</SmallMutedText>
          </div>
          <div className="flex flex-col justify-end lg:items-end mt-4 lg:mt-0 max-w-4xl">
            <Link
              className="lg:text-right text-sm underline mb-2"
              href={userId ? "/dashboard/subscriptions" : "/login"}
            >
              Manage your subscriptions
            </Link>
            <ButtonWithSubscribe
              gameId={gameId}
              userId={userId}
              subscribed={subscribed}
            />
          </div>
        </div>
        <div className="mt-4">
          <MiniTable title="Popular ongoing events" items={currentEvents} />
        </div>
        <div className="grid gap-4 md:grid-cols-2 mt-4">
          <MiniTable title="Recent Tournaments" items={previousEvents} />
          <MiniTable title="Upcoming Tournaments" items={futureEvents} />
        </div>
      </div>
    </>
  );
};

export default GameTemplate;
