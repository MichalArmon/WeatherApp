import { Container } from "@mui/material";
import ActionSection from "./assets/components/ActionSection";
import WeatherSection from "./assets/components/WeatherSection";

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
