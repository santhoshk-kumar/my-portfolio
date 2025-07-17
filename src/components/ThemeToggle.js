import React from "react";
import { IconButton, Box } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const ThemeToggle = ({ mode, setMode }) => (
  <Box textAlign="right" p={2}>
    <IconButton onClick={() => setMode(mode === "light" ? "dark" : "light")}>
      {mode === "light" ? <Brightness4 /> : <Brightness7 />}
    </IconButton>
  </Box>
);

export default ThemeToggle;
