import React from "react";
import { Typography, Card, CardContent, Grid, Chip } from "@mui/material";
import projects from "../data/projects";
import { motion } from "framer-motion";

const Projects = () => (
  <>
    <Typography variant="h4" gutterBottom>Projects</Typography>
    <Grid container spacing={3}>
      {projects.map((p, i) => (
        <Grid item xs={12} md={6} key={i}>
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6">{p.title}</Typography>
              <Typography variant="body2" gutterBottom>{p.description}</Typography>
              {p.technologies.map((tech, i) => (
                <Chip key={i} label={tech} size="small" sx={{ mr: 1, my: 1 }} />
              ))}
            </CardContent>
          </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </>
);

export default Projects;
