"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

type IntakeFormData = {
  name: string;
  stage: string;
  goal: string;
  notes: string;
};

function isValidName(name: string) {
  const trimmedName = name.trim();
  const nameRegex = /^[A-Za-z][A-Za-z\s'-]*$/;

  return nameRegex.test(trimmedName);
}

export default function IntakePage() {
  const router = useRouter();

  const [formData, setFormData] = useState<IntakeFormData>({
    name: "",
    stage: "",
    goal: "",
    notes: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formData.name.trim() || !formData.stage || !formData.goal) {
      setErrorMessage("Please complete all required fields before continuing.");
      return;
    }

    if (!isValidName(formData.name)) {
      setErrorMessage(
        "Please enter a valid first name or nickname using letters, spaces, apostrophes, or hyphens only.",
      );
      return;
    }

    setErrorMessage("");

    const cleanedFormData: IntakeFormData = {
      name: formData.name.trim(),
      stage: formData.stage,
      goal: formData.goal,
      notes: formData.notes.trim(),
    };

    localStorage.setItem("vura-intake", JSON.stringify(cleanedFormData));
    router.push("/assessment/questionnaire");
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-24">
        <span className="mb-6 w-fit rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-white/80">
          Assessment intake
        </span>

        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Tell us a bit about yourself.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
          This first step helps Vura understand your stage, priorities, and
          goals before generating more tailored career questions.
        </p>

        <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-white"
            >
              First name or nickname
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter a name"
              value={formData.name}
              onChange={(event) =>
                setFormData({ ...formData, name: event.target.value })
              }
              className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/35 outline-none transition focus:border-white/30"
            />
          </div>

          <div>
            <label
              htmlFor="stage"
              className="mb-2 block text-sm font-medium text-white"
            >
              Where are you right now?
            </label>
            <select
              id="stage"
              name="stage"
              value={formData.stage}
              onChange={(event) =>
                setFormData({ ...formData, stage: event.target.value })
              }
              className="w-full rounded-2xl border border-white/15 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-white/30"
            >
              <option value="" disabled>
                Select your current stage
              </option>
              <option value="high-school">High school student</option>
              <option value="college">College student</option>
              <option value="university">University student</option>
              <option value="early-career">Early career</option>
              <option value="career-change">Considering a career change</option>
              <option value="unsure">Not sure</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="goal"
              className="mb-2 block text-sm font-medium text-white"
            >
              What matters most to you right now?
            </label>
            <select
              id="goal"
              name="goal"
              value={formData.goal}
              onChange={(event) =>
                setFormData({ ...formData, goal: event.target.value })
              }
              className="w-full rounded-2xl border border-white/15 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-white/30"
            >
              <option value="" disabled>
                Select your top priority
              </option>
              <option value="income">Strong income potential</option>
              <option value="stability">Job stability</option>
              <option value="interest">Finding something I enjoy</option>
              <option value="balance">Work-life balance</option>
              <option value="impact">Helping people / making an impact</option>
              <option value="growth">Long-term career growth</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="notes"
              className="mb-2 block text-sm font-medium text-white"
            >
              Anything else you want Vura to consider?
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              placeholder="Optional: interests, constraints, concerns, or goals"
              value={formData.notes}
              onChange={(event) =>
                setFormData({ ...formData, notes: event.target.value })
              }
              className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/35 outline-none transition focus:border-white/30"
            />
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
              href="/assessment"
              className="rounded-full border border-white/20 px-6 py-3 text-center font-medium text-white transition hover:bg-white/5"
            >
              Back
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}