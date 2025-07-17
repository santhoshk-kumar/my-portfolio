import React from "react";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { IconButton, Box } from "@mui/material";

const Socials = () => (
  <Box mt={2}>
    <IconButton
      component="a"
      href={process.env.REACT_APP_GITHUB_URL}
      target="_blank"
      rel="noopener"
    >
      <GitHub />
    </IconButton>
    <IconButton
      component="a"
      href={process.env.REACT_APP_LINKEDIN_URL}
      target="_blank"
      rel="noopener"
    >
      <LinkedIn />
    </IconButton>
  </Box>
);

export default Socials;