import type { IntakeSelectOption } from "@/types/intake";

export const stageOptions: IntakeSelectOption[] = [
  { value: "high-school", label: "High school student" },
  { value: "college", label: "College student" },
  { value: "university", label: "University student" },
  { value: "early-career", label: "Early career" },
  { value: "career-change", label: "Considering a career change" },
  { value: "unsure", label: "Not sure" },
];

export const goalOptions: IntakeSelectOption[] = [
  { value: "income", label: "Strong income potential" },
  { value: "stability", label: "Job stability" },
  { value: "interest", label: "Finding something I enjoy" },
  { value: "balance", label: "Work-life balance" },
  { value: "impact", label: "Helping people / making an impact" },
  { value: "growth", label: "Long-term career growth" },
];

export function getOptionLabel(
  options: IntakeSelectOption[],
  value: string,
) {
  return options.find((option) => option.value === value)?.label ?? value;
}