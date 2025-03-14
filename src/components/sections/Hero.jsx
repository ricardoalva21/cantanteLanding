import React, { useEffect } from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";

const Hero = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleListenNow = () => {
    const musicaSection = document.getElementById("musica");
    if (musicaSection) {
      musicaSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const video = document.getElementById("background-video");
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    if (video) {
      const handleLoadedMetadata = () => {
        video.play().catch((error) => {
          console.error("Error al reproducir el video:", error);
          if (isIOS) {
            // Si falla en iOS, muestra una imagen de fondo
            video.style.display = "none";
            document.body.style.backgroundImage = "url('fallback-image.jpg')";
          }
        });
      };

      video.addEventListener("loadedmetadata", handleLoadedMetadata);

      return () => {
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      };
    }
  }, []);

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
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          aspectRatio: "16/9",
          "@supports not (aspect-ratio: 16/9)": {
            paddingTop: "56.25%",
          },
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