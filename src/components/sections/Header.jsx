import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Alternar el estado del menú hamburguesa
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  // Navega a la sección con scroll suave
  const handleNavigation = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setDrawerOpen(false); // Cierra el menú después de navegar
  };

  return (
    <AppBar
      position="absolute"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        px: { xs: 1, sm: 2, md: 4, lg: 8, xl: 10 },
      }}
    >
      <Toolbar>
        {/* Logo */}
        <Box sx={{ flexGrow: 1, pt: 1 }}>
          <img
            src="/images/logo.png"
            alt="Logo del artista"
            style={{ height: "70px" }}
          />
        </Box>

        {/* Menú de navegación (oculto en móviles) */}
        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 4 }}>
          {["biografia", "musica", "contacto"].map((id) => (
            <Button
              key={id}
              color="inherit"
              onClick={() => handleNavigation(id)}
              sx={{
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "primary.main",
                  color: "black",
                  borderRadius: "8px",
                },
              }}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </Button>
          ))}
        </Box>

        {/* Menú hamburguesa (Drawer en móviles) */}
        <IconButton
          color="inherit"
          sx={{ display: { xs: "block", sm: "none" } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: 250,
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.8)", // Mayor transparencia
              backdropFilter: "blur(6px)", // Suaviza el desenfoque
              color: "white",

              // borderRadius: "25px 0 0 0", // Más curvo
            }}
          >
            <List
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                gap: 3,
              }}
            >
              {["biografia", "musica", "contacto"].map((id) => (
                <ListItem
                  sx={{
                    transition: "0.3s",
                    "&:hover": {
                      backgroundColor: "primary.main",
                      color: "black",
                      // borderRadius: "8px",
                    },
                  }}
                  key={id}
                  disablePadding
                >
                  <ListItemButton onClick={() => handleNavigation(id)}>
                    <ListItemText
                      primary={id.charAt(0).toUpperCase() + id.slice(1)}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
