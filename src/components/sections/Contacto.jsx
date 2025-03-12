import React from "react";
import { Typography, Box } from "@mui/material";

const Contacto = ({ id }) => {
  return (
    <Box id={id} sx={{
            backgroundImage: "url(/images/fondo_blancoyNegro.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            maxHeight: "100vh",
            width: "100%",
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
              zIndex: 1,
            }}
          />
      <Typography variant="h2" gutterBottom>
        Contacto
      </Typography>
      <Typography variant="h5" gutterBottom>
        Ponte en contacto con Yoy Jara.
      </Typography>
    </Box>
  );
};

export default Contacto;
