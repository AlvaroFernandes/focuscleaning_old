import "./header.css";

import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Menu,
  MenuItem,
  Typography,
  Button
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import Logo from "../../assets/logo.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const pages = [
  { id: 1, label: "Home", link: "/" },
  { id: 2, label: "About", link: "/about" },
  { id: 3, label: "Services", link: "/services" },
  { id: 4, label: "Contact", link: "/contact" }
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };

  const handleCloseNavMenu = (e) => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            src={Logo}
            alt="Focus Cleaning"
            className="logo_md"
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu Focus Cleaning"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Button
                    component={Link}
                    to={page.link}
                    sx={{ color: "text.secondary" }}
                  >
                    {page.label}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            component="img"
            src={Logo}
            alt="Focus Cleaning"
            className="logo_xs"
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1
            }}
          />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center"
            }}
          >
            {pages.map((page) => (
              <Button
                component={Link}
                key={page.id}
                to={page.link}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "text.secondary", display: "block" }}
              >
                {page.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
