/** Shared geometry — benzene nucleus, dilated pupil, bond-tentacles. */

const HEX = [
  [32, 11],
  [45, 18.5],
  [45, 33.5],
  [32, 41],
  [19, 33.5],
  [19, 18.5],
] as const;

const HEX_D = HEX.map(([x, y]) => `${x},${y}`).join(" ");
const HALO_D = [
  [32, 6.2],
  [48.9, 16],
  [48.9, 36],
  [32, 45.8],
  [15.1, 36],
  [15.1, 16],
]
  .map(([x, y]) => `${x},${y}`)
  .join(" ");

function Mark({
  fill,
  pupil,
  shine = "#fff",
}: {
  fill: string;
  pupil: string;
  shine?: string;
}) {
  return (
    <>
      <polygon
        points={HALO_D}
        fill="none"
        stroke={fill}
        strokeWidth="1.15"
        opacity="0.32"
        strokeLinejoin="round"
      />
      <path
        d="M32 41 C30 49 27 54 23.5 60.5"
        fill="none"
        stroke={fill}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M19 33.5 C11 39 8 47 6.5 56.5"
        fill="none"
        stroke={fill}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M45 33.5 C53 39 56 47 57.5 56.5"
        fill="none"
        stroke={fill}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M19 18.5 C11 14 8 18 5.5 26"
        fill="none"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M45 18.5 C53 14 56 18 58.5 26"
        fill="none"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="23.5" cy="60.5" r="2.15" fill={fill} />
      <circle cx="6.5" cy="56.5" r="2.15" fill={fill} />
      <circle cx="57.5" cy="56.5" r="2.15" fill={fill} />
      <circle cx="5.5" cy="26" r="2" fill={fill} />
      <circle cx="58.5" cy="26" r="2" fill={fill} />

      <polygon
        points={HEX_D}
        fill="none"
        stroke={fill}
        strokeWidth="2.45"
        strokeLinejoin="round"
      />
      {HEX.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="2.55" fill={fill} />
      ))}

      <circle cx="32" cy="26" r="8.1" fill={shine} />
      <circle
        cx="32"
        cy="26"
        r="6.15"
        fill="none"
        stroke={fill}
        strokeWidth="1.15"
        opacity="0.55"
      />
      <circle cx="32" cy="26" r="4.35" fill={fill} />
      <circle cx="32" cy="26" r="2.25" fill={pupil} />
      <circle cx="30.35" cy="24.2" r="1.05" fill={shine} />
    </>
  );
}

export function takoFaviconSvg(_hue?: number) {
  const fill = "#ffffff";
  const pupil = "#3a2a1c";
  const bg = "#c4a06a";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="${bg}"/>${faviconMarkup(fill, pupil)}</svg>`;
}

export function takoLogoSvgHex(fill: string, pupil: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 64 64" role="img" aria-label="TakoLogs">${faviconMarkup(fill, pupil)}</svg>`;
}

function faviconMarkup(fill: string, pupil: string) {
  const atoms = HEX.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.2" fill="${fill}"/>`).join(
    "",
  );
  return `
    <polygon points="${HALO_D}" fill="none" stroke="${fill}" stroke-width="2.2" opacity="0.5" stroke-linejoin="round"/>
    <path d="M32 41 C30 49 27 54 23.5 60.5" fill="none" stroke="${fill}" stroke-width="3.4" stroke-linecap="round"/>
    <path d="M19 33.5 C11 39 8 47 6.5 56.5" fill="none" stroke="${fill}" stroke-width="3.4" stroke-linecap="round"/>
    <path d="M45 33.5 C53 39 56 47 57.5 56.5" fill="none" stroke="${fill}" stroke-width="3.4" stroke-linecap="round"/>
    <path d="M19 18.5 C11 14 8 18 5.5 26" fill="none" stroke="${fill}" stroke-width="3.2" stroke-linecap="round"/>
    <path d="M45 18.5 C53 14 56 18 58.5 26" fill="none" stroke="${fill}" stroke-width="3.2" stroke-linecap="round"/>
    <circle cx="23.5" cy="60.5" r="3.1" fill="${fill}"/>
    <circle cx="6.5" cy="56.5" r="3.1" fill="${fill}"/>
    <circle cx="57.5" cy="56.5" r="3.1" fill="${fill}"/>
    <circle cx="5.5" cy="26" r="2.9" fill="${fill}"/>
    <circle cx="58.5" cy="26" r="2.9" fill="${fill}"/>
    <polygon points="${HEX_D}" fill="none" stroke="${fill}" stroke-width="3.6" stroke-linejoin="round"/>
    ${atoms}
    <circle cx="32" cy="26" r="9.2" fill="#fff"/>
    <circle cx="32" cy="26" r="6.4" fill="none" stroke="${fill}" stroke-width="1.8" opacity="0.7"/>
    <circle cx="32" cy="26" r="4.8" fill="${fill}"/>
    <circle cx="32" cy="26" r="2.4" fill="${pupil}"/>
    <circle cx="30.2" cy="24.1" r="1.15" fill="#fff"/>
  `.replace(/\s+/g, " ");
}

export function applyTakoFavicon(_hue?: number) {
  if (typeof document === "undefined") return;
  const svg = takoFaviconSvg();
  const href = `data:image/svg+xml,${encodeURIComponent(svg)}`;
  let link = document.querySelector<HTMLLinkElement>('link[rel="icon"][data-tako="1"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/svg+xml";
    link.dataset.tako = "1";
    document.head.appendChild(link);
  }
  link.href = href;
  document
    .querySelectorAll<HTMLLinkElement>('link[rel="icon"]:not([data-tako])')
    .forEach((el) => el.remove());
  const img = new Image();
  img.onload = () => {
    const c = document.createElement("canvas");
    c.width = 180;
    c.height = 180;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    ctx.drawImage(img, 0, 0, 180, 180);
    const png = c.toDataURL("image/png");
    document
      .querySelectorAll<HTMLLinkElement>('link[rel="apple-touch-icon"]')
      .forEach((el) => {
        el.href = png;
      });
  };
  img.src = href;
}

export function TakoLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width="32"
      height="32"
      className={className}
      aria-hidden
    >
      <Mark
        fill="currentColor"
        pupil="var(--app-bg)"
      />
    </svg>
  );
}
