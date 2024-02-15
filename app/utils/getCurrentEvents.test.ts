import getCurrentEvents from "./getCurrentEvents";

it("returns undefined if events is null", () => {
  expect(getCurrentEvents(null)).toBe(undefined);
});
