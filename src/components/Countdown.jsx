import { event } from "../data";
import { useCountdown } from "../useCountdown";
import { Confetti } from "./Effects";

function Box({ value, label }) {
  return (
    <div className="glass flex flex-1 flex-col items-center rounded-2xl py-3 sm:py-5">
      <span className="font-display text-3xl font-bold tabular-nums sm:text-5xl">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-pink-200 sm:text-xs">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const { days, hours, minutes, seconds, done } = useCountdown(event.dateISO);

  return (
    <section className="px-4 py-4 sm:px-8 lg:px-10">
      {done && <Confetti />}
      <div className="glass-strong mx-auto max-w-3xl rounded-3xl p-5 sm:p-8">
        <p className="mb-4 text-center text-sm font-semibold text-white/90 sm:text-lg">
          {done ? "🎉 Today is the day! Congratulations, Lorine! 🎉" : "Counting down to the big day"}
        </p>
        <div className="flex gap-2 sm:gap-4">
          <Box value={days} label="Days" />
          <Box value={hours} label="Hours" />
          <Box value={minutes} label="Mins" />
          <Box value={seconds} label="Secs" />
        </div>
      </div>
    </section>
  );
}
