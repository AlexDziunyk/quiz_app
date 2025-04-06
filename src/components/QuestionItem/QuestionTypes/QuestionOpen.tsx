import { TextInput, Title } from "@mantine/core";
import { IQuestion } from "../../../types/api";
import { useEffect, useState } from "react";
import { useQuiz } from "../../../context/QuizContext";

interface QuestionScaleProps {
  id: string;
  data: IQuestion;
}

const QuestionOpen = ({ id, data }: QuestionScaleProps) => {
  const { answers, setAnswers } = useQuiz();
  const [option, setOption] = useState<string>("");

  const handleInputChange = (value: string) => {
    setOption(value);
    setAnswers((prev) => ({ ...prev, [id]: [value] }));
  };

  useEffect(() => {
    if (answers && answers[id]) {
      setOption(answers[id][0] ?? "");
    }
  }, []);

  return (
    <div>
      <Title my={"sm"} order={2}>
        {data.questionText}
      </Title>
      <TextInput
        value={option}
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder="Write your anser in here"
      />
    </div>
  );
};

export default QuestionOpen;
