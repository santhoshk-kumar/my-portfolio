import React from "react";
import { Typography, Chip, Box } from "@mui/material";
import skills from "../data/skills";

const Skills = () => (
  <Box my={4}>
    <Typography variant="h4" gutterBottom>Skills</Typography>
    {skills.map((skill, i) => (
      <Chip key={i} label={skill} sx={{ m: 0.5 }} />
    ))}
  </Box>
);

export default Skills;
