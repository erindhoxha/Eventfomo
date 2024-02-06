import { Event } from "../types/global";

const getFutureEvents = (events: Event[]): Event[] => {
  const currentEvents = events.filter((event) => {
    const endsAt = new Date(event.ends_at || "");
    const startsAt = new Date(event.starts_at);
    const now = new Date();
    return endsAt && startsAt > now && endsAt > now;
  });

  return currentEvents;
};

export default getFutureEvents;
