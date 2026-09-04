import type { ReactElement } from "react";

export type IconName =
  | "wrench"
  | "scan"
  | "brake"
  | "spring"
  | "engine"
  | "bolt"
  | "wheel"
  | "spray"
  | "cool"
  | "oil"
  | "shield"
  | "camera"
  | "doc"
  | "phone"
  | "clock"
  | "pin"
  | "star"
  | "check"
  | "arrowR"
  | "arrowD"
  | "burger"
  | "close"
  | "mail"
  | "wa"
  | "tg"
  | "viber"
  | "car"
  | "gauge"
  | "swap";

const P: Record<IconName, ReactElement> = {
  wrench: (
    <path d="M14.9 6.2a4.3 4.3 0 0 0-5.8 5.4L3.6 17a2.1 2.1 0 0 0 0 3 2.1 2.1 0 0 0 3 0l5.4-5.5a4.3 4.3 0 0 0 5.4-5.8L14.7 11l-2.2-.6-.6-2.2 3-2Z" />
  ),
  scan: (
    <>
      <rect x="3" y="4.5" width="18" height="13" rx="2" />
      <path d="M6.5 11h2.1l1.3-2.6 2 5 1.4-2.4h4.2" />
      <path d="M9 21h6" />
    </>
  ),
  brake: (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <circle cx="12" cy="12" r="2.3" />
      <circle cx="12" cy="6.6" r="0.55" fill="currentColor" stroke="none" />
      <circle cx="16.7" cy="9.4" r="0.55" fill="currentColor" stroke="none" />
      <circle cx="16.7" cy="14.6" r="0.55" fill="currentColor" stroke="none" />
      <circle cx="12" cy="17.4" r="0.55" fill="currentColor" stroke="none" />
      <circle cx="7.3" cy="14.6" r="0.55" fill="currentColor" stroke="none" />
      <circle cx="7.3" cy="9.4" r="0.55" fill="currentColor" stroke="none" />
      <path d="M19.8 3.5a12 12 0 0 1 1.6 3.3" />
    </>
  ),
  spring: (
    <>
      <path d="M6 3.5h12" />
      <path d="M6 20.5h12" />
      <path d="M7.5 3.5 16 6l-8.5 2.7L16 11.4l-8.5 2.7L16 16.8l-8.5 2.7v1" />
    </>
  ),
  engine: (
    <>
      <path d="M8 4.5V3h4v1.5" />
      <path d="M6.5 7.5v-2h7v2" />
      <path d="M4.5 12H3v5h1.5" />
      <path d="M21 12h-2" />
      <path d="M4.5 9.5h13l2 2.5v5h-2l-1.5 2h-8L6.5 17h-2V9.5Z" />
      <path d="M9.5 12.5v2.5M13 12.5v2.5" />
    </>
  ),
  bolt: <path d="M13 2 5.2 13.2h5.4L10 22l7.8-11.2h-5.4L13 2Z" />,
  wheel: (
    <>
      <circle cx="12" cy="12" r="7.6" />
      <circle cx="12" cy="12" r="1.4" />
      <path d="M12 1.8v3.4M12 18.8v3.4M1.8 12h3.4M18.8 12h3.4" />
      <path d="m10.5 3.2 1.5-1.4 1.5 1.4M10.5 20.8l1.5 1.4 1.5-1.4" />
    </>
  ),
  spray: (
    <>
      <path d="M4 9.5h10v3.4l-4.2 1-1 6.1H6l1-6.1H4a1 1 0 0 1-1-1v-2.4a1 1 0 0 1 1-1Z" />
      <path d="M10 9.5V6.4h5.5v3.1" />
      <path d="M18.2 6.8h.01M20.6 9.8h.01M18.2 12.8h.01" />
    </>
  ),
  cool: (
    <>
      <path d="M12 2.5v19M3.8 7.25l16.4 9.5M20.2 7.25l-16.4 9.5" />
      <path d="m9.6 3.6 2.4 2 2.4-2M9.6 20.4l2.4-2 2.4 2" />
    </>
  ),
  oil: (
    <>
      <path d="M12 2.8s6.3 6.9 6.3 11.2a6.3 6.3 0 0 1-12.6 0C5.7 9.7 12 2.8 12 2.8Z" />
      <path d="M8.8 14.2a3.2 3.2 0 0 0 3.2 3.2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2.8 19 6v5.1c0 4.6-3 8.7-7 10.1-4-1.4-7-5.5-7-10.1V6l7-3.2Z" />
      <path d="m8.8 11.6 2.2 2.2 4.4-4.8" />
    </>
  ),
  camera: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <circle cx="12" cy="13.3" r="3.8" />
      <path d="m8.2 7 1.5-2.5h4.6L15.8 7" />
      <path d="M18 10h.01" />
    </>
  ),
  doc: (
    <>
      <path d="M6.2 2.8h7.6l5 5V21.2H6.2V2.8Z" />
      <path d="M13.8 2.8v5h5" />
      <path d="M9 12.2h6M9 15.7h6M9 8.7h2" />
    </>
  ),
  phone: (
    <path d="M4.7 3h3.6l1.6 4.7-2.3 1.8a13.4 13.4 0 0 0 6.9 6.9l1.8-2.3L21 15.7v3.6a2 2 0 0 1-2.2 2A17.9 17.9 0 0 1 2.7 5.2 2 2 0 0 1 4.7 3Z" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M12 6.8V12l3.4 2.1" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21.4S5 15.5 5 10.3a7 7 0 0 1 14 0c0 5.2-7 11.1-7 11.1Z" />
      <circle cx="12" cy="10.3" r="2.5" />
    </>
  ),
  star: (
    <path
      d="m12 2.6 2.9 5.9 6.5 1-4.7 4.5 1.1 6.5L12 17.4l-5.8 3.1 1.1-6.5-4.7-4.5 6.5-1L12 2.6Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  check: <path d="m4.5 12.6 5 5L19.5 6.4" />,
  arrowR: <path d="M4 12h15.2M13.4 6.2l5.8 5.8-5.8 5.8" />,
  arrowD: <path d="M12 4v15.2M6.2 13.4 12 19.2l5.8-5.8" />,
  burger: <path d="M4 7h16M4 12h16M4 17h9" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="m3.6 7.2 8.4 6 8.4-6" />
    </>
  ),
  wa: (
    <>
      <path d="M12 3.4a8.6 8.6 0 0 0-7.4 13L3.4 20.6l4.3-1.1A8.6 8.6 0 1 0 12 3.4Z" />
      <path d="M9 8.4c-.3 3.3 3.3 6.9 6.6 6.6l.8-1.9-2.3-1.1-1 .8c-1.3-.6-2.3-1.6-2.9-2.9l.8-1-1.1-2.3L9 8.4Z" />
    </>
  ),
  tg: (
    <>
      <path d="m21.3 4.4-18 7c-.8.3-.8 1.5.1 1.7l4.5 1.4 1.7 5.3c.3.8 1.3 1 1.8.3l2.4-3 4.4 3.2c.6.5 1.6.1 1.7-.7l2.3-13.6c.2-.9-.7-1.6-1.5-1.3Z" />
      <path d="m8 14.5 9.8-7.4" />
    </>
  ),
  viber: (
    <>
      <path d="M12 3.4c4.9 0 8.6 3.3 8.6 7.7 0 4.5-3.7 7.8-8.6 7.8-.9 0-1.8-.1-2.6-.3L5 20.7l.5-3.4c-1.5-1.5-2.4-3.5-2.4-5.7 0-4.4 4-8.2 8.9-8.2Z" />
      <path d="M9.2 8.3c-.3 3.1 3.1 6.5 6.2 6.2l.7-1.7-2-1-1 .7a5.3 5.3 0 0 1-2.5-2.5l.7-1-1-2-1.1.3Z" />
      <path d="M14.3 7.6a4.4 4.4 0 0 1 2.1 2.1" />
    </>
  ),
  car: (
    <>
      <path d="M4.5 15.5v-3.2l1.8-4.6A2 2 0 0 1 8.2 6.4h7.6a2 2 0 0 1 1.9 1.3l1.8 4.6v3.2" />
      <path d="M4.5 12.3h15" />
      <circle cx="8" cy="16" r="1.9" />
      <circle cx="16" cy="16" r="1.9" />
    </>
  ),
  gauge: (
    <>
      <path d="M5.2 18.5a8.7 8.7 0 1 1 13.6 0" />
      <path d="m12 13.5 3.8-3.8" />
      <circle cx="12" cy="13.5" r="1.2" />
    </>
  ),
  swap: <path d="m8.5 7.5-4 4.5 4 4.5M15.5 7.5l4 4.5-4 4.5" />,
};

export function Ic({
  name,
  className = "size-5",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {P[name]}
    </svg>
  );
}

export function LogoMark({ className = "size-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 44" className={className} aria-hidden="true">
      <path
        d="M22 3 38.5 12.5v19L22 41 5.5 31.5v-19L22 3Z"
        fill="none"
        stroke="var(--color-ember)"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M25 11 15.5 23.5h5.8L20 33l9.5-12.5h-5.9L25 11Z"
        fill="var(--color-ember)"
      />
    </svg>
  );
}
