import React from "react";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import LanguageSharpIcon from "@mui/icons-material/LanguageSharp"; // Importa el ícono

const LanguageToggleButton = () => {
  const { i18n } = useTranslation(); // Accede a i18n para cambiar el idioma

  // Función para cambiar el idioma
  const toggleLanguage = () => {
    const newLanguage = i18n.language === "es" ? "en" : "es"; // Alterna entre 'es' y 'en'
    i18n.changeLanguage(newLanguage);
  };

  // Texto del botón
  const buttonText = i18n.language === "es" ? "english" : "español";

  return (
    <Button
      color="inherit"
      onClick={toggleLanguage}
      endIcon={<LanguageSharpIcon />} // Agrega el ícono
      sx={{
        textTransform: "none", // Evita que el texto se convierta en mayúsculas
        "&:hover": {
          backgroundColor: "primary.main",
          color: "black",
          borderRadius: "8px",
        },
      }}
    >
      {buttonText}
    </Button>
  );
};

export default LanguageToggleButton;