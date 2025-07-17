import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
  useTheme,
  useMediaQuery
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";

const sections = ["about", "skills", "projects", "contact"];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const drawer = (
    <List>
      {sections.map((section) => (
        <ListItem
          button
          key={section}
          component={Link}
          to={section}
          smooth={true}
          duration={600}
          offset={-70}
          onClick={() => setDrawerOpen(false)}
        >
          <ListItemText primary={section.charAt(0).toUpperCase() + section.slice(1)} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Santhosh Kumar
        </Typography>
        {isMobile ? (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Box>
            {sections.map((section) => (
              <Button
                key={section}
                color="inherit"
                component={Link}
                to={section}
                smooth={true}
                duration={600}
                offset={-70}
                activeClass="active"
                spy={true}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;