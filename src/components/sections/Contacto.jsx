import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next"; // Importa useTranslation

const Contacto = ({ id }) => {
  const { t } = useTranslation(); // Usa useTranslation para acceder a las traducciones

  return (
    <Box
      id={id} // Agrego el id para la navegación
      sx={{
        backgroundImage: "url(/images/contact_background.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        position: "relative",
      }}
    >
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
        {t("contacto.title")} {/* Usa la traducción para "Contáctanos" */}
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
        {t("contacto.button")}{" "}
        {/* Usa la traducción para "Envía un mail a Yoy Jara" */}
      </Button>
    </Box>
  );
};

export default Contacto;
