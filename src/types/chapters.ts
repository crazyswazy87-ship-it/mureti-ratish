export interface Chapter {
  /** Small uppercase label */
  eyebrow: string;
  /** Main line. Wrap the muted half in <em> for the two-weight treatment. */
  line: string;
}

export const chapters: Chapter[] = [
  {
    eyebrow: "Route 01 — Departure",
    line: "Every journey starts with<br /><em>find my nganya.</em>",
  },
  {
    eyebrow: "Route 02 — The Streets",
    line: "Track the city's loudest rides<br /><em>before they disappear.</em>",
  },
  {
    eyebrow: "Route 03 — Live Location",
    line: "Know exactly where your<br /><em>next matatu is headed.</em>",
  },
  {
    eyebrow: "Route 04 — Nairobi Moves",
    line: "From CBD to every corner,<br /><em>ride the streets with confidence.</em>",
  },
];