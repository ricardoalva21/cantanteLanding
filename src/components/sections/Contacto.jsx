import React from "react";
import { Typography, Box, Button } from "@mui/material";

const Contacto = ({ id }) => {
  return (
    <Box
      id="contacto" // Agregar un id para la navegación interna
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
        <Box
          component="video"
          autoPlay
          loop
          muted
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover", // Cubre el contenedor sin distorsionar el video
          }}
        >
          <source
            src="https://firebasestorage.googleapis.com/v0/b/yoyjara-landing.firebasestorage.app/o/background0_hero.mp4?alt=media&token=35facd0d-0dbf-4d5a-b349-6e5e08a5c782"
            type="video/mp4"
          />
          Tu navegador no soporta videos HTML5.
        </Box>
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

      {/* Título de la sección */}
      <Typography variant="h2" gutterBottom sx={{ zIndex: 2 }}>
        Contáctanos
      </Typography>
      {/* Botón para enviar el correo */}
      <Button
        href="mailto:yoy.jaracas@gmail.com"
        variant="contained"
        color="primary"
        sx={{
          zIndex: 2,
          mt: 2,
          fontWeight: "bold",
          textTransform: "none",
        }}
      >
        Envía un mail a Yoy Jara.
      </Button>
    </Box>
  );
};

export default Contacto;
