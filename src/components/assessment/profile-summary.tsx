import { getOptionLabel, goalOptions, stageOptions } from "@/data/intake";
import { getQuestionnaireOptionLabel } from "@/data/questionnaire";
import type { IntakeFormData } from "@/types/intake";
import type { QuestionnaireAnswers } from "@/types/questionnaire";

type ProfileSummaryProps = {
  intakeData: IntakeFormData;
  questionnaireAnswers: QuestionnaireAnswers;
};

export function ProfileSummary({
  intakeData,
  questionnaireAnswers,
}: ProfileSummaryProps) {
  return (
    <div className="mt-10 rounded-3xl border border-white/15 bg-white/5 p-6">
      <h2 className="text-xl font-semibold">Your profile summary</h2>

      <div className="mt-4 space-y-2 text-white/80">
        <p>
          <span className="font-medium text-white">Name:</span>{" "}
          {intakeData.name}
        </p>
        <p>
          <span className="font-medium text-white">Current stage:</span>{" "}
          {getOptionLabel(stageOptions, intakeData.stage)}
        </p>
        <p>
          <span className="font-medium text-white">Top priority:</span>{" "}
          {getOptionLabel(goalOptions, intakeData.goal)}
        </p>
        <p>
          <span className="font-medium text-white">Interest area:</span>{" "}
          {getQuestionnaireOptionLabel("interests", questionnaireAnswers.interests)}
        </p>
        <p>
          <span className="font-medium text-white">Preferred work style:</span>{" "}
          {getQuestionnaireOptionLabel("workStyle", questionnaireAnswers.workStyle)}
        </p>
        <p>
          <span className="font-medium text-white">Education openness:</span>{" "}
          {getQuestionnaireOptionLabel(
            "educationLevel",
            questionnaireAnswers.educationLevel,
          )}
        </p>
        <p>
          <span className="font-medium text-white">People orientation:</span>{" "}
          {getQuestionnaireOptionLabel(
            "peopleOrientation",
            questionnaireAnswers.peopleOrientation,
          )}
        </p>
        <p>
          <span className="font-medium text-white">Notes:</span>{" "}
          {intakeData.notes || "None provided"}
        </p>
      </div>
    </div>
  );
}