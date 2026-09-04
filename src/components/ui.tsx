import type { CSSProperties, ReactNode } from "react";
import { useInView } from "../lib/hooks";
import { Ic } from "../lib/icons";

export function Reveal({
  children,
  className = "",
  delay = 0,
  style,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
}) {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`rv ${inView ? "rv-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}

export function Kicker({ num, children }: { num: string; children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-[11px] sm:text-xs font-bold uppercase tracking-[0.26em] text-ash">
      <span className="font-display text-ember text-sm">{num}</span>
      <span className="h-px w-10 bg-ember/60" aria-hidden="true" />
      {children}
    </div>
  );
}

export function Stars({
  n = 5,
  className = "size-4",
}: {
  n?: number;
  className?: string;
}) {
  return (
    <span className="inline-flex items-center gap-0.5 text-honey">
      {Array.from({ length: n }).map((_, i) => (
        <Ic key={i} name="star" className={className} />
      ))}
    </span>
  );
}

export function MaskText({
  lines,
  className = "",
  as = "h2",
  delay = 0,
}: {
  lines: ReactNode[];
  className?: string;
  as?: string;
  delay?: number;
}) {
  const [ref, inView] = useInView<HTMLHeadingElement>({ threshold: 0.25 });
  const Tag = as as "h2";
  return (
    <Tag ref={ref} className={className}>
      {lines.map((l, i) => (
        <span key={i} className="lm">
          <span
            className={`lm-i ${inView ? "in" : ""}`}
            style={{ transitionDelay: `${delay + i * 120}ms` }}
          >
            {l}
          </span>
        </span>
      ))}
    </Tag>
  );
}

export function SectionHead({
  num,
  kicker,
  title,
  sub,
  right,
}: {
  num: string;
  kicker: string;
  title: ReactNode[];
  sub?: string;
  right?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-2xl">
        <Kicker num={num}>{kicker}</Kicker>
        <MaskText
          as="h2"
          className="mt-5 font-display text-[26px] leading-[1.08] font-extrabold sm:text-4xl lg:text-[44px]"
          lines={title}
        />
        {sub && <p className="mt-5 text-ash leading-relaxed">{sub}</p>}
      </div>
      {right && <div className="shrink-0">{right}</div>}
    </div>
  );
}
