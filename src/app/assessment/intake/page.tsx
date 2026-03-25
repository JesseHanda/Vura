"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { QuestionSelectField } from "@/components/assessment/question-select-field";
import { TextInputField } from "@/components/assessment/text-input-field";
import { TextareaField } from "@/components/assessment/textarea-field";

import { goalOptions, stageOptions } from "@/data/intake";
import type { IntakeFormData } from "@/types/intake";

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
          <TextInputField
            id="name"
            label="First name or nickname"
            placeholder="Enter a name"
            value={formData.name}
            onChange={(value) => setFormData({ ...formData, name: value })}
          />

          <QuestionSelectField
            id="stage"
            label="Where are you right now?"
            placeholder="Select your current stage"
            value={formData.stage}
            options={stageOptions}
            onChange={(value) => setFormData({ ...formData, stage: value })}
          />

          <QuestionSelectField
            id="goal"
            label="What matters most to you right now?"
            placeholder="Select your top priority"
            value={formData.goal}
            options={goalOptions}
            onChange={(value) => setFormData({ ...formData, goal: value })}
          />

          <TextareaField
            id="notes"
            label="Anything else you want Vura to consider?"
            placeholder="Optional: interests, constraints, concerns, or goals"
            value={formData.notes}
            rows={4}
            onChange={(value) => setFormData({ ...formData, notes: value })}
          />

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