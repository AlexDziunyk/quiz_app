import { Group, Progress, Stack, Text, Title } from "@mantine/core";

interface HeaderProps {
  page: number;
  pageLength: number;
}

const Header = ({ page, pageLength }: HeaderProps) => {
  const value = (page * 100) / pageLength;
  return (
    <div>
      <Stack p={"sm"}>
        <Group justify="center">
          <Title order={1}>Quiz</Title>
        </Group>
        <Group justify="center">
          <Text>
            Step {page + 1} of {pageLength}
          </Text>
          <Text>{value}%</Text>
        </Group>
        <Progress color="green" value={value} />
      </Stack>
    </div>
  );
};

export default Header;
