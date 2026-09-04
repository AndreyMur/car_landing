import { useRef, useState } from "react";
import {
  BRANDS,
  CONTACTS,
  QUIZ_SERVICES,
  URGENCY,
  fmt,
  round100,
} from "../lib/data";
import { useCountUp, useInView } from "../lib/hooks";
import { Ic } from "../lib/icons";
import type { IconName } from "../lib/icons";
import { Reveal, SectionHead } from "./ui";

const QUESTIONS = ["Марка", "Модель", "Что делаем", "Когда удобно"];

function Opt({
  selected,
  onClick,
  children,
  sub,
  icon,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
  sub?: string;
  icon?: IconName;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`group flex flex-col items-start gap-1.5 rounded-xl border px-4 py-3.5 text-left transition-all duration-200 hover:-translate-y-0.5 ${
        selected
          ? "border-ember bg-ember/10 shadow-[0_0_24px_rgba(255,106,0,0.25)]"
          : "border-line bg-ink/50 hover:border-ember/60"
      }`}
    >
      {icon && (
        <Ic
          name={icon}
          className={`size-6 transition-colors ${selected ? "text-ember" : "text-ash group-hover:text-ember"}`}
        />
      )}
      <span className={`text-sm font-bold ${selected ? "text-snow" : "text-ash group-hover:text-snow"}`}>
        {children}
      </span>
      {sub && <span className="text-[11px] text-dim">{sub}</span>}
    </button>
  );
}

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [brandIdx, setBrandIdx] = useState<number | null>(null);
  const [model, setModel] = useState<string | null>(null);
  const [serviceId, setServiceId] = useState<string | null>(null);
  const [urgencyId, setUrgencyId] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [panelRef, panelInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  const advance = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStep((s) => s + 1), 260);
  };

  const pickBrand = (i: number) => {
    setBrandIdx(i);
    setModel(null);
    advance();
  };

  const reset = () => {
    setStep(0);
    setBrandIdx(null);
    setModel(null);
    setServiceId(null);
    setUrgencyId(null);
  };

  const brand = brandIdx !== null ? BRANDS[brandIdx] : null;
  const service = QUIZ_SERVICES.find((s) => s.id === serviceId) ?? null;
  const urgency = URGENCY.find((u) => u.id === urgencyId) ?? null;

  const result =
    step >= 4 && brand && service && urgency
      ? {
          brand,
          service,
          urgency,
          min: round100(service.base[0] * brand.k * urgency.k),
          max: round100(service.base[1] * brand.k * urgency.k),
        }
      : null;

  const minAnimated = useCountUp(result?.min ?? 0, panelInView && Boolean(result), 1300);
  const maxAnimated = useCountUp(result?.max ?? 0, panelInView && Boolean(result), 1600);

  const urgDelta = (k: number) =>
    k > 1 ? `+${Math.round((k - 1) * 100)}%` : k < 1 ? `−${Math.round((1 - k) * 100)}%` : "без наценки";

  return (
    <section id="quiz" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="pointer-events-none absolute left-[-12%] top-1/3 size-[480px] rounded-full bg-ember/[0.06] blur-[120px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          num="01"
          kicker="Калькулятор стоимости"
          title={[<>Сколько стоит</>, <span key="a" className="text-ember">ваш ремонт?</span>]}
          sub="Четыре коротких вопроса — и увидите честную вилку цены по вашей марке. Без звонков, регистрации и спама."
          right={
            <p className="glass flex items-center gap-2.5 rounded-xl px-4 py-3 text-[13px] font-semibold text-ash">
              <Ic name="clock" className="size-4 text-ember" />
              ≈ 30 секунд
            </p>
          }
        />

        <Reveal delay={120}>
          <div
            ref={panelRef}
            className="glass relative mt-10 overflow-hidden rounded-[24px] p-5 sm:p-8 lg:p-10"
          >
            <div className="hazard absolute inset-x-0 top-0 h-1.5 opacity-90" aria-hidden="true" />

            {/* progress */}
            <div className="flex items-center justify-between gap-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-ash">
                {result ? (
                  <span className="text-ember">Расчёт готов</span>
                ) : (
                  <>
                    Шаг <span className="text-snow">{step + 1}</span> из 4 ·{" "}
                    <span className="text-snow">{QUESTIONS[step]}</span>
                  </>
                )}
              </p>
              <div className="flex max-w-[240px] flex-1 gap-1.5 sm:max-w-[320px]">
                {QUESTIONS.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                      i < step || result ? "bg-ember" : i === step ? "bg-ember/45" : "bg-line"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div key={step} className="step-in mt-8">
              {/* STEP 0 — brand */}
              {step === 0 && (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                  {BRANDS.map((b, i) => (
                    <Opt key={b.name} selected={brandIdx === i} onClick={() => pickBrand(i)}>
                      {b.name}
                      <span className="mt-0.5 block text-[11px] font-medium text-dim">
                        {b.models.length} моделей
                      </span>
                    </Opt>
                  ))}
                </div>
              )}

              {/* STEP 1 — model */}
              {step === 1 && brand && (
                <div>
                  <p className="mb-4 text-sm text-ash">
                    Марка: <span className="font-bold text-snow">{brand.name}</span> — выберите модель
                  </p>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                    {brand.models.map((m) => (
                      <Opt
                        key={m}
                        selected={model === m}
                        onClick={() => {
                          setModel(m);
                          advance();
                        }}
                        icon="car"
                      >
                        {m}
                      </Opt>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2 — service */}
              {step === 2 && brand && model && (
                <div>
                  <p className="mb-4 text-sm text-ash">
                    <span className="font-bold text-snow">{brand.name} {model}</span> — что нужно сделать?
                  </p>
                  <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                    {QUIZ_SERVICES.map((s) => (
                      <Opt
                        key={s.id}
                        selected={serviceId === s.id}
                        onClick={() => {
                          setServiceId(s.id);
                          advance();
                        }}
                        icon={s.icon as IconName}
                        sub={`от ${fmt(s.base[0])} ₽ · ${s.note}`}
                      >
                        {s.title}
                      </Opt>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 3 — urgency */}
              {step === 3 && (
                <div>
                  <p className="mb-4 text-sm text-ash">Когда вам удобно записаться?</p>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {URGENCY.map((u) => (
                      <Opt
                        key={u.id}
                        selected={urgencyId === u.id}
                        onClick={() => {
                          setUrgencyId(u.id);
                          advance();
                        }}
                        icon="clock"
                        sub={`${u.note} · ${urgDelta(u.k)}`}
                      >
                        {u.label}
                      </Opt>
                    ))}
                  </div>
                </div>
              )}

              {/* RESULT */}
              {result && (
                <div className="grid gap-10 lg:grid-cols-2">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-ash">
                      Ваш расчёт · {result.brand.name} {model}
                    </p>
                    <p className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
                      {minAnimated}
                      <span className="mx-2 text-dim">—</span>
                      {maxAnimated} <span className="text-ember">₽</span>
                    </p>

                    <dl className="mt-7 space-y-3 border-t border-line pt-6 text-sm">
                      <div className="flex items-center justify-between gap-4">
                        <dt className="text-ash">{result.service.title}</dt>
                        <dd className="font-semibold">
                          {fmt(result.service.base[0])}–{fmt(result.service.base[1])} ₽
                        </dd>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <dt className="text-ash">Коэффициент марки {result.brand.name}</dt>
                        <dd className="font-semibold">×{result.brand.k}</dd>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <dt className="text-ash">Запись «{result.urgency.label.toLowerCase()}»</dt>
                        <dd className="font-semibold text-ember">{urgDelta(result.urgency.k)}</dd>
                      </div>
                    </dl>

                    <ul className="mt-7 space-y-2.5">
                      {[
                        "Диагностика — в подарок при ремонте у нас",
                        "Смета фиксируется в договоре до начала работ",
                        "Гарантия от 1 года на работы и запчасти",
                        "Фотоотчёт каждого этапа в мессенджер",
                      ].map((t) => (
                        <li key={t} className="flex items-start gap-2.5 text-[13px] font-medium text-ash">
                          <Ic name="check" className="mt-0.5 size-4 shrink-0 text-mint" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col justify-center gap-4 rounded-[20px] border border-ember/25 bg-ember/[0.06] p-6 sm:p-8">
                    <p className="font-display text-lg font-bold leading-snug sm:text-xl">
                      Забронировать это время и цену?
                    </p>
                    <p className="text-sm leading-relaxed text-ash">
                      Расчёт предварительный. Точную сумму зафиксируем в смете после
                      диагностики — и она <span className="font-semibold text-snow">не изменится</span>.
                    </p>
                    <a
                      href="#callback"
                      className="btn-shine group mt-2 inline-flex items-center justify-center gap-3 rounded-xl bg-ember px-6 py-4 font-display text-sm font-bold uppercase tracking-wide text-[#160b02] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_36px_rgba(255,106,0,0.55)]"
                    >
                      Записаться на ремонт
                      <Ic name="arrowR" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                    <a
                      href={CONTACTS.phoneHref}
                      className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-line px-6 py-3.5 font-display text-sm font-bold text-snow transition-colors hover:border-ember/60"
                    >
                      <Ic name="phone" className="size-4 text-ember" />
                      {CONTACTS.phoneDisplay}
                    </a>
                    <p className="text-center text-[11px] text-dim">
                      Не уверены, что именно сломалось? Начните с бесплатной диагностики.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* nav row */}
            <div className="mt-8 flex items-center justify-between border-t border-line/70 pt-5">
              {step > 0 ? (
                <button
                  type="button"
                  onClick={() => (result ? setStep(3) : setStep((s) => s - 1))}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-ash transition-colors hover:text-snow"
                >
                  <Ic name="arrowR" className="size-4 rotate-180" />
                  {result ? "Изменить ответы" : "Назад"}
                </button>
              ) : (
                <span className="text-[12px] text-dim">Нажимайте на варианты — переход автоматический</span>
              )}
              {step > 0 && !result && (
                <button
                  type="button"
                  onClick={reset}
                  className="text-[12px] font-semibold text-dim underline-offset-4 transition-colors hover:text-ember hover:underline"
                >
                  Начать заново
                </button>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
