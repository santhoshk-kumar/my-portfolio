import React, { useState } from "react";
import { ThemeProvider, CssBaseline, Container, Box } from "@mui/material";
import { getTheme } from "./theme";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Element } from "react-scroll";
import BackToTop from "./components/BackToTop";
import Splash from "./components/Splash"; 
import { AnimatePresence, motion } from "framer-motion";

const formspreeEndpoint = process.env.REACT_APP_FORMSPREE_API_KEY;

const MotionContainer = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.div>
);

const App = () => {
  const theme = getTheme('dark');
  const [loading, setLoading] = useState(true);
  
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {loading ? (
        <Splash />
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Header />
             <Container maxWidth="lg">
              <Element name="hero">
                <MotionContainer animation="fade-up"><Hero /></MotionContainer>
              </Element>
              <Element name="about">
                <MotionContainer animation="fade-up"><About /></MotionContainer>
              </Element>
              <Element name="skills">
                <MotionContainer animation="fade-up"><Skills /></MotionContainer>
              </Element>
              <Element name="projects">
                <MotionContainer animation="fade-up"><Projects /></MotionContainer>
              </Element>
              <Element name="experience">
                <MotionContainer animation="fade-up"><Experience /></MotionContainer>
              </Element>
              <Element name="contact">
                <MotionContainer animation="fade-up"><Contact formspreeEndpoint={formspreeEndpoint} /></MotionContainer>
              </Element>
            </Container>
            <Box sx={{ bgcolor: 'background.default', color: 'text.primary', mt: 4, py: 4, px: 2 }}>
              <MotionContainer animation="fade"><Footer /></MotionContainer>
            </Box>
            <BackToTop />
          </motion.div>
        </AnimatePresence>
      )}
    </ThemeProvider>
  );
};

export default App;