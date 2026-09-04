import { useState } from "react";
import type { FormEvent } from "react";
import { CONTACTS } from "../lib/data";
import { Ic } from "../lib/icons";
import { Kicker, MaskText, Reveal } from "./ui";

const formatPhone = (v: string) => {
  let d = v.replace(/\D/g, "");
  if (d.startsWith("8")) d = "7" + d.slice(1);
  if (!d.startsWith("7") && d.length > 0) d = "7" + d;
  d = d.slice(0, 11);
  if (d.length === 0) return "";
  let out = "+7";
  if (d.length > 1) out += " (" + d.slice(1, 4);
  if (d.length >= 5) out += ") " + d.slice(4, 7);
  if (d.length >= 8) out += "-" + d.slice(7, 9);
  if (d.length >= 10) out += "-" + d.slice(9, 11);
  return out;
};

const MESSENGERS = [
  {
    icon: "wa" as const,
    name: "WhatsApp",
    sub: "отвечаем быстро",
    href: CONTACTS.wa,
    hover: "hover:border-[#25d366]/70 hover:text-[#25d366]",
  },
  {
    icon: "tg" as const,
    name: "Telegram",
    sub: "@ceh01",
    href: CONTACTS.tg,
    hover: "hover:border-[#229ed9]/70 hover:text-[#229ed9]",
  },
  {
    icon: "viber" as const,
    name: "Viber",
    sub: "по номеру",
    href: CONTACTS.viber,
    hover: "hover:border-[#8f7bff]/70 hover:text-[#8f7bff]",
  },
];

