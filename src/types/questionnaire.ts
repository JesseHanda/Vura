export type QuestionnaireFieldOption = {
  value: string;
  label: string;
};

export type QuestionnaireField = {
  id: "interests" | "workStyle" | "educationLevel" | "peopleOrientation";
  label: string;
  placeholder: string;
  options: QuestionnaireFieldOption[];
};

export type QuestionnaireAnswers = {
  interests: string;
  workStyle: string;
  educationLevel: string;
  peopleOrientation: string;
};