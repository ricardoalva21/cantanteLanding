import React from "react";
import { Box, Typography, Grid2 } from "@mui/material"; // Mantengo Grid2
import { motion } from "framer-motion";

const Bio = ({ id }) => {
  // Animación para los párrafos
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 }, // Inicia invisible y ligeramente abajo
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Aparece y se mueve hacia arriba
  };

  return (
    <Box
      id={id} // Agrego el id para la navegación
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
          viewport={{ once: false, amount: 0.5 }} // Mantengo las animaciones
          variants={paragraphVariants}
        >
          <Typography variant="h2">YOY JARA</Typography>
          <Typography variant="subtitle1">
            Salmista, músico y ministro.
          </Typography>
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
            viewport={{ once: false, amount: 0.5 }} // Mantengo las animaciones
            variants={paragraphVariants}
          >
            <Typography variant="body1">
              Nació el 9 de marzo de 1981, en San José, Costa Rica. <br /> Nieto
              de pastores, Carlos Cascante Álvarez y Socorro Sánchez Sánchez,
              fundadores de la primera iglesia Cristiana "
              <strong>Jesús es el Camino</strong>" en Granadilla de Curridabat,
              en la capital de Costa Rica. Desde los 7 años, Yoy Jara inició su
              ministerio en la alabanza y adoración al Señor, tocando guitarra
              en la iglesia de sus abuelos.
            </Typography>
          </motion.div>
        </Grid2>

        {/* Párrafo 2 */}
        <Grid2 item xs={12} md={6}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }} // Mantengo las animaciones
            variants={paragraphVariants}
          >
            <Typography variant="body1">
              Con el paso de los años, enfrentó dificultades familiares,
              incluyendo el divorcio de sus padres, lo que lo llevó a asumir el
              rol de sustento para su hogar. A pesar de los desafíos, nunca
              perdió la fe y siguió desarrollando su ministerio musical,
              confiando en que Dios tenía un propósito mayor para él.
            </Typography>
          </motion.div>
        </Grid2>

        {/* Párrafo 3 */}
        <Grid2 item xs={12}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }} // Mantengo las animaciones
            variants={paragraphVariants}
          >
            <Typography variant="body1">
              Su carrera musical lo ha llevado a escenarios importantes dentro
              de la música cristiana. Ha participado en eventos como{" "}
              <strong>Expolit</strong> (Miami, 2016-2018),{" "}
              <strong>Expocristiana</strong> (México, 2017),{" "}
              <strong>Premios Arca</strong> (Venezuela, 2019) y{" "}
              <strong>Latinoamérica Despierta</strong> (Argentina, 2019). En
              2025, fue galardonado en los <strong>Monster Music Awards</strong>{" "}
              (México) como mejor artista urbano fusión.
            </Typography>
          </motion.div>
        </Grid2>

        {/* Párrafo 4 */}
        <Grid2 item xs={12} md={6}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }} // Mantengo las animaciones
            variants={paragraphVariants}
          >
            <Typography variant="body1">
              Su primer EP, "<strong>Confía</strong>", fue grabado en 2016 en
              los estudios de <strong>Sony Music</strong> en México, con la
              producción de <strong>Giorgio Torelli</strong>, quien ha trabajado
              con artistas como <strong>OV7</strong> y <strong>Kava</strong>. El
              EP incluyó cuatro temas: "<strong>Blanco y Negro</strong>", "
              <strong>Confía</strong>", "<strong>Yo te alabaré</strong>" y "
              <strong>Carta para ti</strong>". Posteriormente, en 2017 y 2018,
              lanzó sencillos como "<strong>No me rendiré</strong>", "
              <strong>Tú eres mi Dios</strong>", "
              <strong>Siento la Gloria de Dios</strong>" y "
              <strong>Yo siento Gozo</strong>", bajo la producción de{" "}
              <strong>Juan José Molina</strong> en Costa Rica.
            </Typography>
          </motion.div>
        </Grid2>

        {/* Párrafo 5 */}
        <Grid2 item xs={12} md={6}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }} // Mantengo las animaciones
            variants={paragraphVariants}
          >
            <Typography variant="body1">
              En 2019, estrenó el video musical de "
              <strong>Yo Siento Gozo</strong>", producido por
              <strong> Gatsby Producciones</strong> y el{" "}
              <strong>Instituto Internacional de Jubileo Costa Rica</strong>. En
              abril de 2020, lanzó un nuevo video musical de "
              <strong>Confía</strong>", producido por Primula Films en Costa
              Rica. Su más reciente lanzamiento, "<strong>Gracias Señor</strong>
              ", está disponible en todas las plataformas digitales desde marzo
              de 2025.
            </Typography>
          </motion.div>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Bio;