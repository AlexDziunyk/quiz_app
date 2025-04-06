import { Group } from "@mantine/core";
import { Button } from "@mantine/core";
import { useQuiz } from "../../context/QuizContext";

interface NavPanelProps {
  page: number;
  pageLength: number;
  questionsIds: string[];
  setError: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const NavPanel = ({
  page,
  pageLength,
  setPage,
  questionsIds,
  setError,
}: NavPanelProps) => {
  const { answers } = useQuiz();

  const validateAnswers = () => {
    for (let i = 0; i < questionsIds.length; i++) {
      const item = questionsIds[i];
      if (!answers[item] || answers[item].length === 0) {
        setError("Answer all questions first!");
        return false;
      }
    }
    setError("");
    return true;
  };

  const handleNextPage = () => {
    if (!validateAnswers()) {
      return;
    }
    setPage((prev) => prev + 1);
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
      <Button variant="filled" color="teal">
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
