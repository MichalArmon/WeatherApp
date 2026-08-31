import { Button, Paper, TextField } from "@mui/material";

export default function ActionSection() {
  return (
    <Paper
      sx={{
        p: 3,
        display: "flex",
        gap: 2,
        alignItems: "center",
      }}
    >
      <TextField label="City" fullWidth />

      <Button variant="contained">Check</Button>
    </Paper>
  );
}
