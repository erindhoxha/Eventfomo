import { Event } from "../types/global";

const getCurrentEvents = (events: Event[]): Event[] => {
  const currentEvents = events.filter((event) => {
    const eventEndDate = new Date(event.ends_at || "");
    const now = new Date();
    return eventEndDate > now && new Date(event.starts_at) < now;
  });

  return currentEvents;
};

export default getCurrentEvents;
