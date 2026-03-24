"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type IntakeFormData = {
  name: string;
  stage: string;
  goal: string;
  notes: string;
};

type QuestionnaireAnswers = {
  interests: string;
  workStyle: string;
  educationLevel: string;
  peopleOrientation: string;
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

    if (
      !answers.interests ||
      !answers.workStyle ||
      !answers.educationLevel ||
      !answers.peopleOrientation
    ) {
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
          Next, let’s learn how you like to work.
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
          <div>
            <label
              htmlFor="interests"
              className="mb-2 block text-sm font-medium text-white"
            >
              Which area sounds most interesting to you right now?
            </label>
            <select
              id="interests"
              value={answers.interests}
              onChange={(event) =>
                setAnswers({ ...answers, interests: event.target.value })
              }
              className="w-full rounded-2xl border border-white/15 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-white/30"
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="technology">Technology and software</option>
              <option value="health">Health and healthcare</option>
              <option value="business">Business and finance</option>
              <option value="creative">Creative and design work</option>
              <option value="skilled-trades">Skilled trades and hands-on work</option>
              <option value="science">Science and research</option>
              <option value="education">Education and helping others learn</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="workStyle"
              className="mb-2 block text-sm font-medium text-white"
            >
              What kind of work environment do you prefer?
            </label>
            <select
              id="workStyle"
              value={answers.workStyle}
              onChange={(event) =>
                setAnswers({ ...answers, workStyle: event.target.value })
              }
              className="w-full rounded-2xl border border-white/15 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-white/30"
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="structured">Structured and predictable</option>
              <option value="flexible">Flexible and varied</option>
              <option value="independent">Mostly independent</option>
              <option value="collaborative">Highly collaborative</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="educationLevel"
              className="mb-2 block text-sm font-medium text-white"
            >
              How much additional education or training are you open to?
            </label>
            <select
              id="educationLevel"
              value={answers.educationLevel}
              onChange={(event) =>
                setAnswers({ ...answers, educationLevel: event.target.value })
              }
              className="w-full rounded-2xl border border-white/15 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-white/30"
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="minimal">As little as possible</option>
              <option value="short">Short certification or diploma</option>
              <option value="college-university">
                College or university is fine
              </option>
              <option value="extended">
                I am open to longer training if the fit is right
              </option>
            </select>
          </div>

          <div>
            <label
              htmlFor="peopleOrientation"
              className="mb-2 block text-sm font-medium text-white"
            >
              Which sounds more like you?
            </label>
            <select
              id="peopleOrientation"
              value={answers.peopleOrientation}
              onChange={(event) =>
                setAnswers({
                  ...answers,
                  peopleOrientation: event.target.value,
                })
              }
              className="w-full rounded-2xl border border-white/15 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-white/30"
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="people-focused">
                I enjoy working closely with people
              </option>
              <option value="balanced">
                I like a balance of people and solo work
              </option>
              <option value="independent">
                I prefer mostly independent work
              </option>
            </select>
          </div>

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