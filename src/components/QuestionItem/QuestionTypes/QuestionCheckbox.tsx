import { useState } from "react";
import { IQuestion } from "../../../types/api";
import { Checkbox } from "@mantine/core";

interface QuestionCheckboxProps {
  data: IQuestion;
}

const QuestionCheckbox = ({ data }: QuestionCheckboxProps) => {
  const [options, setOptions] = useState<string[]>([]);

  const handleCheckboxChange = (value: string) => {
    if (options.includes(value)) {
      setOptions((prev) => prev.filter((item) => item !== value));
      return;
    }
    setOptions((prev) => [...prev, value]);
  };

  return (
    <div>
      <h2>{data.questionText}</h2>
      <div>
        {data.possibleAnswers.map((item) => (
          <Checkbox
            label={item}
            value={item}
            onChange={(e) => handleCheckboxChange(e.target.value)}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionCheckbox;
