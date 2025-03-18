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
  ListItemIcon, // Importa ListItemIcon para agregar íconos
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageSharpIcon from "@mui/icons-material/LanguageSharp"; // Importa el ícono
import LanguageToggleButton from "../common/LanguageToggleButton.jsx"; // Importa el nuevo componente
import { useTranslation } from "react-i18next"; // Importa useTranslation
import AutoStoriesSharpIcon from "@mui/icons-material/AutoStoriesSharp"; // Ícono para Bio
import LibraryMusicSharpIcon from "@mui/icons-material/LibraryMusicSharp"; // Ícono para Música
import AlternateEmailSharpIcon from "@mui/icons-material/AlternateEmailSharp"; // Ícono para Contacto

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { t, i18n } = useTranslation(); // Usa useTranslation para acceder a t e i18n

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

  // Mapeo de íconos para cada sección
  const sectionIcons = {
    biografia: <AutoStoriesSharpIcon />,
    musica: <LibraryMusicSharpIcon />,
    contacto: <AlternateEmailSharpIcon />,
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
        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
            gap: 4,
          }}
        >
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
              {t(`header.${id}`)} {/* Usa las traducciones */}
            </Button>
          ))}

          {/* Separador vertical */}
          <Box
            sx={{
              borderLeft: "1px solid white",
              height: "24px",
              alignSelf: "center",
            }}
          />

          {/* Botón de cambio de idioma */}
          <LanguageToggleButton />
        </Box>

        {/* Menú hamburguesa (Drawer en móviles) */}
        <IconButton
          color="inherit"
          sx={{ display: { xs: "block", sm: "block", md: "none" } }}
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
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              backdropFilter: "blur(6px)",
              color: "white",
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
                    },
                  }}
                  key={id}
                  disablePadding
                >
                  <ListItemButton onClick={() => handleNavigation(id)}>
                    <ListItemIcon sx={{ color: "white" }}>
                      {sectionIcons[id]} {/* Agrega el ícono correspondiente */}
                    </ListItemIcon>
                    <ListItemText primary={t(`header.${id}`)} />{" "}
                    {/* Usa las traducciones */}
                  </ListItemButton>
                </ListItem>
              ))}

              {/* Botón de cambio de idioma en el menú de hamburguesa */}
              <ListItem
                sx={{
                  transition: "0.3s",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    color: "black",
                  },
                }}
                disablePadding
              >
                <ListItemButton
                  onClick={() =>
                    i18n.changeLanguage(i18n.language === "es" ? "en" : "es")
                  }
                >
                  <ListItemIcon sx={{ color: "white" }}>
                    <LanguageSharpIcon /> {/* Agrega el ícono de idioma */}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      i18n.language === "es"
                        ? "Ver en inglés"
                        : "See in Spanish"
                    }
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
