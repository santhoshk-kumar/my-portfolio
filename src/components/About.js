import React from "react";
import { Typography, Box, Paper, Button } from "@mui/material";
import { motion } from "framer-motion";

const About = () => (
    <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
  <Box my={4}>
    <Typography variant="h4" gutterBottom>About Me</Typography>
    <Paper elevation={3} sx={{ padding: 3 }}>
      <Typography variant="body1" paragraph>
        I’m a passionate Web Developer with over 3 years of professional experience building scalable web applications using React.js and Node.js. I specialize in crafting responsive, high-performance frontends and robust backends that solve real-world problems
      </Typography>
      <Typography variant="body1">
       In addition to my full-stack expertise, I’ve worked with Python, particularly Flask, to develop lightweight APIs and backend services. Lately, I've been diving deep into the world of Generative AI, exploring technologies like LangChain, LLMs, and prompt engineering to build intelligent and context-aware applications.
      </Typography>
    </Paper>
    <a
  href={`${process.env.PUBLIC_URL}/Santhosh_Kumar_K_ML_Resume.pdf`}
  download="Santhosh_Kumar_K_ML_Resume.pdf"
  style={{ textDecoration: 'none' }}
>
  <Button
    variant="contained"
    color="primary"
    sx={{ mt: 2 }}
  >
    Download Resume
  </Button>
</a>
  </Box>
  </motion.div>
);

export default About;
