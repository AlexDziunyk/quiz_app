import { createClient, Entry } from "contentful";
import { IQuestion, IStep } from "../types/api";
import {
  TypeQuestionSkeleton,
  TypeStepSkeleton,
} from "../types/contentful/skeletons";

export const contentfulClient = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_TOKEN,
});

export const fetchSteps = async (): Promise<IStep[]> => {
  const response = await contentfulClient.getEntries<TypeStepSkeleton>({
    content_type: "step",
    include: 2,
    locale: "en-US",
  });

  const data = response.items
    .map((item): IStep | undefined => {
      const fields = item.fields;
      const { id, questions, questionsOrder } = fields;

      if (!Array.isArray(questions) || !Array.isArray(questionsOrder)) return;

      const allQuestions: any = (
        questions as Entry<TypeQuestionSkeleton>[]
      ).map((q) => ({
        id: q.fields.id,
        questionText: q.fields.questionText,
        questionType: q.fields.questionType,
        possibleAnswers: q.fields.possibleAnswers || [],
      }));

      const ordered: any = (questionsOrder as any)
        .map((qid: string) => allQuestions.find((q: any) => q.id === qid))
        .filter(Boolean) as IQuestion[];

      return {
        id,
        questions: ordered,
      };
    })
    .filter(Boolean) as IStep[];

  return data;
};
