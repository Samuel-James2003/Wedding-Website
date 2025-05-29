import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Button,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { AppPaths } from "../utils/AppPaths";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Menu", path: "/menu" },
  { label: "RSVP", path: "/rsvp" },
  { label: "Seating chart", path: "/seating" },
  { label: "Registry", path: "/registry" },
  { label: "FAQ", path: "/faq" },
];

const Banner: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#fce4ec", // soft pink
        color: "#880e4f", // romantic dark pink text
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center">
          <img src={AppPaths.imageUrl("/images/flower-3.svg")} alt="Decorative" style={{ width: 32, height: 32, marginRight: 8, marginBottom: 8 }} />
          <Typography
            variant="h6"
            sx={{
              fontFamily: "'Great Vibes', cursive",
              fontWeight: "bold",
              fontSize: "1.8rem",
            }}
          >
            Our Wedding
          </Typography>
        </Box>

        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
              <List sx={{ width: 250 }}>
                {navItems.map((item) => (
                  <ListItemButton
                    key={item.label}
                    component={Link}
                    to={item.path}
                    onClick={toggleDrawer(false)}
                  >
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <Box display="flex" gap={2}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                sx={{
                  color: "#880e4f",
                  fontWeight: "bold",
                  borderRadius: "20px",
                  "&:hover": {
                    backgroundColor: "#f8bbd0",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Banner;
