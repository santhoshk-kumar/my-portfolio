import React from "react";
import { Typography, Box } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";
import experience from "../data/experience";

const Experience = () => (
  <Box my={4}>
    <Typography variant="h4" gutterBottom={true}>Experience</Typography>
    <Timeline position="alternate">
      {experience.map((item, i) => (
        <TimelineItem key={i}>
          <TimelineSeparator> 
            <TimelineDot color="primary" />
            {i !== experience.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6">{item.role} @ {item.company}</Typography>
            <Typography variant="body2">{item.duration}</Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom ={true}>{item.description}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  </Box>
);

export default Experience;
