import { IAnswer, IQuestion, IStep } from "../types/api";

export const areArraysEqual = (arr1: string[], arr2: string[]) => {
  if (arr1.length !== arr2.length) return false;

  const sortedArr1 = [...arr1].sort();
  const sortedArr2 = [...arr2].sort();

  return sortedArr1.join(",") === sortedArr2.join(",");
};

export const getQuestionsFromData = (data: IStep[]) => {
  const questions: IQuestion[] = [];
  data.forEach((item) => questions.push(...item.questions));
  return questions;
};

export const getScoreForQuiz = (questions: IQuestion[], answers: IAnswer) => {
  let score = 0;

  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const answer = answers[question.id];
    if (areArraysEqual(question.correctAnswer, answer)) {
      score++;
    }
  }

  return { score: score, questionsNumber: questions.length };
};

export const calculatePercents = (num: number, max: number) => {
  return (num * 100 / max).toFixed(1);
}