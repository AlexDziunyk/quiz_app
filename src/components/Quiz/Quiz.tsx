import { useEffect, useState } from "react";
import { fetchSteps } from "../../utils/api";
import { IStep } from "../../types/api";
import Step from "../Step/Step";
import NavPanel from "../NavPanel/NavPanel";
import Header from "../Header/Header";
import QuizProvider from "../../context/QuizContext";
import { Alert, Group, Loader } from "@mantine/core";
import Results from "../Results/Results";

const Quiz = () => {
  const [stage, setStage] = useState<"testing" | "results">("testing");
  const [page, setPage] = useState<number>(0);
  const [steps, setSteps] = useState<IStep[]>([]);
  const [error, setError] = useState<string>("");

  const getQuizSteps = async () => {
    const data = await fetchSteps();
    setSteps(data);
  };

  const handleSubmit = () => {
    setStage("results");
  };

  useEffect(() => {
    getQuizSteps();
  }, []);

  useEffect(() => {
    setError("");
  }, [page]);

  return (
    <QuizProvider>
      {stage === "testing" && (
        <>
          {steps.length > 0 ? (
            <>
              <Header page={page} pageLength={steps.length} />
              <Step
                key={steps[page].id}
                stepId={steps[page].id}
                data={steps[page].questions}
              />
              {error && (
                <Alert mt={"sm"} variant="light" color="red" title={error} />
              )}
              <NavPanel
                onSubmit={handleSubmit}
                setError={setError}
                questionsIds={steps[page].questions.map((item) => item.id)}
                page={page}
                pageLength={steps.length - 1}
                setPage={setPage}
              />
            </>
          ) : (
            <Group p={"xl"} justify="center">
              <Loader color="blue" />
            </Group>
          )}
        </>
      )}
      {stage === "results" && (
        <>{steps.length > 0 && <Results data={steps} />}</>
      )}
    </QuizProvider>
  );
};

export default Quiz;
