import { Event } from "../types/global";

const getPreviousEvents = (events: Event[] | null): Event[] | null => {
  const currentEvents = events.filter((event) => {
    const now = new Date();
    const endsAt = event.ends_at ? new Date(event.ends_at) : undefined;
    return endsAt && endsAt < now;
  });

  return currentEvents;
};

export default getPreviousEvents;
