import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null); // Estado para el menú desplegable

  // Maneja la apertura del menú desplegable
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Maneja el cierre del menú desplegable
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Navega a la sección correspondiente con scroll suave
  const handleNavigation = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Scroll suave
    }
    handleMenuClose(); // Cierra el menú después de la navegación
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Toolbar>
        {/* Logo */}
        <Box sx={{ flexGrow: 1 }}>
          <img
            src="/images/logo.png" // Ruta desde la carpeta public
            alt="Logo del artista"
            style={{ height: "70px" }} // Ajusta el tamaño del logo
          />
        </Box>

        {/* Menú de navegación (oculto en móviles) */}
        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 4 }}>
          <Button color="inherit" onClick={() => handleNavigation("bio")}>
            Biografía
          </Button>
          <Button color="inherit" onClick={() => handleNavigation("musica")}>
            Música
          </Button>
          <Button color="inherit" onClick={() => handleNavigation("contacto")}>
            Contacto
          </Button>
        </Box>

        {/* Menú hamburguesa (solo en móviles) */}
        <IconButton
          color="inherit"
          sx={{ display: { xs: "block", sm: "none" } }}
          onClick={handleMenuOpen}
        >
          <MenuIcon />
        </IconButton>

        {/* Menú desplegable (solo en móviles) */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          <MenuItem onClick={() => handleNavigation("bio")}>Biografía</MenuItem>
          <MenuItem onClick={() => handleNavigation("musica")}>Música</MenuItem>
          <MenuItem onClick={() => handleNavigation("contacto")}>
            Contacto
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;