"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ProfileSummary } from "@/components/assessment/profile-summary";
import { CareerMatchCard } from "@/components/assessment/career-match-card";

import {
  IntakeFormData,
  QuestionnaireAnswers,
  recommendCareers,
  RankedCareer,
} from "@/lib/recommend-careers";


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
            <ProfileSummary
              intakeData={intakeData}
              questionnaireAnswers={questionnaireAnswers}
            />

            <div className="mt-12 space-y-6">
              {rankedCareers.map((career, index) => (
                <CareerMatchCard
                  key={career.id}
                  career={career}
                  rank={index + 1}
                />
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