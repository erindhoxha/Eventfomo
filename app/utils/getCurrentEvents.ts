import { Event } from "../types/global";

const getCurrentEvents = (events: Event[] | null): Event[] | undefined => {
  const currentEvents = events?.filter((event) => {
    const endsAt = new Date(event.ends_at || "");
    const startsAt = new Date(event.starts_at);
    const now = new Date();
    return endsAt > now && startsAt < now;
  });

  return currentEvents;
};

export default getCurrentEvents;
