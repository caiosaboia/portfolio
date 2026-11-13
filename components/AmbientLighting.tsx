import React from "react";

export function AmbientLighting() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none"
    >
      {/* Top subtle radial glow orb (emerald/cyan accent echoing code & rust terminal energy) */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[36rem] sm:w-[48rem] h-[28rem] rounded-full bg-gradient-to-tr from-emerald-500/10 via-cyan-500/10 to-indigo-500/10 dark:from-emerald-500/[0.08] dark:via-cyan-500/[0.06] dark:to-indigo-500/[0.08] blur-3xl transform-gpu will-change-transform opacity-70 dark:opacity-80" />

      {/* Mid-page ambient glow orb (soft violet/indigo for depth) */}
      <div className="absolute top-[45%] -left-32 w-[30rem] sm:w-[40rem] h-[30rem] rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-600/[0.06] dark:to-purple-600/[0.05] blur-3xl transform-gpu will-change-transform opacity-60 dark:opacity-75" />

      {/* Projects section backdrop ambient glow */}
      <div className="absolute top-[75%] -right-32 w-[32rem] sm:w-[44rem] h-[32rem] rounded-full bg-gradient-to-tl from-zinc-500/10 via-cyan-500/10 to-transparent dark:from-cyan-900/[0.08] dark:via-zinc-800/[0.05] dark:to-transparent blur-3xl transform-gpu will-change-transform opacity-50 dark:opacity-70" />

      {/* Subtle fine radial gradient mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-transparent to-zinc-900/5 dark:to-black/30" />
    </div>
  );
}
