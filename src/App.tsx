import Container from "./components/main/Container";
import Screen from "./components/main/Screen";
import Card from "./components/ui/Card";

const App = () => {
  return(
    <Screen>
      <Container>
        <Card />
      </Container>
    </Screen>
  );
}

export default App;