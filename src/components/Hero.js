import React from "react";
import { Typography, Box, Stack, useMediaQuery, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import Socials from "./Socials";
import img from "../assets/image.png";

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Box
        sx={{
          background: "linear-gradient(135deg, #1e1e1e 0%, #121212 100%)",
          color: "white",
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 6,
              textAlign: isMobile ? "center" : "left",
            }}
          >
            {/* 📝 Text Section */}
            <Stack spacing={2} sx={{ flex: 1 }}>
              <Typography variant="h4" fontWeight="bold" color="#ff4081">
                Hi, <span role="img" aria-label="waving hand">👋</span> I am
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  color: "#ff4081",
                  textShadow: "2px 2px 4px #000",
                }}
              >
                Santhosh Kumar
              </Typography>

              <Typography variant="h6" color="grey.300">
                MERN Stack | Generative AI Developer
              </Typography>

              {/* 🧾 Intro Paragraph */}
              <Typography variant="body1" color="grey.400" sx={{ lineHeight: 1.8 }}>
                Sometimes I stare at the code so long, I forget what it was supposed to do — but hey, it’s clean!
              </Typography>

              <Socials />
            </Stack>

            {/* 🖼️ Animated Photo Section */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Box
                component="img"
                src={img}
                alt="Santhosh Kumar"
                sx={{
                  width: isMobile ? "80%" : "250px",
                  height: isMobile ? "auto" : "350px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  boxShadow: 5,
                  flexShrink: 0,
                }}
              />
            </motion.div>
          </Box>
        </Container>
      </Box>
    </motion.div>
  );
};

export default Hero;
