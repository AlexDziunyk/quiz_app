import type { EntryFields } from "contentful";

export interface TypeQuestionFields {
  id: EntryFields.Symbol;
  questionText: EntryFields.Symbol;
  questionType: "multiple choice" | "open-ended" | "scale" | "true/false";
  possibleAnswers?: EntryFields.Symbol[];
  correctAnswer: EntryFields.Symbol[];
}
