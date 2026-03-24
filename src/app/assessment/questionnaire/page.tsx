"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { questionnaireFields } from "@/data/questionnaire";
import { QuestionSelectField } from "@/components/assessment/question-select-field";
import type { QuestionnaireAnswers } from "@/types/questionnaire";

type IntakeFormData = {
  name: string;
  stage: string;
  goal: string;
  notes: string;
};

export default function QuestionnairePage() {
  const router = useRouter();

  const [intakeData, setIntakeData] = useState<IntakeFormData | null>(null);

  const [answers, setAnswers] = useState<QuestionnaireAnswers>({
    interests: "",
    workStyle: "",
    educationLevel: "",
    peopleOrientation: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const storedIntake = localStorage.getItem("vura-intake");

    if (storedIntake) {
      setIntakeData(JSON.parse(storedIntake) as IntakeFormData);
    }
  }, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const hasMissingAnswer = Object.values(answers).some((value) => !value);

    if (hasMissingAnswer) {
      setErrorMessage("Please answer all questionnaire fields before continuing.");
      return;
    }

    setErrorMessage("");

    localStorage.setItem("vura-questionnaire", JSON.stringify(answers));

    router.push("/assessment/results");
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-3xl px-6 py-24">
        <span className="mb-6 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-white/80">
          Questionnaire
        </span>

        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Next, let&apos;s learn how you like to work.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
          These answers will help Vura start matching you to career paths that
          better fit your preferences and goals.
        </p>

        <div className="mt-10 rounded-3xl border border-white/15 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">Saved intake data</h2>

          {intakeData ? (
            <div className="mt-4 space-y-2 text-white/80">
              <p>
                <span className="font-medium text-white">Name:</span>{" "}
                {intakeData.name}
              </p>
              <p>
                <span className="font-medium text-white">Stage:</span>{" "}
                {intakeData.stage}
              </p>
              <p>
                <span className="font-medium text-white">Top priority:</span>{" "}
                {intakeData.goal}
              </p>
              <p>
                <span className="font-medium text-white">Notes:</span>{" "}
                {intakeData.notes || "None provided"}
              </p>
            </div>
          ) : (
            <p className="mt-4 text-white/70">
              No intake data found yet. Complete the intake step first.
            </p>
          )}
        </div>

        <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
          {questionnaireFields.map((field) => (
  <QuestionSelectField
    key={field.id}
    id={field.id}
    label={field.label}
    placeholder={field.placeholder}
    value={answers[field.id]}
    options={field.options}
    onChange={(value) =>
      setAnswers({
        ...answers,
        [field.id]: value,
      })
    }
  />
))}

          {errorMessage ? (
            <p className="rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {errorMessage}
            </p>
          ) : null}

          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <button
              type="submit"
              className="rounded-full bg-white px-6 py-3 font-medium text-slate-950 transition hover:bg-white/90"
            >
              Continue
            </button>

            <Link
              href="/assessment/intake"
              className="rounded-full border border-white/20 px-6 py-3 text-center font-medium text-white transition hover:bg-white/5"
            >
              Back to intake
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}