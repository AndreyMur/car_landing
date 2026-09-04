import { useRef, useState } from "react";
import { IMG, REVIEWS } from "../lib/data";
import { Ic } from "../lib/icons";
import { Reveal, SectionHead, Stars } from "./ui";

function BeforeAfter() {
  const [pos, setPos] = useState(56);
  const dragging = useRef(false);
  const boxRef = useRef<HTMLDivElement>(null);

  const update = (clientX: number) => {
    const box = boxRef.current;
    if (!box) return;
    const r = box.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.min(96, Math.max(4, p)));
  };

  return (
    <Reveal delay={120}>
      <div
        ref={boxRef}
        className="group relative select-none overflow-hidden rounded-[22px] border border-line shadow-[0_30px_70px_-30px_rgba(0,0,0,0.8)]"
        style={{ touchAction: "pan-y", cursor: "ew-resize" }}
        onPointerDown={(e) => {
          dragging.current = true;
          e.currentTarget.setPointerCapture(e.pointerId);
          update(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && update(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
      >
        <div className="relative aspect-[16/11] sm:aspect-[21/10]">
          {/* after (base layer) */}
          <img
            src={IMG.after}
            alt="Двигатель после мойки и раскоксовки"
            loading="lazy"
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* before (clipped) */}
          <img
            src={IMG.before}
            alt="Двигатель до мойки"
            loading="lazy"
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          />

          <span className="absolute left-4 top-4 rounded-lg bg-ink/80 px-3 py-1.5 font-display text-[11px] font-bold uppercase tracking-widest text-snow backdrop-blur-sm">
            До
          </span>
          <span className="absolute right-4 top-4 rounded-lg bg-ember px-3 py-1.5 font-display text-[11px] font-bold uppercase tracking-widest text-[#160b02]">
            После
          </span>

          {/* divider + handle */}
          <div
            className="absolute bottom-0 top-0 z-10 w-[2px] bg-snow/85"
            style={{ left: `${pos}%` }}
            role="slider"
            tabIndex={0}
            aria-label="Сравнение до и после"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(pos)}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") setPos((p) => Math.max(4, p - 4));
              if (e.key === "ArrowRight") setPos((p) => Math.min(96, p + 4));
            }}
          >
            <span className="absolute left-1/2 top-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ember text-[#160b02] shadow-[0_0_26px_rgba(255,106,0,0.6)] transition-transform duration-200 group-hover:scale-110">
              <Ic name="swap" className="size-5" />
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
        <p className="text-sm font-semibold">
          Мойка подкапотного пространства и раскоксовка · <span className="text-ash">Kia Ceed, 1 день работы</span>
        </p>
        <p className="flex items-center gap-2 text-[12px] text-dim">
          <Ic name="swap" className="size-4 text-ember" />
          Потяните ползунок
        </p>
      </div>
    </Reveal>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="pointer-events-none absolute left-[-10%] top-40 size-[420px] rounded-full bg-ember/[0.05] blur-[110px]" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          num="05"
          kicker="Отзывы клиентов"
          title={[<>Что говорят после</>, <span key="r" className="text-ember">выдачи ключей</span>]}
        />

        {/* aggregate */}
        <Reveal delay={80}>
          <div className="glass mt-12 flex flex-col gap-8 rounded-[22px] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-6">
              <p className="font-display text-6xl font-extrabold leading-none sm:text-7xl">
                4.9
              </p>
              <div>
                <Stars n={5} className="size-5" />
                <p className="mt-2 text-sm text-ash">
                  <span className="font-bold text-snow">1 240+ отзывов</span> на картах
                </p>
              </div>
            </div>
            <div className="hidden h-16 w-px bg-line lg:block" aria-hidden="true" />
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { name: "Яндекс Карты", score: "4.9", count: "780 отзывов" },
                { name: "2ГИС", score: "4.8", count: "460 отзывов" },
              ].map((p) => (
                <div key={p.name} className="flex items-center gap-3 rounded-xl border border-line bg-ink/50 px-4 py-3">
                  <Stars n={5} className="size-3.5" />
                  <div className="text-[13px]">
                    <span className="font-bold">{p.score}</span>
                    <span className="text-ash"> · {p.name} · {p.count}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="glass flex items-center gap-3 rounded-xl px-5 py-4 text-[13px] font-semibold text-ash">
              <Ic name="shield" className="size-5 shrink-0 text-mint" />
              Отзывы реальных клиентов с номерами заказ-нарядов
            </p>
          </div>
        </Reveal>

        {/* before/after */}
        <div className="mt-10">
          <BeforeAfter />
        </div>

        {/* cards */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 90}>
              <figure className="glass flex h-full flex-col rounded-[18px] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ember/50">
                <Stars n={5} className="size-4" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-snow/90">
                  «{r.text}»
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between gap-3 border-t border-line pt-4">
                  <div>
                    <p className="font-display text-sm font-bold">{r.name}</p>
                    <p className="mt-0.5 text-[12px] text-ash">{r.car}</p>
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-[10.5px] font-bold uppercase tracking-wider text-ash">
                    <span className="size-1.5 rounded-full bg-mint" aria-hidden="true" />
                    проверен
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
