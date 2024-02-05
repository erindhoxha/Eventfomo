import { User } from "@supabase/supabase-js";
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
  subscribed,
  user,
  events,
}: {
  title: string;
  description: string;
  gameId: string;
  gameName: string;
  subscribed: boolean;
  user: User | undefined;
  events: any;
}) => {
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
              subscribed={subscribed}
            />
          </div>
        </div>
        <div className="mt-4">
          <MiniTable title="Popular ongoing events" items={events} />
        </div>
        <div className="grid gap-4 md:grid-cols-2 mt-4">
          <MiniTable title="Recent Tournaments" items={events} />
          <MiniTable title="Upcoming Tournaments" items={events} />
        </div>
      </div>
    </>
  );
};

export default GameTemplate;
