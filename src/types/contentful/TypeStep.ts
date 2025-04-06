import type { Entry, EntryFields } from "contentful";
import type { TypeQuestionSkeleton } from "./skeletons";

export interface TypeStepFields {
  id: EntryFields.Symbol;
  questions?: Entry<TypeQuestionSkeleton>[];
  questionsOrder: EntryFields.Symbol[];
}
