import { useEffect, useState } from "react";
import { IQuestion } from "../../../types/api";
import { Checkbox, Stack, Title } from "@mantine/core";
import { useQuiz } from "../../../context/QuizContext";

interface QuestionCheckboxProps {
  data: IQuestion;
}

const QuestionCheckbox = ({ data }: QuestionCheckboxProps) => {
  const { answers, setAnswers } = useQuiz();
  const [options, setOptions] = useState<string[]>([]);

  const handleCheckboxChange = (value: string) => {
    const currentOptions = options.includes(value)
      ? options.filter((item) => item !== value)
      : [...options, value];

    setOptions(currentOptions);
    setAnswers((prev) => ({ ...prev, [data.id]: currentOptions }));
  };

  useEffect(() => {
    if (answers) {
      setOptions(answers[data.id] ?? []);
    }
  }, []);

  return (
    <div>
      <Title my={"sm"} order={2}>
        {data.questionText}
      </Title>
      <Stack gap={"sm"}>
        {data.possibleAnswers.map((item, index) => (
          <Checkbox
            key={index}
            label={item}
            value={item}
            checked={options.includes(item)}
            onChange={(e) => handleCheckboxChange(e.target.value)}
          />
        ))}
      </Stack>
    </div>
  );
};

export default QuestionCheckbox;
