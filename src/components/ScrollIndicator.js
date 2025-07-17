import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, IconButton } from "@mui/material";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const ScrollIndicator = () => (
  <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
    <Link to="about" smooth duration={600}>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <IconButton>
          <KeyboardArrowDownIcon fontSize="large" />
        </IconButton>
      </motion.div>
    </Link>
  </Box>
);

export default ScrollIndicator;