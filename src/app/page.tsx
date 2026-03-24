export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 py-24 text-center">
        <span className="mb-6 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-white/80">
          Canada-first career discovery
        </span>

        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Find career paths that fit your interests, goals, and strengths.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
          Vura helps students and early job seekers explore career options through a guided assessment experience and personalized ranked recommendations.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-full bg-white px-6 py-3 font-medium text-slate-950 transition hover:bg-white/90">
            Start assessment
          </button>
          <button className="rounded-full border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/5">
            Learn more
          </button>
        </div>
      </section>
    </main>
  );
}