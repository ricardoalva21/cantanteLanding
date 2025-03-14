import React from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";

const Hero = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleListenNow = () => {
    const musicaSection = document.getElementById("musica");
    if (musicaSection) {
      musicaSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      id="hero"
      sx={{
        position: "relative",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        overflow: "hidden",
        backgroundImage: isSmallScreen ? "url(/images/hero_background.webp)" : "none", // Imagen en pantallas pequeñas
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {!isSmallScreen && ( // Video en pantallas grandes
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        >
          <video
            id="background-video"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source
              src="https://firebasestorage.googleapis.com/v0/b/yoyjara-landing.firebasestorage.app/o/background1_hero3_Optimus.mp4?alt=media&token=549ec625-39b3-4c0f-a47d-9bcd692e857c"
              type="video/mp4"
            />
            Tu navegador no soporta videos HTML5.
          </video>
        </Box>
      )}

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 0,
        }}
      />

      <Box sx={{ position: "relative", zIndex: 1, p: 4 }}>
        <Typography variant="h2" gutterBottom>
          Bienvenidos
        </Typography>
        <Typography variant="h5" gutterBottom>
          Descubre la música de Yoy Jara, y más.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleListenNow}
        >
          Escuchar ahora
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;