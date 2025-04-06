export interface IQuestion {
  id: string;
  questionText: string;
  questionType: IAnswerType;
  possibleAnswers: string[];
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

export interface IQuestionFields {
  contentTypeId: string;
  fields: IQuestion;
}
