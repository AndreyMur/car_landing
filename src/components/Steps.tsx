import { STEPS } from "../lib/data";
import { Ic } from "../lib/icons";
import { Kicker, MaskText, Reveal } from "./ui";

export default function Steps() {
  return (
    <section id="steps" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="pointer-events-none absolute right-[-10%] top-24 size-[420px] rounded-full bg-ember/[0.05] blur-[110px]" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* sticky intro */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Kicker num="03">Регламент работы</Kicker>
              <MaskText
                as="h2"
                className="mt-5 font-display text-[26px] font-extrabold leading-[1.1] sm:text-4xl lg:text-[42px]"
                lines={[<>5 шагов до</>, <span key="s" className="text-ember">готового авто</span>]}
              />
              <Reveal delay={200}>
                <p className="mt-6 max-w-md leading-relaxed text-ash">
                  Прозрачность для нас — не обещание, а процесс. Фикс-смета, фотоотчёты
                  и двойной контроль прописаны в договоре, а не в рекламном буклете.
                </p>
              </Reveal>

              <Reveal delay={300}>
                <div className="glass mt-8 flex gap-4 rounded-[18px] p-5 sm:p-6">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-ember/15 text-ember">
                    <Ic name="doc" className="size-5" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold">Смета фиксируется до начала работ</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-ash">
                      Если по ходу вскроется что-то ещё — сначала показываем, согласуем
                      и только потом делаем. Без «ну, мы там ещё поменяли…».
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={380} className="mt-6 flex flex-wrap gap-2">
                {["Договор", "Фикс-смета", "Фотоотчёт", "ОТК", "Гарантия от 1 года"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-ash transition-colors hover:border-ember/60 hover:text-snow"
                  >
                    {t}
                  </span>
                ))}
              </Reveal>

              <Reveal delay={450} className="mt-9">
                <a
                  href="#quiz"
                  className="glass group inline-flex items-center gap-3 rounded-xl px-6 py-4 font-display text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 hover:border-ember/60"
                >
                  Рассчитать мой ремонт
                  <Ic name="arrowR" className="size-4 text-ember transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Reveal>
            </div>
          </div>

          {/* timeline */}
          <div className="relative lg:col-span-7">
            <div
              className="absolute bottom-6 left-[13px] top-2 w-px bg-gradient-to-b from-ember via-line to-transparent sm:left-[21px]"
              aria-hidden="true"
            />
            <ol className="space-y-6">
              {STEPS.map((st, i) => (
                <li key={st.title} className="relative pl-12 sm:pl-16">
                  <span className="absolute left-0 top-6 grid size-7 place-items-center rounded-full border-2 border-ember bg-ink font-display text-[11px] font-extrabold text-ember shadow-[0_0_18px_rgba(255,106,0,0.4)] sm:size-11 sm:text-sm">
                    {i + 1}
                  </span>

                  <Reveal delay={i * 90}>
                    <div className="glass group rounded-[18px] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ember/50 sm:p-7">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-display text-lg font-bold sm:text-xl">{st.title}</h3>
                        <span
                          className="text-outline-ember hidden select-none font-display text-4xl font-extrabold leading-none opacity-70 transition-opacity duration-300 group-hover:opacity-100 sm:block"
                          aria-hidden="true"
                        >
                          0{i + 1}
                        </span>
                      </div>
                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-ash">{st.text}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {st.tags.map((t) => (
                          <span
                            key={t.label}
                            className={`rounded-full px-3 py-1 text-[10.5px] font-bold uppercase tracking-wider ${
                              t.hot
                                ? "bg-ember/15 text-ember"
                                : "border border-line text-ash"
                            }`}
                          >
                            {t.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>

            <Reveal delay={120}>
              <p className="mt-8 flex items-center gap-3 rounded-[18px] border border-dashed border-line px-6 py-4 text-sm text-ash">
                <Ic name="shield" className="size-5 shrink-0 text-mint" />
                Гарантийный случай? Приезжаете без очереди — устраняем в день обращения.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
