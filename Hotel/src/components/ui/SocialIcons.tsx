import React from "react";
const Icon = ({ path }: { path: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true">
    <path d={path} />
  </svg>
);
const ICONS = {
  x: "M18.36 2H21l-6.18 7.06L22 22h-6.58l-4.3-5.62L5.2 22H2l6.76-7.72L2 2h6.58l4.05 5.3L18.36 2zM9.86 4H5.66l3.3 4.32 2.02 2.66L7.4 15.8 5.66 18h4.2l3.04-3.8 2.02-2.54L9.86 4z",
  github:
    "M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.8-.26.8-.58v-2.02c-3.26.71-3.95-1.57-3.95-1.57-.53-1.35-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.76.41-1.27.75-1.56-2.6-.3-5.33-1.3-5.33-5.77a4.5 4.5 0 0 1 1.2-3.1 4.2 4.2 0 0 1 .11-3.06s.98-.32 3.2 1.2a11 11 0 0 1 5.82 0c2.22-1.52 3.19-1.2 3.19-1.2.22.76.08 1.75.04 1.94a4.5 4.5 0 0 1 1.2 3.1c0 4.49-2.73 5.46-5.34 5.75.42.36.8 1.08.8 2.18v3.22c0 .32.22.69.8.58A11.5 11.5 0 0 0 12 .5z",
  linkedin:
    "M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v15H0zM8 8h4.78v2.05h.07c.67-1.27 2.32-2.6 4.78-2.6C22.4 7.45 24 9.4 24 13.06V23H19V14.2c0-2.1-.75-3.54-2.62-3.54-1.43 0-2.28.96-2.65 1.88-.13.32-.16.76-.16 1.21V23H8z",
} as const;
export function SocialIcons() {
  return (
    <div className="social" aria-label="Redes sociales">
      <a
        href="https://x.com"
        aria-label="X / Twitter"
        target="_blank"
        rel="noreferrer">
        <Icon path={ICONS.x} />
      </a>
      <a
        href="https://github.com"
        aria-label="GitHub"
        target="_blank"
        rel="noreferrer">
        <Icon path={ICONS.github} />
      </a>
      <a
        href="https://linkedin.com"
        aria-label="LinkedIn"
        target="_blank"
        rel="noreferrer">
        <Icon path={ICONS.linkedin} />
      </a>
    </div>
  );
}
