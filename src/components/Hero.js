import React from "react";
import { Typography, Box } from "@mui/material";
import {motion} from "framer-motion";
import Socials from "./Socials";


const Hero = () => (
  <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
  <Box textAlign="center" my={5}>
    {/* <Avatar
      src="/your-photo.jpg"
      sx={{ width: 120, height: 120, mx: "auto", mb: 2 }}
    /> */}
    <Typography variant="h3" component="h1" gutterBottom>
        Hi <span role="img" aria-label="waving hand">👋 </span> I am
      </Typography>
    <Typography variant="h3" gutterBottom>
      Santhosh Kumar
    </Typography>
    <Typography variant="h6" color="text.secondary">
      MERN Stack | Generative AI Developer
    </Typography>
    <Socials/>
  </Box>
  </motion.div>
);

export default Hero;
