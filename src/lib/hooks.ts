import { useEffect, useRef, useState } from "react";

export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fn = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);
  return reduced;
}

export function useInView<T extends HTMLElement>(
  options: IntersectionObserverInit & { once?: boolean } = {},
): [React.RefObject<T>, boolean] {
  const { once = true, threshold = 0.15, rootMargin = "0px 0px -6% 0px" } = options;
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            if (once) io.unobserve(e.target);
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { threshold, rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once, threshold, rootMargin]);

  return [ref, inView];
}

const easeOutExpo = (t: number) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));

export function useCountUp(
  end: number,
  active: boolean,
  duration = 1500,
  decimals = 0,
): string {
  const reduced = usePrefersReducedMotion();
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (reduced) {
      setVal(end);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setVal(end * easeOutExpo(p));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, active, duration, reduced]);

  return val.toLocaleString("ru-RU", {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  });
}

const SCRAMBLE_CHARS = "ЖШКДЦ0134579#/\\_";

export function useScramble(text: string, active: boolean, speed = 26): string {
  const reduced = usePrefersReducedMotion();
  const [out, setOut] = useState(() => text.replace(/[^ ]/g, "·"));

  useEffect(() => {
    if (!active) return;
    if (reduced) {
      setOut(text);
      return;
    }
    let frame = 0;
    let raf = 0;
    let last = 0;
    const tick = (t: number) => {
      if (t - last > speed) {
        last = t;
        frame += 1;
        const revealed = Math.floor(frame / 2);
        if (revealed >= text.length) {
          setOut(text);
          return;
        }
        setOut(
          text
            .split("")
            .map((c, i) =>
              c === " " || i < revealed
                ? c
                : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)],
            )
            .join(""),
        );
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [text, active, reduced, speed]);

  return out;
}
