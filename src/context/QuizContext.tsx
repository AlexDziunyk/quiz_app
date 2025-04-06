import { createContext, useContext, useState } from "react";
import { IAnswer, IStep } from "../types/api";

interface QuizContextType {
  userData: any;
  setUserData: React.Dispatch<React.SetStateAction<any>>;
  answers: IAnswer;
  setAnswers: React.Dispatch<React.SetStateAction<IAnswer>>;
}

const QuizContext = createContext<QuizContextType | null>(null);

export default function QuizProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userData, setUserData] = useState<IStep[]>([]);
  const [answers, setAnswers] = useState<IAnswer>({});

  return (
    <QuizContext.Provider
      value={{ userData, setUserData, answers, setAnswers }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
}
