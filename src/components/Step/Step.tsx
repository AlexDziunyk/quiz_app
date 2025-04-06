import { IAnswerType, IQuestion } from "../../types/api";
import QuestionCheckbox from "../QuestionItem/QuestionTypes/QuestionCheckbox";
import QuestionOpen from "../QuestionItem/QuestionTypes/QuestionOpen";
import QuestionTrueFalse from "../QuestionItem/QuestionTypes/QuestionTrueFalse";

interface StepProps {
  data: IQuestion[];
  stepId: string;
}

const Step = ({ data }: StepProps) => {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          {item.questionType === IAnswerType.MULTIPLE_CHOICE && (
            <QuestionCheckbox data={item} />
          )}
          {item.questionType === IAnswerType.TRUE_FALSE && (
            <QuestionTrueFalse data={item} />
          )}
          {item.questionType === IAnswerType.OPEN_ENDED && (
            <QuestionOpen data={item} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Step;