export default function Callback() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [car, setCar] = useState("");
  const [note, setNote] = useState("");
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string; agree?: string }>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const next: typeof errors = {};
    if (name.trim().length < 2) next.name = "Укажите имя";
    if (phone.replace(/\D/g, "").length < 11) next.phone = "Введите номер полностью";
    if (!agree) next.agree = "Нужно согласие на обработку данных";
    setErrors(next);
    if (Object.keys(next).length) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 900);
  };

  const resetAll = () => {
    setSent(false);
    setName("");
    setPhone("");
    setCar("");
    setNote("");
    setAgree(false);
    setErrors({});
  };

  return (
    <section id="callback" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="pointer-events-none absolute right-[-12%] top-1/4 size-[520px] rounded-full bg-ember/[0.07] blur-[130px]" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* left */}
          <div className="lg:col-span-6">
            <Kicker num="06">Обратный звонок</Kicker>
            <MaskText
              as="h2"
              className="mt-5 font-display text-[26px] font-extrabold leading-[1.1] sm:text-4xl lg:text-[42px]"
              lines={[<>Оставьте номер —</>, <span key="c" className="text-ember">перезвоним за 15 минут</span>]}
            />
            <Reveal delay={200}>
              <p className="mt-6 max-w-md leading-relaxed text-ash">
                В рабочее время ({CONTACTS.hours.toLowerCase()}) мастер-приёмщик
                свяжется с вами в течение 15 минут. Ночью — ответим в мессенджере.
              </p>
            </Reveal>

            <Reveal delay={300} className="mt-8 grid gap-3 sm:grid-cols-3">
              {MESSENGERS.map((m) => (
                <a
                  key={m.name}
                  href={m.href}
                  target={m.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`glass group flex items-center gap-3 rounded-xl px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 ${m.hover}`}
                >
                  <Ic name={m.icon} className="size-6 shrink-0 text-ash transition-colors group-hover:inherit" />
                  <span>
                    <span className="block font-display text-[13px] font-bold">{m.name}</span>
                    <span className="block text-[10.5px] text-dim">{m.sub}</span>
                  </span>
                </a>
              ))}
            </Reveal>

            <Reveal delay={380} className="mt-9">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-dim">или сразу звоните</p>
              <a
                href={CONTACTS.phoneHref}
                className="mt-2 inline-block font-display text-2xl font-extrabold transition-colors hover:text-ember sm:text-3xl"
              >
                {CONTACTS.phoneDisplay}
              </a>
            </Reveal>
          </div>

          {/* form */}
          <Reveal delay={150} className="lg:col-span-6">
            <div className="glass relative overflow-hidden rounded-[24px] p-6 sm:p-9">
              <div className="hazard absolute inset-x-0 top-0 h-1.5 opacity-90" aria-hidden="true" />

              {sent ? (
                <div className="step-in flex flex-col items-center py-10 text-center">
                  <span className="grid size-20 place-items-center rounded-full border-2 border-mint/60 bg-mint/10">
                    <svg viewBox="0 0 24 24" className="size-9 text-mint" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                      <path className="check-draw" d="m4.5 12.6 5 5L19.5 6.4" />
                    </svg>
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-extrabold">Заявка принята</h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-ash">
                    Мастер перезвонит на {phone} в течение 15 минут в рабочее время.
                    Если удобнее — напишите нам в мессенджер.
                  </p>
                  <button
                    type="button"
                    onClick={resetAll}
                    className="mt-7 rounded-xl border border-line px-6 py-3 font-display text-[13px] font-bold text-snow transition-colors hover:border-ember/60"
                  >
                    Отправить ещё одну заявку
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} noValidate>
                  <p className="font-display text-lg font-bold sm:text-xl">
                    Запись на ремонт или консультацию
                  </p>
                  <p className="mt-1.5 text-[13px] text-ash">Заполните форму — это займёт 20 секунд</p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ваше имя *"
                        aria-label="Ваше имя"
                        className={`field ${errors.name ? "field-err" : ""}`}
                      />
                      {errors.name && <p className="mt-1.5 text-[12px] font-semibold text-[#ff5a3c]">{errors.name}</p>}
                    </div>
                    <div>
                      <input
                        type="tel"
                        inputMode="tel"
                        value={phone}
                        onChange={(e) => setPhone(formatPhone(e.target.value))}
                        placeholder="+7 (___) ___-__-__ *"
                        aria-label="Телефон"
                        className={`field ${errors.phone ? "field-err" : ""}`}
                      />
                      {errors.phone && <p className="mt-1.5 text-[12px] font-semibold text-[#ff5a3c]">{errors.phone}</p>}
                    </div>
                    <div className="sm:col-span-2">
                      <input
                        type="text"
                        value={car}
                        onChange={(e) => setCar(e.target.value)}
                        placeholder="Автомобиль: марка и модель, год"
                        aria-label="Автомобиль"
                        className="field"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <textarea
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Что беспокоит? Например: стук в передней подвеске на мелких кочках"
                        aria-label="Комментарий"
                        rows={3}
                        className="field resize-none"
                      />
                    </div>
                  </div>

                  <label className="mt-5 flex cursor-pointer items-start gap-3 text-[12.5px] leading-snug text-ash">
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                        setAgree((v) => !v);
                      }}
                      className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-md border transition-colors ${
                        agree ? "border-ember bg-ember text-[#160b02]" : "border-line"
                      } ${errors.agree ? "border-[#ff5a3c]" : ""}`}
                      role="checkbox"
                      aria-checked={agree}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === " " || e.key === "Enter") {
                          e.preventDefault();
                          setAgree((v) => !v);
                        }
                      }}
                    >
                      {agree && <Ic name="check" className="size-3.5" />}
                    </span>
                    <span>
                      Согласен на обработку персональных данных. Номер нужен только для
                      звонка — никакого спама и передачи третьим лицам.
                      {errors.agree && <span className="block font-semibold text-[#ff5a3c]">{errors.agree}</span>}
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-shine mt-7 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-ember px-6 py-4 font-display text-sm font-bold uppercase tracking-wide text-[#160b02] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_36px_rgba(255,106,0,0.55)] disabled:translate-y-0 disabled:opacity-70"
                  >
                    {sending ? (
                      <>
                        <span className="size-4 animate-spin rounded-full border-2 border-[#160b02]/30 border-t-[#160b02]" aria-hidden="true" />
                        Отправляем…
                      </>
                    ) : (
                      <>
                        Жду звонка
                        <Ic name="phone" className="size-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
