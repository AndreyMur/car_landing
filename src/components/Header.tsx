import { useEffect, useState } from "react";
import { CONTACTS, NAV } from "../lib/data";
import { Ic, LogoMark } from "../lib/icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-ink/80 backdrop-blur-xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[78px] lg:px-8">
        <a href="#top" className="group flex items-center gap-3" aria-label="ЦЕХ №1 — на главную">
          <LogoMark className="size-9 transition-transform duration-300 group-hover:rotate-[15deg] lg:size-10" />
          <span className="leading-tight">
            <span className="block font-display text-sm font-extrabold tracking-wider">
              ЦЕХ&nbsp;№1
            </span>
            <span className="block text-[9px] font-semibold uppercase tracking-[0.22em] text-ash">
              автосервис полного цикла
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Основная навигация">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="nav-link text-sm font-semibold text-ash hover:text-snow">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href={CONTACTS.phoneHref}
            className="group hidden flex-col items-end leading-tight xl:flex"
          >
            <span className="font-display text-sm font-bold transition-colors group-hover:text-ember">
              {CONTACTS.phoneDisplay}
            </span>
            <span className="mt-1 flex items-center gap-1.5 text-[11px] text-ash">
              <span className="relative flex size-2">
                <span className="pulse-ring absolute inline-flex size-full rounded-full bg-mint" />
                <span className="relative inline-flex size-2 rounded-full bg-mint" />
              </span>
              {CONTACTS.hours.toLowerCase()}
            </span>
          </a>

          <a
            href="#callback"
            className="btn-shine hidden items-center gap-2 rounded-xl bg-ember px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-[#160b02] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(255,106,0,0.5)] sm:inline-flex"
          >
            Записаться
            <Ic name="arrowR" className="size-4" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
            className="grid size-11 place-items-center rounded-xl border border-line text-snow transition-colors hover:border-ember/60 lg:hidden"
          >
            <Ic name={open ? "close" : "burger"} className="size-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="menu-in border-t border-line bg-ink/95 px-4 pb-6 pt-4 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col" aria-label="Мобильная навигация">
            {NAV.map((n, i) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-line/60 py-3.5 font-display text-sm font-bold text-snow transition-colors hover:text-ember"
              >
                <span>
                  <span className="mr-3 text-xs text-ember">0{i + 1}</span>
                  {n.label}
                </span>
                <Ic name="arrowR" className="size-4 text-dim" />
              </a>
            ))}
          </nav>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <a
              href={CONTACTS.phoneHref}
              className="flex items-center justify-center gap-2 rounded-xl border border-line py-3.5 font-display text-xs font-bold text-snow"
            >
              <Ic name="phone" className="size-4 text-ember" />
              Позвонить
            </a>
            <a
              href="#callback"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center rounded-xl bg-ember py-3.5 font-display text-xs font-bold uppercase text-[#160b02]"
            >
              Записаться
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
