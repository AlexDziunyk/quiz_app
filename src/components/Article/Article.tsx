import { Text } from "@mantine/core";

interface ArticleProps {
  title: string;
  description: string;
  url: string;
}

const Article = ({ title, description, url }: ArticleProps) => {
  return (
    <div>
      <Text fw={700}>{title}</Text>
      <Text>{description}</Text>
      <a href={url}>Read more!</a>
    </div>
  );
};

export default Article;
