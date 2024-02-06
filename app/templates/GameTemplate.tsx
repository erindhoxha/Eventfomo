import Link from "next/link";
import ButtonWithSubscribe from "../components/ButtonWithSubscribe/ButtonWithSubscribe";
import MiniTable from "../components/MiniTable/MiniTable";
import { H3, SmallMutedText } from "../components/Typography/Typography";
import getSession from "../hooks/getSession";
import useEvents from "../hooks/useEvents";
import useSubscription from "../hooks/useSubscription";

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
  });
  const session = await getSession();
  const userId = session?.user?.id;

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
        <div className="flex lg:flex-row flex-col justify-between">
          <div className="flex flex-col">
            <H3>{title}</H3>
            <SmallMutedText>{description}</SmallMutedText>
          </div>
          <div className="flex flex-col justify-end align-end mt-4 max-w-4xl">
            <Link
              className="md:text-right text-sm underline mb-2"
              href="/dashboard/subscriptions"
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
          <MiniTable title="Popular ongoing events" items={allEvents.data} />
        </div>
        <div className="grid gap-4 md:grid-cols-2 mt-4">
          <MiniTable title="Recent Tournaments" items={allEvents.data} />
          <MiniTable title="Upcoming Tournaments" items={allEvents.data} />
        </div>
      </div>
    </>
  );
};

export default GameTemplate;