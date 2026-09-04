import { CONTACTS } from "../lib/data";
import { Ic } from "../lib/icons";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ink/90 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <a
          href={CONTACTS.phoneHref}
          className="flex items-center justify-center gap-2.5 rounded-xl border border-line py-3.5 font-display text-[13px] font-bold text-snow transition-colors active:border-ember"
        >
          <Ic name="phone" className="size-4.5 text-ember" />
          Позвонить
        </a>
        <a
          href="#callback"
          className="btn-shine flex items-center justify-center rounded-xl bg-ember py-3.5 font-display text-[13px] font-bold uppercase tracking-wide text-[#160b02] shadow-[0_0_24px_rgba(255,106,0,0.35)]"
        >
          Записаться
        </a>
      </div>
    </div>
  );
}
