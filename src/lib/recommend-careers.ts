import { Career, careers } from "@/data/careers";

export type IntakeFormData = {
  name: string;
  stage: string;
  goal: string;
  notes: string;
};

export type QuestionnaireAnswers = {
  interests: string;
  workStyle: string;
  educationLevel: string;
  peopleOrientation: string;
};

export type RankedCareer = Career & {
  score: number;
  reasons: string[];
};

function includesMatch(values: string[], selectedValue: string) {
  return values.includes(selectedValue);
}

export function recommendCareers(
  intakeData: IntakeFormData,
  answers: QuestionnaireAnswers,
) {
  const rankedCareers: RankedCareer[] = careers.map((career) => {
    let score = 0;
    const reasons: string[] = [];

    if (includesMatch(career.interests, answers.interests)) {
      score += 3;
      reasons.push("Matches your current interest area");
    }

    if (includesMatch(career.workStyles, answers.workStyle)) {
      score += 2;
      reasons.push("Fits your preferred work environment");
    }

    if (includesMatch(career.educationLevels, answers.educationLevel)) {
      score += 2;
      reasons.push("Aligns with your training or education preference");
    }

    if (includesMatch(career.peopleOrientation, answers.peopleOrientation)) {
      score += 2;
      reasons.push("Fits how you prefer to work with people");
    }

    if (includesMatch(career.stages, intakeData.stage)) {
      score += 1;
      reasons.push("Makes sense for your current stage");
    }

    if (includesMatch(career.goals, intakeData.goal)) {
      score += 2;
      reasons.push("Supports your current top priority");
    }

    return {
      ...career,
      score,
      reasons,
    };
  });

  return rankedCareers.sort((a, b) => b.score - a.score).slice(0, 5);
}