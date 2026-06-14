// Terminal-style typing animation for the role line.
// Gracefully degrades: if JS is off or reduced-motion is on,
// the first role is rendered statically (see index.html / noscript).
(function () {
    var el = document.getElementById('role');
    if (!el) return;

    var roles = [
        'Software Engineer',
        'Team Lead',
        'Tech Lead',
        'CTO',
        'Bug Whisperer',
        'Coffee Consumer'
    ];

    var prefersReduced = window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
        el.textContent = roles[0];
        return;
    }

    var roleIndex = 0;
    var charIndex = 0;
    var deleting = false;

    var TYPE_SPEED = 70;
    var DELETE_SPEED = 35;
    var HOLD_TIME = 1600;

    function tick() {
        var current = roles[roleIndex];

        if (!deleting) {
            charIndex++;
            el.textContent = current.slice(0, charIndex);
            if (charIndex === current.length) {
                deleting = true;
                return setTimeout(tick, HOLD_TIME);
            }
            return setTimeout(tick, TYPE_SPEED);
        }

        charIndex--;
        el.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            return setTimeout(tick, TYPE_SPEED);
        }
        return setTimeout(tick, DELETE_SPEED);
    }

    tick();
})();

// A little something for the curious who open DevTools.
console.log(
    '%cHey, fellow engineer 👋\n%cLike poking around? Let\'s talk: https://telegram.me/IgorSavin',
    'color:#64ffda;font-size:14px;font-weight:bold;',
    'color:#8b949e;font-size:12px;'
);
