import type { RankedCareer } from "@/lib/recommend-careers";

type CareerMatchCardProps = {
  career: RankedCareer;
  rank: number;
};

export function CareerMatchCard({
  career,
  rank,
}: CareerMatchCardProps) {
  return (
    <article className="rounded-3xl border border-white/15 bg-white/5 p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm text-white/60">Rank #{rank}</p>
          <h2 className="mt-1 text-2xl font-semibold">{career.title}</h2>
          <p className="mt-1 text-sm text-white/60">{career.category}</p>
        </div>

        <div className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white">
          Match score: {career.score}
        </div>
      </div>

      <p className="mt-4 text-white/80">{career.description}</p>

      <div className="mt-5">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-white/70">
          Why it matches
        </h3>
        <ul className="mt-3 space-y-2 text-white/80">
          {career.reasons.map((reason) => (
            <li key={reason}>• {reason}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}