import { Container } from "@mui/material";
import ActionSection from "./components/ActionSection";
import WeatherSection from "./components/WeatherSection";

function App() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: 5,
      }}
    >
      <ActionSection />
      <WeatherSection />
    </Container>
  );
}

export default App;
