import { useEffect, useState } from 'react';

const ROLES = [
  'Software Engineer',
  'Team Lead',
  'Tech Lead',
  'CTO',
  'Bug Whisperer',
  'Coffee Consumer',
];

const TYPE_SPEED = 70;
const DELETE_SPEED = 35;
const HOLD_TIME = 1600;

/**
 * Terminal-style typing animation for the role line.
 *
 * Gracefully degrades: when reduced-motion is requested, the first role is
 * rendered statically with no animation — mirroring the original script.js.
 */
export function useTypedRole(): string {
  const [text, setText] = useState(ROLES[0]);

  useEffect(() => {
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setText(ROLES[0]);
      return;
    }

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    // Start from an empty line so the first role types out character by character.
    setText('');

    function tick() {
      const current = ROLES[roleIndex];

      if (!deleting) {
        charIndex++;
        setText(current.slice(0, charIndex));
        if (charIndex === current.length) {
          deleting = true;
          timer = setTimeout(tick, HOLD_TIME);
          return;
        }
        timer = setTimeout(tick, TYPE_SPEED);
        return;
      }

      charIndex--;
      setText(current.slice(0, charIndex));
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % ROLES.length;
        timer = setTimeout(tick, TYPE_SPEED);
        return;
      }
      timer = setTimeout(tick, DELETE_SPEED);
    }

    timer = setTimeout(tick, TYPE_SPEED);

    return () => clearTimeout(timer);
  }, []);

  return text;
}
