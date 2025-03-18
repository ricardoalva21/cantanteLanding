import React from "react";
import { Box, Typography, Grid2 } from "@mui/material"; 
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // Importa useTranslation

const Bio = ({ id }) => {
  const { t } = useTranslation(); // Usa el hook useTranslation

  // Animación para los párrafos
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Box
      id={id}
      sx={{
        backgroundImage: "url(/images/fondo_bio.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
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
      {/* Contenido */}
      <Box sx={{ p: 4, position: "relative", zIndex: 2 }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={paragraphVariants}
        >
          <Typography variant="h2">{t("bio.title")}</Typography>
          <Typography variant="subtitle1">{t("bio.subtitle")}</Typography>
        </motion.div>
      </Box>

      <Grid2
        container
        spacing={4}
        sx={{
          position: "relative",
          zIndex: 2,
          p: 4,
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Párrafo 1 */}
        <Grid2 item xs={12} md={6}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={paragraphVariants}
          >
            <Typography variant="body1" dangerouslySetInnerHTML={{ __html: t("bio.paragraph1") }} />
          </motion.div>
        </Grid2>

        {/* Párrafo 2 */}
        <Grid2 item xs={12} md={6}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={paragraphVariants}
          >
            <Typography variant="body1" dangerouslySetInnerHTML={{ __html: t("bio.paragraph2") }} />
          </motion.div>
        </Grid2>

        {/* Párrafo 3 */}
        <Grid2 item xs={12}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={paragraphVariants}
          >
            <Typography variant="body1" dangerouslySetInnerHTML={{ __html: t("bio.paragraph3") }} />
          </motion.div>
        </Grid2>

        {/* Párrafo 4 */}
        <Grid2 item xs={12} md={6}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={paragraphVariants}
          >
            <Typography variant="body1" dangerouslySetInnerHTML={{ __html: t("bio.paragraph4") }} />
          </motion.div>
        </Grid2>

        {/* Párrafo 5 */}
        <Grid2 item xs={12} md={6}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={paragraphVariants}
          >
            <Typography variant="body1" dangerouslySetInnerHTML={{ __html: t("bio.paragraph5") }} />
          </motion.div>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Bio;