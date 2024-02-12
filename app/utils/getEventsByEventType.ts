import { Event, EventType } from "../types/global";
import getCurrentEvents from "./getCurrentEvents";
import getUpcomingEvents from "./getFutureEvents";
import getRecentEvents from "./getPreviousEvents";

export const getEventsByEventType = (e: EventType, event: Event[] | null) => {
  switch (e) {
    case "recent":
      return getRecentEvents(event);
    case "current":
      return getCurrentEvents(event);
    case "upcoming":
      return getUpcomingEvents(event);
    default:
      throw new Error("Event type doesn't exist");
  }
};
