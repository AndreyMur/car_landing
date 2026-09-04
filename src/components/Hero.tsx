import { useEffect, useState } from "react";
import { IMG } from "../lib/data";
import { useCountUp, useInView, useScramble } from "../lib/hooks";
import { Ic } from "../lib/icons";
import { MaskText, Reveal } from "./ui";

function Stat({
  value,
  decimals = 0,
  suffix = "",
  label,
  delay,
}: {
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
  delay: number;
}) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const display = useCountUp(value, inView, 1600, decimals);
  return (
    <div
      ref={ref}
      className={`rv ${inView ? "rv-in" : ""} border-l-2 border-ember/70 pl-4 sm:pl-5`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="font-display text-3xl font-extrabold leading-none sm:text-4xl">
        {display}
        <span className="text-ember">{suffix}</span>
      </p>
      <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-ash sm:text-xs">
        {label}
      </p>
    </div>
  );
}

function OrbitBadge() {
  return (
    <div className="absolute -top-7 right-2 size-32 sm:-right-7 sm:size-40">
      <div className="glass relative size-full rounded-full">
        <svg viewBox="0 0 120 120" className="spin-slower size-full" aria-hidden="true">
          <defs>
            <path id="ceh-circle" d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0" />
          </defs>
          <text fontSize="9" letterSpacing="2.6" fill="#9AA6B2" fontWeight={700}>
            <textPath href="#ceh-circle">
              ФИКС-СМЕТА · ГАРАНТИЯ ОТ 1 ГОДА · ФОТООТЧЁТ ·
            </textPath>
          </text>
        </svg>
        <span className="absolute inset-0 grid place-items-center">
          <span className="grid size-12 rounded-full bg-ember text-[#160b02] shadow-[0_0_30px_rgba(255,106,0,0.55)] sm:size-14">
            <Ic name="wrench" className="size-6" />
          </span>
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  const [on, setOn] = useState(false);
  useEffect(() => setOn(true), []);
  const kicker = useScramble("АВТОСЕРВИС ПОЛНОГО ЦИКЛА · МОСКВА", on);

  return (
    <section id="top" className="relative overflow-hidden pb-14 pt-28 sm:pt-32 lg:pb-20 lg:pt-44">
      {/* ambient layers */}
      <div className="bg-blueprint pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,#000_35%,transparent_100%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-48 right-[-15%] size-[620px] rounded-full bg-ember/[0.08] blur-[130px]" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-[-30%] left-[-15%] size-[520px] rounded-full bg-steel/[0.05] blur-[120px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* left */}
          <div className="lg:col-span-7">
            <p className="flex items-center gap-3 font-display text-[11px] font-semibold tracking-[0.22em] text-ember sm:text-xs">
              <span className="blink-dot inline-block size-2 rounded-full bg-ember" aria-hidden="true" />
              <span className="min-h-[1em]">{kicker}</span>
            </p>

            <MaskText
              as="h1"
              delay={100}
              className="mt-6 font-display text-[40px] font-extrabold leading-[1.04] tracking-tight sm:text-6xl xl:text-[74px]"
              lines={[
                <>Ремонт</>,
                <>с гарантией</>,
                <span key="e" className="text-ember">от 1 года</span>,
              ]}
            />

            <Reveal delay={420}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-ash sm:text-lg">
                Фиксируем смету в договоре{" "}
                <span className="font-semibold text-snow">до начала работ</span>, присылаем
                фотоотчёт каждого этапа в мессенджер и даём гарантию, которая
                прописана на бумаге, а не на словах.
              </p>
            </Reveal>

            <Reveal delay={520} className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#quiz"
                className="btn-shine group inline-flex items-center gap-3 rounded-xl bg-ember px-7 py-4 font-display text-sm font-bold uppercase tracking-wide text-[#160b02] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_36px_rgba(255,106,0,0.55)]"
              >
                Рассчитать стоимость
                <Ic name="arrowR" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#steps"
                className="glass inline-flex items-center gap-3 rounded-xl px-6 py-4 font-display text-sm font-bold text-snow transition-all duration-300 hover:-translate-y-0.5 hover:border-ember/60"
              >
                Как мы работаем
                <Ic name="arrowD" className="size-4 text-ember" />
              </a>
            </Reveal>

            <Reveal delay={620} className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
              {[
                { icon: "shield" as const, text: "Гарантия — в договоре" },
                { icon: "doc" as const, text: "Фикс-смета до начала работ" },
                { icon: "camera" as const, text: "Фотоотчёт каждого этапа" },
              ].map((t) => (
                <span key={t.text} className="flex items-center gap-2.5 text-[13px] font-semibold text-ash">
                  <Ic name={t.icon} className="size-[18px] text-ember" />
                  {t.text}
                </span>
              ))}
            </Reveal>
          </div>

          {/* right — clean shop photo */}
          <div className="relative lg:col-span-5">
            <Reveal delay={200} className="relative">
              <div className="relative overflow-hidden rounded-[22px] border border-white/10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
                <img
                  src={IMG.hero}
                  alt="Чистый цех автосервиса ЦЕХ №1: автомобиль на подъёмнике, оранжевая подсветка"
                  className="aspect-[4/3.3] w-full object-cover transition-transform duration-[2.5s] ease-out hover:scale-[1.04]"
                  loading="eager"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/20" aria-hidden="true" />
              </div>

              <OrbitBadge />

              <div className="glass float-y absolute -left-3 top-12 flex items-center gap-3 rounded-xl p-3 pr-5 sm:-left-8">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-ember/15 text-ember">
                  <Ic name="doc" className="size-5" />
                </span>
                <span>
                  <span className="block text-[10px] font-semibold uppercase tracking-wider text-ash">
                    Смета зафиксирована
                  </span>
                  <span className="block font-display text-sm font-bold">42 300 ₽ · не изменится</span>
                </span>
              </div>

              <div className="glass float-y2 absolute -bottom-5 right-3 flex items-center gap-3 rounded-xl p-3 pr-5 sm:right-6">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-ember/15 text-ember">
                  <Ic name="camera" className="size-5" />
                </span>
                <span>
                  <span className="block font-display text-sm font-bold">Этап 3 из 5</span>
                  <span className="flex items-center gap-1.5 text-[11px] text-ash">
                    <Ic name="check" className="size-3.5 text-mint" />
                    Фотоотчёт отправлен
                  </span>
                </span>
              </div>
            </Reveal>
          </div>
        </div>

        {/* stats */}
        <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-9 lg:mt-24 lg:grid-cols-4">
          <Stat value={14} label="лет на рынке" delay={0} />
          <Stat value={26500} suffix="+" label="выполненных ремонтов" delay={90} />
          <Stat value={4.9} decimals={1} label="рейтинг на картах" delay={180} />
          <Stat value={98} suffix="%" label="клиентов возвращаются" delay={270} />
        </div>
      </div>
    </section>
  );
}
