export interface IQuestion {
  id: string;
  questionText: string;
  questionType: IAnswerType;
  possibleAnswers: string[];
  correctAnswer: string[];
}

export enum IAnswerType {
  MULTIPLE_CHOICE = "multiple choice",
  OPEN_ENDED = "open-ended",
  SCALE = "scale",
  TRUE_FALSE = "true/false",
  NONE = "NONE",
}

export interface IStep {
  id: string;
  questions: IQuestion[];
}

export interface IAnswer {
  [questionId: string]: string[];
}

export interface IQuestionFields {
  contentTypeId: string;
  fields: IQuestion;
}

export interface IArticle {
  objectID: string;
  title: string;
  description: string;
  url: string;
}
