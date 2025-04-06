import { IAnswerType, IQuestion } from "../../types/api";
import QuestionCheckbox from "./QuestionTypes/QuestionCheckbox";
import QuestionTrueFalse from "./QuestionTypes/QuestionTrueFalse";

interface QuestionItemProps {
  data: IQuestion;
}

const QuestionItem = ({ data }: QuestionItemProps) => {
  return (
    <div>
      {data.questionType === IAnswerType.MULTIPLE_CHOICE && (
        <QuestionCheckbox data={data} />
      )}
      {data.questionType === IAnswerType.TRUE_FALSE && (
        <QuestionTrueFalse data={data} />
      )}
    </div>
  );
};

export default QuestionItem;
