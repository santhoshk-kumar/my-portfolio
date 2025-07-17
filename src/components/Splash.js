import React from "react";
import { Box } from "@mui/material";

const Splash = () => (
  <Box
    sx={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "background.default",
    }}
  >
    <img
      src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcW44MGowMWR3bGdvZHV4ZHR2MG9mcTcybTB0aGlsOWlpcm1vYzdleCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0U7bWQK9s75PjRKcHz/giphy.gif"
      alt="Loading..."
      style={{ width: 150, height: 150, marginBottom: 20 }}
    />
  </Box>
);

export default Splash;