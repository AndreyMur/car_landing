import { EQUIP, IMG, TEAM } from "../lib/data";
import { Ic } from "../lib/icons";
import type { IconName } from "../lib/icons";
import { Reveal, SectionHead } from "./ui";

export default function Team() {
  return (
    <section id="team" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          num="04"
          kicker="Команда и оборудование"
          title={[<>Люди, которым не страшно</>, <span key="t" className="text-ember">оставить ключи</span>]}
          sub="Каждый мастер сертифицирован по своему направлению и отвечает за работу подписью в наряд-заказе. Средний стаж команды — 10 лет."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          {/* photo */}
          <Reveal className="lg:col-span-5">
            <div className="group relative overflow-hidden rounded-[22px] border border-line">
              <img
                src={IMG.team}
                alt="Команда мастеров ЦЕХ №1 в цехе"
                loading="lazy"
                className="aspect-[4/3.4] w-full object-cover transition-transform duration-[2.2s] ease-out group-hover:scale-[1.05]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" aria-hidden="true" />
              <div className="glass absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-xl p-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-ember/15 text-ember">
                  <Ic name="gauge" className="size-5" />
                </span>
                <div>
                  <p className="font-display text-sm font-bold">Средний стаж — 10 лет</p>
                  <p className="text-[11px] text-ash">сертификаты ZF · Autel University · Hunter</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* roster */}
          <div className="lg:col-span-7">
            <ul>
              {TEAM.map((m, i) => (
                <Reveal key={m.name} delay={i * 80}>
                  <li className="group flex items-center gap-4 rounded-2xl border-b border-line px-3 py-5 transition-all duration-300 hover:border-ember/40 hover:bg-panel/70 sm:gap-6 sm:px-5">
                    <span className="grid size-14 shrink-0 place-items-center rounded-xl border border-line bg-ink font-display text-sm font-extrabold text-ember transition-all duration-300 group-hover:border-ember/60 group-hover:shadow-[0_0_18px_rgba(255,106,0,0.25)]">
                      {m.initials}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline gap-x-3">
                        <p className="font-display text-base font-bold">{m.name}</p>
                        <span className="rounded-full bg-ember/12 px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wider text-ember">
                          {m.exp}
                        </span>
                      </div>
                      <p className="mt-0.5 text-sm font-semibold text-ash">{m.role}</p>
                      <p className="mt-1 hidden text-[12px] text-dim sm:block">{m.note}</p>
                    </div>
                    <Ic
                      name="wrench"
                      className="size-5 shrink-0 text-dim opacity-0 transition-all duration-300 group-hover:text-ember group-hover:opacity-100"
                    />
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={200}>
              <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.24em] text-dim">
                Оборудование цеха — листайте →
              </p>
            </Reveal>
          </div>
        </div>

        {/* equipment horizontal scroll */}
        <div className="scroll-thin -mx-4 mt-6 flex snap-x gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0">
          {EQUIP.map((e, i) => (
            <Reveal key={e.name} delay={i * 60} className="snap-start">
              <div className="glass group flex h-full w-[248px] shrink-0 flex-col gap-3 rounded-[18px] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-ember/50">
                <span className="grid size-11 place-items-center rounded-xl border border-line bg-ink/70 text-ember transition-transform duration-300 group-hover:-rotate-6">
                  <Ic name={e.icon as IconName} className="size-5" />
                </span>
                <p className="text-sm font-bold leading-snug">{e.name}</p>
                <p className="mt-auto text-[11.5px] font-semibold uppercase tracking-wider text-dim">
                  {e.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
