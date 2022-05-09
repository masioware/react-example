import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Drawer,
} from "@mui/material";

const menuItems = [
  {
    menuTitle: "Main",
    pageURL: "/",
    icon: <HomeIcon />,
  },
  {
    menuTitle: "Project 1",
    pageURL: "/project1",
    icon: <LooksOneIcon />,
  },
  {
    menuTitle: "Project 2",
    pageURL: "/project2",
    icon: <LooksTwoIcon />,
  },
  {
    menuTitle: "Project 3",
    pageURL: "/project3",
    icon: <Looks3Icon />,
  },
];

const NavBar = () => {
  const [drawer, setDrawer] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (open) => () => {
    setDrawer(open);
  };

  const handleMenuClick = (pageURL) => {
    navigate(pageURL);
  };

  return (
    <>
      <Drawer anchor="left" open={drawer} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((menuItem, index) => (
              <ListItem
                button
                key={index}
                onClick={() => handleMenuClick(menuItem.pageURL)}
              >
                <ListItemIcon>{menuItem.icon}</ListItemIcon>
                <ListItemText primary={menuItem.menuTitle} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            MASIOWARE
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
