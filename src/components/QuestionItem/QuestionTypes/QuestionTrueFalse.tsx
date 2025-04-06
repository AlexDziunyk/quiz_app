import { useEffect, useState } from "react";
import { IQuestion } from "../../../types/api";
import { Radio, Stack, Title } from "@mantine/core";
import { useQuiz } from "../../../context/QuizContext";

interface QuestionTrueFalseProps {
  id: string;
  data: IQuestion;
}

const QuestionTrueFalse = ({ data, id }: QuestionTrueFalseProps) => {
  const { answers, setAnswers } = useQuiz();
  const [options, setOptions] = useState<string[]>([]);

  const handleRadioChange = (value: string) => {
    setOptions([value]);
    setAnswers((prev) => ({ ...prev, [id]: [value] }));
  };

  useEffect(() => {
    if (answers) {
      setOptions(answers[id] ?? []);
    }
  }, []);

  return (
    <div>
      <Title my={"sm"} order={2}>
        {data.questionText}
      </Title>
      <Stack gap={"sm"}>
        <Radio
          checked={options.includes("true")}
          onChange={(e) => handleRadioChange(e.target.value)}
          name={data.id}
          value={"true"}
          label="True"
        />
        <Radio
          checked={options.includes("false")}
          onChange={(e) => handleRadioChange(e.target.value)}
          name={data.id}
          value={"false"}
          label="False"
        />
      </Stack>
    </div>
  );
};

export default QuestionTrueFalse;
