import React, { useEffect } from "react"; // Importa useEffect
import { Box, Typography, Button, useMediaQuery } from "@mui/material";

const Hero = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm")); // Detecta pantallas pequeñas

  // Función para navegar internamente a la sección de "Música"
  const handleListenNow = () => {
    const musicaSection = document.getElementById("musica");
    if (musicaSection) {
      musicaSection.scrollIntoView({ behavior: "smooth" }); // Desplazamiento suave
    }
  };

  // Usa useEffect para manejar la reproducción del video
  useEffect(() => {
    const video = document.getElementById("background-video");
    if (video) {
      video.play().catch((error) => {
        console.error("Error al reproducir el video:", error);
      });
    }
  }, []); // El array vacío asegura que esto solo se ejecute una vez al montar el componente

  return (
    <Box
      id="hero" // Agregar un id para la navegación interna
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
      {/* Contenedor del video con aspect ratio 16:9 */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          aspectRatio: "16/9", // Mantiene el aspect ratio 16:9
          "@supports not (aspect-ratio: 16/9)": {
            // Fallback para navegadores que no soportan aspect-ratio
            paddingTop: "56.25%", // 9 / 16 = 0.5625 (56.25%)
          },
          zIndex: -1,
        }}
      >
        {/* Video de fondo */}
        <video
          id="background-video" // Agrega un ID para poder seleccionar el video
          preload="metadata" // En lugar de auto
          autoPlay
          loop
          muted
          playsInline // Asegurar compatibilidad en iOS
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
            playsInline // Agregar también aquí
          />
          Tu navegador no soporta videos HTML5.
        </video>
      </Box>

      {/* Overlay oscuro */}
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

      {/* Contenido */}
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