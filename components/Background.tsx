// Fixed decorative backdrop: fading grid, drifting aurora blobs and a film-grain overlay.
export default function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_30%,transparent_100%)]" />
      <div className="absolute -top-48 -left-32 h-[34rem] w-[34rem] rounded-full bg-cyan-300/30 dark:bg-cyan-500/20 blur-[120px] animate-aurora" />
      <div className="absolute top-1/4 -right-48 h-[38rem] w-[38rem] rounded-full bg-violet-300/30 dark:bg-violet-600/20 blur-[130px] animate-aurora [animation-delay:-7s]" />
      <div className="absolute -bottom-48 left-1/4 h-[30rem] w-[30rem] rounded-full bg-fuchsia-300/20 dark:bg-fuchsia-600/10 blur-[120px] animate-aurora [animation-delay:-14s]" />
      <div className="absolute inset-0 bg-noise opacity-[0.04] dark:opacity-[0.05]" />
    </div>
  );
}
