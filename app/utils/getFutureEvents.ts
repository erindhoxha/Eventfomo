import { Event } from "../types/global";

const getUpcomingEvents = (events: Event[] | null): Event[] | undefined => {
  const currentEvents = events?.filter((event) => {
    const endsAt = new Date(event.ends_at || "");
    const startsAt = new Date(event.starts_at);
    const now = new Date();
    return endsAt && startsAt > now && endsAt > now;
  });

  return currentEvents;
};

export default getUpcomingEvents;
