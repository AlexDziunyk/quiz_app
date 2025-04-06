import type { EntrySkeletonType } from "contentful";
import type { TypeStepFields } from "./TypeStep";
import type { TypeQuestionFields } from "./TypeQuestion";

export type TypeStepSkeleton = EntrySkeletonType<TypeStepFields, "step">;
export type TypeQuestionSkeleton = EntrySkeletonType<
  TypeQuestionFields,
  "question"
>;
