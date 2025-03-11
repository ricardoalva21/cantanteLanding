import React from "react";
import { Typography, Box } from "@mui/material";

const Contacto = ({ id }) => {
  return (
    <Box id={id} sx={{ textAlign: "center", padding: "100px 20px" }}>
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
