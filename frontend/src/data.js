import { matches as baseMatches, reportMeta as baseReportMeta, standings } from "./matches.js";
import { extraMatches } from "./extra-matches.js";

export const reportMeta = {
  ...baseReportMeta,
  generatedAt: "2026-06-26 13:45 UTC",
  dateLabel: "2026-06-27"
};

export { standings };

export const matches = [...baseMatches, ...extraMatches];

export function findMatch(matchId) {
  return matches.find((match) => match.id === matchId);
}
