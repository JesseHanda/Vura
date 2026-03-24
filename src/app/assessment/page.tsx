import Link from "next/link";

export default function AssessmentPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
        <span className="mb-6 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-white/80">
          Guided career assessment
        </span>

        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Start discovering career paths that fit you.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
          Vura will guide you through a short assessment about your interests,
          strengths, goals, and preferences, then generate a ranked list of
          career paths that may suit you.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/assessment/intake"
            className="rounded-full bg-white px-6 py-3 font-medium text-slate-950 transition hover:bg-white/90"
          >
            Begin
          </Link>

          <Link
            href="/"
            className="rounded-full border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/5"
          >
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}