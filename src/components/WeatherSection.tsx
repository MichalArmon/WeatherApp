import { Paper, Typography } from "@mui/material";

export default function WeatherSection() {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        mt: 2,
        borderRadius: 3,
        textAlign: "center",
      }}
    >
      <Typography variant="h5">Weather</Typography>

      <Typography sx={{ mt: 1 }}>
        Search for a city to see the weather
      </Typography>
    </Paper>
  );
}
