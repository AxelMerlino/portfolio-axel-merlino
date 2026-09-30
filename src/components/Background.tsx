export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[var(--bg)]" />
      <div className="absolute -top-24 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-sky-500/15 blur-3xl dark:bg-sky-500/10" />
      <div className="absolute top-1/3 -right-24 h-[22rem] w-[22rem] rounded-full bg-violet-500/10 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.22] dark:opacity-[0.14]"
        style={{
          backgroundImage:
            'linear-gradient(to right, color-mix(in srgb, var(--fg) 12%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--fg) 12%, transparent) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse at center, black 35%, transparent 80%)',
        }}
      />
    </div>
  )
}
