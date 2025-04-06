import { Group } from "@mantine/core";
import { Button } from "@mantine/core";
import { useQuiz } from "../../context/QuizContext";

interface NavPanelProps {
  page: number;
  pageLength: number;
  questionsIds: string[];
  onSubmit: () => void;
  setError: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const NavPanel = ({
  page,
  pageLength,
  setPage,
  questionsIds,
  setError,
  onSubmit,
}: NavPanelProps) => {
  const { answers } = useQuiz();

  const validateAnswers = () => {
    for (let i = 0; i < questionsIds.length; i++) {
      const item = questionsIds[i];
      if (!answers[item] || answers[item].length === 0) {
        return false;
      }
    }
    return true;
  };

  const handleNextPage = () => {
    if (!validateAnswers()) {
      setError("Answer all on this step!");
      return;
    }
    setError("");
    setPage((prev) => prev + 1);
  };

  const handleSubmit = () => {
    if (page !== pageLength || !validateAnswers()) {
      setError("Answer all questions!");
      return;
    }
    setError("");
    onSubmit();
  };

  return (
    <Group p={"lg"} justify="center">
      <Button
        onClick={() => setPage((prev) => prev - 1)}
        disabled={page === 0}
        variant="filled"
      >
        Previous
      </Button>
      <Button onClick={handleSubmit} variant="filled" color="teal">
        Submit
      </Button>
      <Button
        onClick={handleNextPage}
        disabled={page === pageLength}
        variant="filled"
      >
        Next
      </Button>
    </Group>
  );
};

export default NavPanel;
