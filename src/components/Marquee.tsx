export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <section
      className="relative border-y border-line bg-coal/70 py-5"
      aria-label="Обслуживаемые марки автомобилей"
    >
      <div className="marquee marquee-mask overflow-hidden">
        <div className="marquee-track flex items-center gap-3 pr-3">
          <span className="ml-4 shrink-0 text-[10px] font-bold uppercase tracking-[0.26em] text-dim">
            Работаем с марками
          </span>
          {row.map((b, i) => (
            <span
              key={`${b}-${i}`}
              aria-hidden={i >= items.length}
              className="glass flex shrink-0 items-center gap-3 rounded-full px-5 py-2 font-display text-[13px] font-bold tracking-wide text-ash transition-colors hover:border-ember/60 hover:text-snow"
            >
              <span className="size-1.5 rotate-45 bg-ember" aria-hidden="true" />
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
