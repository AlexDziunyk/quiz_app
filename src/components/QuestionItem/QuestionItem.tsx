import { IAnswerType, IQuestion } from "../../types/api";
import QuestionCheckbox from "./QuestionTypes/QuestionCheckbox";

interface QuestionItemProps {
  data: IQuestion;
}

const QuestionItem = ({ data }: QuestionItemProps) => {
  return (
    <div>
      <div>
        {data.questionType === IAnswerType.MULTIPLE_CHOICE && (
          <QuestionCheckbox data={data} />
        )}
      </div>
    </div>
  );
};

export default QuestionItem;
