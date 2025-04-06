import { useEffect, useState } from "react";
import { useQuiz } from "../../context/QuizContext";
import { IArticle, IStep } from "../../types/api";
import {
  calculatePercents,
  getQuestionsFromData,
  getScoreForQuiz,
} from "../../utils/quiz";
import {
  Card,
  Group,
  Loader,
  Progress,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { clientAlgolia } from "../../utils/algolia";
import Article from "../Article/Article";

interface ResultsProps {
  data: IStep[];
}

const Results = ({ data }: ResultsProps) => {
  const { answers } = useQuiz();
  const [results, setResults] = useState<{
    score: number;
    questionsNumber: number;
  } | null>(null);

  const [articles, setArticles] = useState<any>();

  const calculateResults = () => {
    const questions = getQuestionsFromData(data);
    setResults(getScoreForQuiz(questions, answers));
  };

  const algolia = async () => {
    const data = await clientAlgolia.searchSingleIndex({
      indexName: import.meta.env.VITE_ALGOLIA_INDEX_NAME,
      searchParams: {
        query: "react css html jsx components flexbox",
        optionalWords: ["react", "css", "html", "jsx", "components", "flexbox"],
      },
    });

    console.log(data.hits);
    setArticles(data.hits);
  };

  useEffect(() => {
    calculateResults();
    algolia();
  }, []);

  return (
    <div>
      {results ? (
        <Card padding="lg" radius="md" withBorder m={"lg"} shadow="lg">
          <Group justify="center">
            <Title order={2}>Congrats on completeing the test!</Title>
          </Group>
          <Progress my={"lg"} color="green" value={100} />
          <Group justify="space-between">
            <Text size="lg" fw={500}>
              You answered correct {results?.score} out of{" "}
              {results.questionsNumber} questions!
            </Text>
            <Text size="lg" fw={700}>
              {calculatePercents(results.score, results.questionsNumber)}%
            </Text>
          </Group>
          <Text mt={"lg"} size="md" fw={700}>
            Interesting articles that will help you to get better:
          </Text>
          <Stack my={"sm"} gap={"sm"}>
            {articles &&
              articles.map((item: IArticle) => (
                <Article
                  key={item.objectID}
                  title={item.title}
                  description={item.description}
                  url={item.url}
                />
              ))}
          </Stack>
        </Card>
      ) : (
        <Group p={"xl"} justify="center">
          <Loader color="blue" />
        </Group>
      )}
    </div>
  );
};

export default Results;
