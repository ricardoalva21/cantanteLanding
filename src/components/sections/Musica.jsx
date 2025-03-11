import React from "react";
import { Typography, Box } from "@mui/material";

const Musica = ({id}) => {
  return (
    <Box 
    id={id}
    sx={{ textAlign: "center", padding: "100px 20px" }}>
      <Typography variant="h2" gutterBottom>
        Música
      </Typography>
      <Typography variant="h5" gutterBottom>
        Explora la música de Yoy Jara.
      </Typography>
    </Box>
  );
};

export default Musica;