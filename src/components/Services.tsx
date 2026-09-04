import { BENTO } from "../lib/data";
import { Ic } from "../lib/icons";
import type { IconName } from "../lib/icons";
import { Reveal, SectionHead } from "./ui";

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          num="02"
          kicker="Услуги цеха"
          title={[<>Полный цикл —</>, <span key="b" className="text-ember">от ТО до кузова</span>]}
          sub="9 направлений под одной крышей: не нужно возить машину по разным мастерам. Запчасти — оригинал или проверенные аналоги на выбор, с документами."
          right={
            <a
              href="#quiz"
              className="glass group inline-flex items-center gap-3 rounded-xl px-5 py-3.5 font-display text-[13px] font-bold text-snow transition-all duration-300 hover:border-ember/60 hover:shadow-[0_0_24px_rgba(255,106,0,0.2)]"
            >
              Рассчитать моё авто
              <Ic name="arrowR" className="size-4 text-ember transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          }
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {BENTO.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 70} className={s.span}>
              <article
                className={`group relative flex h-full flex-col overflow-hidden rounded-[20px] border border-line bg-panel/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ember/60 hover:shadow-[0_16px_48px_-16px_rgba(255,106,0,0.3)] ${
                  s.img ? "min-h-[300px] justify-end sm:min-h-[340px]" : "min-h-[240px]"
                }`}
              >
                {s.img && (
                  <>
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10" aria-hidden="true" />
                  </>
                )}

                <span className="absolute right-5 top-5 font-display text-[11px] font-bold text-dim transition-colors duration-300 group-hover:text-ember">
                  /{String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative">
                  <span className="mb-5 grid size-12 place-items-center rounded-xl border border-line bg-ink/70 text-ash backdrop-blur-sm transition-all duration-300 group-hover:-rotate-6 group-hover:border-ember/60 group-hover:text-ember">
                    <Ic name={s.icon as IconName} className="size-6" />
                  </span>

                  <h3 className={`font-display font-bold ${s.img ? "text-xl sm:text-2xl" : "text-lg"}`}>
                    {s.title}
                  </h3>
                  <p className={`mt-2.5 text-[13px] leading-relaxed text-ash ${s.img ? "max-w-md" : ""}`}>
                    {s.desc}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-line/70 pt-4">
                    <p className="font-display text-base font-extrabold">
                      {s.price}
                      <span className="ml-2.5 text-[11px] font-semibold text-dim">· {s.time}</span>
                    </p>
                    <span className="grid size-9 place-items-center rounded-full border border-line text-ash opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:border-ember group-hover:text-ember group-hover:opacity-100 -translate-x-2">
                      <Ic name="arrowR" className="size-4" />
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}

          {/* CTA banner cell */}
          <Reveal delay={140} className="sm:col-span-2 lg:col-span-6">
            <div className="relative flex flex-col items-start gap-5 overflow-hidden rounded-[20px] border border-ember/35 bg-gradient-to-r from-ember/[0.14] via-ember/[0.05] to-transparent p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div className="hazard absolute inset-y-0 left-0 w-1.5 opacity-80" aria-hidden="true" />
              <div>
                <h3 className="font-display text-lg font-bold sm:text-xl">
                  Не нашли свою проблему в списке?
                </h3>
                <p className="mt-1.5 max-w-xl text-sm text-ash">
                  Опишите симптомы — мастер-приёмщик скажет, куда смотреть и сколько это
                  примерно стоит, ещё до визита. Бесплатно.
                </p>
              </div>
              <a
                href="#callback"
                className="btn-shine inline-flex shrink-0 items-center gap-2.5 rounded-xl bg-ember px-6 py-3.5 font-display text-[13px] font-bold uppercase tracking-wide text-[#160b02] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(255,106,0,0.5)]"
              >
                Спросить мастера
                <Ic name="arrowR" className="size-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
