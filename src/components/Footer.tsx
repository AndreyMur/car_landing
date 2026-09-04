import { CONTACTS, NAV } from "../lib/data";
import { Ic, LogoMark } from "../lib/icons";

function CityMap() {
  return (
    <div className="relative overflow-hidden rounded-[22px] border border-line">
      <svg
        viewBox="0 0 900 280"
        preserveAspectRatio="xMidYMid slice"
        className="h-64 w-full sm:h-72"
        role="img"
        aria-label="Схема проезда: Москва, улица Складочная, 1с18, рядом метро Бутырская"
      >
        <rect width="900" height="280" fill="#0E1116" />
        {/* city blocks */}
        <g fill="#151920" stroke="#1D222B" strokeWidth="1">
          <rect x="30" y="26" width="180" height="96" rx="6" />
          <rect x="250" y="14" width="150" height="110" rx="6" />
          <rect x="560" y="30" width="150" height="70" rx="6" />
          <rect x="750" y="120" width="120" height="120" rx="6" />
          <rect x="60" y="170" width="170" height="80" rx="6" />
          <rect x="280" y="180" width="130" height="74" rx="6" />
          <rect x="560" y="170" width="140" height="84" rx="6" />
        </g>
        {/* park */}
        <rect x="745" y="20" width="125" height="80" rx="10" fill="#12211B" stroke="#1A2E25" />
        <text x="775" y="65" fill="#3E5A4C" fontSize="11" fontFamily="Manrope, sans-serif">
          сквер
        </text>
        {/* streets */}
        <g stroke="#232A35" fill="none">
          <path d="M0 140 H900" strokeWidth="16" />
          <path d="M440 0 V280" strokeWidth="12" />
          <path d="M0 236 L320 150 L900 96" strokeWidth="10" />
        </g>
        <g stroke="#39414D" strokeWidth="1.6" strokeDasharray="10 12" fill="none">
          <path d="M0 140 H900" />
          <path d="M440 0 V280" />
        </g>
        {/* street labels */}
        <text x="60" y="130" fill="#5F6A77" fontSize="12" fontFamily="Manrope, sans-serif" fontWeight={600}>
          ул. Складочная
        </text>
        <text x="452" y="262" fill="#5F6A77" fontSize="12" fontFamily="Manrope, sans-serif" fontWeight={600}>
          Огородный проезд
        </text>
        {/* metro */}
        <g transform="translate(330,140)">
          <circle r="11" fill="#0B0D11" stroke="#8FB4C4" strokeWidth="1.6" />
          <text y="4" textAnchor="middle" fill="#8FB4C4" fontSize="11" fontWeight={800} fontFamily="Manrope, sans-serif">
            М
          </text>
        </g>
        <text x="348" y="165" fill="#5F6A77" fontSize="11" fontFamily="Manrope, sans-serif">
          м. Бутырская · 7 мин пешком
        </text>
        {/* pin */}
        <g transform="translate(520,118)">
          <circle r="26" fill="none" stroke="rgba(255,106,0,0.45)" strokeWidth="2" className="pulse-ring" style={{ transformBox: "fill-box", transformOrigin: "center" }} />
          <circle r="26" fill="none" stroke="rgba(255,106,0,0.3)" strokeWidth="2" className="pulse-ring" style={{ transformBox: "fill-box", transformOrigin: "center", animationDelay: "0.9s" }} />
          <path
            d="M0 14 C-11 2 -14 -4 -14 -11 a14 14 0 1 1 28 0 c0 7 -3 13 -14 25Z"
            fill="var(--color-ember)"
            stroke="#160b02"
            strokeWidth="1.5"
          />
          <circle cy="-11" r="5" fill="#160b02" />
        </g>
        {/* label chip */}
        <g>
          <path d="M534 104 L568 88" stroke="rgba(255,106,0,0.5)" strokeWidth="1.4" />
          <rect x="568" y="64" width="264" height="44" rx="10" fill="#0B0D11" opacity="0.94" stroke="rgba(255,106,0,0.4)" />
          <text x="586" y="83" fill="#EEF1F5" fontSize="14" fontWeight={800} fontFamily="Unbounded, sans-serif">
            ЦЕХ №1
          </text>
          <text x="586" y="100" fill="#9AA6B2" fontSize="11.5" fontFamily="Manrope, sans-serif">
            Складочная, 1с18 · въезд со двора
          </text>
        </g>
      </svg>
      <a
        href={CONTACTS.maps}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-xl bg-ember px-4 py-2.5 font-display text-[12px] font-bold uppercase tracking-wide text-[#160b02] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(255,106,0,0.5)]"
      >
        <Ic name="pin" className="size-4" />
        Открыть в картах
      </a>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative">
      <div className="hazard h-2 opacity-80" aria-hidden="true" />
      <div className="border-t border-line bg-coal/80 pb-28 pt-14 lg:pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CityMap />

          <div className="mt-12 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <a href="#top" className="flex items-center gap-3">
                <LogoMark className="size-10" />
                <span className="leading-tight">
                  <span className="block font-display text-base font-extrabold tracking-wider">ЦЕХ&nbsp;№1</span>
                  <span className="block text-[9px] font-semibold uppercase tracking-[0.22em] text-ash">
                    автосервис полного цикла
                  </span>
                </span>
              </a>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-ash">
                Ремонтируем так, чтобы вы возвращались не с проблемой, а на ТО.
                Фикс-смета, фотоотчёт и гарантия от 1 года — в каждом заказ-наряде.
              </p>
              <div className="mt-6 flex gap-3">
                {[
                  { icon: "wa" as const, href: CONTACTS.wa, label: "WhatsApp" },
                  { icon: "tg" as const, href: CONTACTS.tg, label: "Telegram" },
                  { icon: "viber" as const, href: CONTACTS.viber, label: "Viber" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid size-11 place-items-center rounded-xl border border-line text-ash transition-all duration-300 hover:-translate-y-0.5 hover:border-ember/60 hover:text-ember"
                  >
                    <Ic name={s.icon} className="size-5" />
                  </a>
                ))}
              </div>
            </div>

            <nav className="lg:col-span-2" aria-label="Навигация по разделам">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-dim">Разделы</p>
              <ul className="mt-5 space-y-3">
                {NAV.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="nav-link text-sm font-semibold text-ash hover:text-snow">
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="lg:col-span-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-dim">Контакты</p>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Ic name="pin" className="mt-0.5 size-4.5 shrink-0 text-ember" />
                  <span>
                    {CONTACTS.address}
                    <span className="mt-0.5 block text-[12px] text-dim">{CONTACTS.metro} · 7 минут пешком</span>
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Ic name="phone" className="size-4.5 shrink-0 text-ember" />
                  <a href={CONTACTS.phoneHref} className="font-display font-bold transition-colors hover:text-ember">
                    {CONTACTS.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Ic name="mail" className="size-4.5 shrink-0 text-ember" />
                  <a href={`mailto:${CONTACTS.email}`} className="font-semibold text-ash transition-colors hover:text-snow">
                    {CONTACTS.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-dim">Режим работы</p>
              <div className="glass mt-5 rounded-[18px] p-5">
                <p className="flex items-center gap-3">
                  <Ic name="clock" className="size-5 text-ember" />
                  <span className="font-display text-sm font-bold">Ежедневно · 9:00 — 21:00</span>
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-ash">
                  Выдача авто — до 22:00 по договорённости. Кузовной цех принимает
                  автомобили на оценку по фото круглосуточно.
                </p>
                <p className="mt-4 flex items-center gap-2 text-[12px] font-semibold text-mint">
                  <span className="relative flex size-2">
                    <span className="pulse-ring absolute inline-flex size-full rounded-full bg-mint" />
                    <span className="relative inline-flex size-2 rounded-full bg-mint" />
                  </span>
                  Сейчас открыто · свободен 1 подъёмник
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col justify-between gap-3 border-t border-line pt-6 text-[12px] text-dim sm:flex-row sm:items-center">
            <p>© 2026 ЦЕХ №1 · ООО «Цех 01» · ИНН 7715483920</p>
            <p className="flex items-center gap-2">
              Сделано в Москве, как и наши ремонты
              <Ic name="wrench" className="size-3.5 text-ember" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
