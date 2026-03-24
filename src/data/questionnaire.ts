import type { QuestionnaireField } from "@/types/questionnaire";

export const questionnaireFields: QuestionnaireField[] = [
  {
    id: "interests",
    label: "Which area sounds most interesting to you right now?",
    placeholder: "Select one",
    options: [
      { value: "technology", label: "Technology and software" },
      { value: "health", label: "Health and healthcare" },
      { value: "business", label: "Business and finance" },
      { value: "creative", label: "Creative and design work" },
      {
        value: "skilled-trades",
        label: "Skilled trades and hands-on work",
      },
      { value: "science", label: "Science and research" },
      {
        value: "education",
        label: "Education and helping others learn",
      },
    ],
  },
  {
    id: "workStyle",
    label: "What kind of work environment do you prefer?",
    placeholder: "Select one",
    options: [
      { value: "structured", label: "Structured and predictable" },
      { value: "flexible", label: "Flexible and varied" },
      { value: "independent", label: "Mostly independent" },
      { value: "collaborative", label: "Highly collaborative" },
    ],
  },
  {
    id: "educationLevel",
    label: "How much additional education or training are you open to?",
    placeholder: "Select one",
    options: [
      { value: "minimal", label: "As little as possible" },
      { value: "short", label: "Short certification or diploma" },
      {
        value: "college-university",
        label: "College or university is fine",
      },
      {
        value: "extended",
        label: "I am open to longer training if the fit is right",
      },
    ],
  },
  {
    id: "peopleOrientation",
    label: "Which sounds more like you?",
    placeholder: "Select one",
    options: [
      {
        value: "people-focused",
        label: "I enjoy working closely with people",
      },
      {
        value: "balanced",
        label: "I like a balance of people and solo work",
      },
      {
        value: "independent",
        label: "I prefer mostly independent work",
      },
    ],
  },
];