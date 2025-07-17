import React from "react";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";

const Footer = () => (
  <Box textAlign="center" py={4} px={2}>
    <Typography variant="body2" gutterBottom>
      &copy; {new Date().getFullYear()} Santhosh Kumar. All rights reserved.
    </Typography>
    <Stack direction="row" spacing={2} justifyContent="center">
      <IconButton
        component="a"
        href={process.env.REACT_APP_GITHUB_URL}
        target="_blank"
        rel="noopener"
        color="inherit"
      >
        <GitHub />
      </IconButton>
      <IconButton
        component="a"
        href={process.env.REACT_APP_LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        color="inherit"
      >
        <LinkedIn />
      </IconButton>
    </Stack>
  </Box>
);

export default Footer;