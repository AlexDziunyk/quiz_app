import { Container, MantineProvider } from "@mantine/core";
import "./App.css";
import Quiz from "./components/Quiz/Quiz";
import "@mantine/core/styles.css";

function App() {
  return (
    <MantineProvider>
      <Container size={"lg"}>
        <Quiz />
      </Container>
    </MantineProvider>
  );
}

export default App;
