import { IQuestion } from "../../types/api";
import QuestionItem from "../QuestionItem/QuestionItem";

interface StepProps {
  data: IQuestion[];
}

const Step = ({ data }: StepProps) => {
  return (
    <div>
      {data.map(item => <QuestionItem key={item.id} data={item} />)}
    </div>
  );
};

export default Step;
