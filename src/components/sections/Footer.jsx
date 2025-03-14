import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton, Fab } from "@mui/material";
import { Instagram, Facebook, Twitter } from "@mui/icons-material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Mostrar botón cuando el usuario baja
  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  // Función para hacer scroll arriba
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        color: "white",
        textAlign: "center",
        py: 3,
        position: "relative",
      }}
    >
      {/* Redes Sociales */}
      <Box sx={{ mb: 2 }}>
        <IconButton
          href="https://www.instagram.com/yoy__jara/"
          target="_blank"
          sx={{ color: "white", mx: 1, "&:hover": { color: "#E1306C" } }}
        >
          <Instagram />
        </IconButton>
        <IconButton
          href="https://www.facebook.com/yoyjaramusic/"
          target="_blank"
          sx={{ color: "white", mx: 1, "&:hover": { color: "#1877F2" } }}
        >
          <Facebook />
        </IconButton>
        <IconButton
          href="https://x.com/yoy_jara"
          target="_blank"
          sx={{ color: "white", mx: 1, "&:hover": { color: "#1DA1F2" } }}
        >
          <Twitter />
        </IconButton>
      </Box>
      {/* Derechos de autor */}
      <Typography variant="body2">
        © {new Date().getFullYear()} Yoy Jara. Todos los derechos reservados.
      </Typography>

      {/* Botón flotante para volver arriba */}
      {showScroll && (
        <Fab
          color="primary"
          size="small"
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
            zIndex: 1000,
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "white",
              color: "black",
            },
          }}
        >
          <ArrowUpwardIcon />
        </Fab>
      )}
    </Box>
  );
};

export default Footer;
