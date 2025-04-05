import { useEffect, useState } from "react";
import { fetchSteps } from "../../utils/api";
import { IStep } from "../../types/api";
import Step from "../Step/Step";

const Quiz = () => {
  const [steps, setSteps] = useState<IStep[]>([]);

  const getQuizSteps = async () => {
    const data = await fetchSteps();
    setSteps(data);
    console.log(data);
  };

  useEffect(() => {
    getQuizSteps();
  }, []);

  return (
    <>
      {steps.map((item) => (
        <Step key={item.id} data={item.questions} />
      ))}
    </>
  );
};

export default Quiz;
