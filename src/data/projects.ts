export interface ProjectItem {
  title: string;
  /** Optional status badge shown above the link. */
  status?: { label: string; variant: 'active' | 'closed' };
  href: string;
  /** Visible link text (usually the bare domain). */
  linkLabel: string;
  description: string;
}

// Pet-projects — built in free time to explore tech and solve fun problems.
export const petProjects: ProjectItem[] = [
  {
    title: 'Tennis platform',
    status: { label: 'Active', variant: 'active' },
    href: 'https://courtcount.ru',
    linkLabel: 'courtcount.ru',
    description: 'Simplifying tennis tournament scoring for professional referees',
  },
  {
    title: 'Subscription App',
    status: { label: 'Closed ♥️ R.I.P', variant: 'closed' },
    href: 'https://subsflow.tech',
    linkLabel: 'subsflow.tech',
    description:
      'Tracking subscriptions becomes simple and convenient. Enter your subscription details, track payment deadlines, and receive timely notifications. Never miss a payment deadline!',
  },
];

// Utils — small tools for personal and team use.
export const utils: ProjectItem[] = [
  {
    title: 'JWT Decoder',
    href: 'https://jwt-decoder.isavin.dev/',
    linkLabel: 'jwt-decoder.isavin.dev',
    description:
      'Decode & verify JSON Web Tokens right in your browser — nothing leaves the page',
  },
  {
    title: 'Snowflake ID Decoder',
    href: 'https://snowflake-decoder.isavin.dev/',
    linkLabel: 'snowflake-decoder.isavin.dev',
    description: 'Decode snowflake ID like a PRO',
  },
];
