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
  gameName,
}: {
  title: string;
  description: string;
  gameId: string;
  gameName: string;
}) => {
  const allEvents = await useEvents({
    gameId: gameId,
  });

  const session = await getSession();
  const user = session?.user;

  const subscription = await useSubscription({
    id: user?.id,
    game_id: gameId,
  });

  return (
    <>
      <div className="mt-12 sm:mt-24 w-full">
        <div className="flex lg:flex-row flex-col justify-between">
          <div className="flex flex-col">
            <H3>{title}</H3>
            <SmallMutedText>{description}</SmallMutedText>
          </div>
          <div className="flex mt-4 max-w-4xl">
            <ButtonWithSubscribe
              user={user}
              gameId={gameId}
              gameName={gameName}
              subscribed={
                subscription.data && subscription.data?.length > 0
                  ? true
                  : false
              }
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
