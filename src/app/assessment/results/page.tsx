"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  IntakeFormData,
  QuestionnaireAnswers,
  recommendCareers,
  RankedCareer,
} from "@/lib/recommend-careers";

const stageLabels: Record<string, string> = {
  "high-school": "High school student",
  college: "College student",
  university: "University student",
  "early-career": "Early career",
  "career-change": "Considering a career change",
  unsure: "Not sure",
};

const goalLabels: Record<string, string> = {
  income: "Strong income potential",
  stability: "Job stability",
  interest: "Finding something I enjoy",
  balance: "Work-life balance",
  impact: "Helping people / making an impact",
  growth: "Long-term career growth",
};

const interestLabels: Record<string, string> = {
  technology: "Technology and software",
  health: "Health and healthcare",
  business: "Business and finance",
  creative: "Creative and design work",
  "skilled-trades": "Skilled trades and hands-on work",
  science: "Science and research",
  education: "Education and helping others learn",
};

const workStyleLabels: Record<string, string> = {
  structured: "Structured and predictable",
  flexible: "Flexible and varied",
  independent: "Mostly independent",
  collaborative: "Highly collaborative",
};

const educationLevelLabels: Record<string, string> = {
  minimal: "As little as possible",
  short: "Short certification or diploma",
  "college-university": "College or university is fine",
  extended: "Open to longer training if the fit is right",
};

const peopleOrientationLabels: Record<string, string> = {
  "people-focused": "Enjoy working closely with people",
  balanced: "Like a balance of people and solo work",
  independent: "Prefer mostly independent work",
};

function getLabel(labels: Record<string, string>, value: string) {
  return labels[value] ?? value;
}

export default function ResultsPage() {
  const [intakeData, setIntakeData] = useState<IntakeFormData | null>(null);
  const [questionnaireAnswers, setQuestionnaireAnswers] =
    useState<QuestionnaireAnswers | null>(null);
  const [rankedCareers, setRankedCareers] = useState<RankedCareer[]>([]);

  useEffect(() => {
    const storedIntake = localStorage.getItem("vura-intake");
    const storedQuestionnaire = localStorage.getItem("vura-questionnaire");

    if (storedIntake) {
      setIntakeData(JSON.parse(storedIntake) as IntakeFormData);
    }

    if (storedQuestionnaire) {
      setQuestionnaireAnswers(
        JSON.parse(storedQuestionnaire) as QuestionnaireAnswers,
      );
    }
  }, []);

  useEffect(() => {
    if (intakeData && questionnaireAnswers) {
      const results = recommendCareers(intakeData, questionnaireAnswers);
      setRankedCareers(results);
    }
  }, [intakeData, questionnaireAnswers]);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-24">
        <span className="mb-6 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-white/80">
          Results
        </span>

        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Your first Vura career matches
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
          These recommendations are currently generated using structured scoring
          logic based on your intake and questionnaire answers.
        </p>

        {intakeData && questionnaireAnswers ? (
          <>
            <div className="mt-10 rounded-3xl border border-white/15 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">Your profile summary</h2>

              <div className="mt-4 space-y-2 text-white/80">
                <p>
                  <span className="font-medium text-white">Name:</span>{" "}
                  {intakeData.name}
                </p>
                <p>
                  <span className="font-medium text-white">Current stage:</span>{" "}
                  {getLabel(stageLabels, intakeData.stage)}
                </p>
                <p>
                  <span className="font-medium text-white">Top priority:</span>{" "}
                  {getLabel(goalLabels, intakeData.goal)}
                </p>
                <p>
                  <span className="font-medium text-white">Interest area:</span>{" "}
                  {getLabel(interestLabels, questionnaireAnswers.interests)}
                </p>
                <p>
                  <span className="font-medium text-white">Preferred work style:</span>{" "}
                  {getLabel(workStyleLabels, questionnaireAnswers.workStyle)}
                </p>
                <p>
                  <span className="font-medium text-white">
                    Education openness:
                  </span>{" "}
                  {getLabel(
                    educationLevelLabels,
                    questionnaireAnswers.educationLevel,
                  )}
                </p>
                <p>
                  <span className="font-medium text-white">
                    People orientation:
                  </span>{" "}
                  {getLabel(
                    peopleOrientationLabels,
                    questionnaireAnswers.peopleOrientation,
                  )}
                </p>
                <p>
                  <span className="font-medium text-white">Notes:</span>{" "}
                  {intakeData.notes || "None provided"}
                </p>
              </div>
            </div>

            <div className="mt-12 space-y-6">
              {rankedCareers.map((career, index) => (
                <article
                  key={career.id}
                  className="rounded-3xl border border-white/15 bg-white/5 p-6"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm text-white/60">Rank #{index + 1}</p>
                      <h2 className="mt-1 text-2xl font-semibold">
                        {career.title}
                      </h2>
                      <p className="mt-1 text-sm text-white/60">
                        {career.category}
                      </p>
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
              ))}
            </div>
          </>
        ) : (
          <div className="mt-10 rounded-3xl border border-white/15 bg-white/5 p-6 text-white/70">
            Missing assessment data. Please complete the intake and questionnaire
            first.
          </div>
        )}

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/assessment/questionnaire"
            className="rounded-full bg-white px-6 py-3 text-center font-medium text-slate-950 transition hover:bg-white/90"
          >
            Back to questionnaire
          </Link>

          <Link
            href="/"
            className="rounded-full border border-white/20 px-6 py-3 text-center font-medium text-white transition hover:bg-white/5"
          >
            Return home
          </Link>
        </div>
      </section>
    </main>
  );
}