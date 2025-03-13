import React from "react";
import { Typography, Box, Grid, Divider } from "@mui/material";
import { motion } from "framer-motion";

// effectos para Motion
const slideInLeft = {
  hidden: { opacity: 0, transform: "translateX(-50px)" }, // Usa transform en lugar de x
  visible: {
    opacity: 1,
    transform: "translateX(0)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
const fadeInUp = {
  hidden: { opacity: 0.2, transform: "translateY(50px)" }, // En vez de 0, un inicio más gradual
  visible: {
    opacity: 1,
    transform: "translateY(0)",
    transition: {
      duration: 0.6, // Un poco más de duración para Safari
      ease: [0.25, 1, 0.5, 1], // Bezier curve más natural en Safari
      delay: 0.1, // Pequeño delay para evitar cortes en Safari
    },
  },
};

// Importar SpotifyEmbed usando lazy loading
const SpotifyEmbed = React.lazy(() => import("../common/spotifyEmbed"));

// Componente reutilizable para los embeds de YouTube
const YouTubeEmbed = ({ title, src }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    variants={slideInLeft}
    viewport={{ once: true, amount: 0.2 }}
    style={{ overflow: "hidden", willChange: "transform" }} // Optimización
  >
    <Box sx={{ mb: 10, mt: 10, mx: { xs: 2, sm: 6, md: 2, lg: 1 } }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <iframe
        width="100%"
        height="315"
        src={src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        style={{
          border: "none",
          borderRadius: "12px",
          boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
        allowFullScreen
      ></iframe>
    </Box>
  </motion.div>
);
// Componente reutilizable para los iconos de plataformas
const PlatformIcon = ({ href, src, alt }) => (
  <Grid item>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <motion.img
        src={src}
        alt={alt}
        whileHover={{ scale: 1.1, rotate: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{
          width: 120,
          height: 120,
          objectFit: "contain",
          marginTop: "0.5rem",
        }}
      />
    </a>
  </Grid>
);

const Musica = ({ id }) => {
  return (
    <Box
      id={id}
      sx={{
        backgroundImage: "url(/images/fondo_blanco.webp)",
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
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1200px",
          p: 8,
        }}
      >
        {/* Título principal */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          {" "}
          <Typography
            variant="h3"
            gutterBottom
            align="center"
            sx={{
              fontWeight: "bold",
              mb: 4,
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
            }}
          >
            Discografía
          </Typography>
        </motion.div>

        {/* Grid para el contenido */}
        <Grid container spacing={4}>
          {/* Sección de álbumes y sencillos (izquierda en pantallas grandes) */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: "bold", m: 2 }}
            >
              Sencillos
            </Typography>
            <Divider sx={{ my: 4, backgroundColor: "white" }} />

            <Box sx={{ mb: 4 }}>
              {/* Embed de Spotify */}
              <SpotifyEmbed
                title="Último lanzamiento (2025)"
                src="https://open.spotify.com/embed/album/4LfAiYP1a21k357yWiFDjs?utm_source=generator"
                height="352"
              />
              <SpotifyEmbed
                title="No me Rendire (2017)"
                src="https://open.spotify.com/embed/track/4zbs7iCTVYk2QiEnnCoRGI?utm_source=generator"
                height="152"
              />
              <SpotifyEmbed
                title="Yo te alabare (2016)"
                src="https://open.spotify.com/embed/track/44Rr3RIWe95QnOeYc23sUl?utm_source=generator"
                height="152"
              />
              <SpotifyEmbed
                title="Yo Siento Gozo (2017)"
                src="https://open.spotify.com/embed/track/6ZvKWNHnx8SO1iQXlDFs82?utm_source=generator"
                height="152"
              />
            </Box>
          </Grid>

          {/* Sección de videos de YouTube (derecha en pantallas grandes) */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ mt: 10, fontWeight: "bold", mb: 2, ml: 2 }}
            >
              Videos Musicales
            </Typography>
            <Divider sx={{ my: 4, backgroundColor: "white" }} />

            <Box sx={{ mb: 4 }}>
              {/* Embed de YouTube */}
              <YouTubeEmbed
                title="Yo Siento Gozo (2019)"
                src="https://www.youtube.com/embed/pbH8x3Mll0E?si=stQVKJsvzQdkppRD"
              />
              <YouTubeEmbed
                title="Blanco y Negro (2017)"
                src="https://www.youtube.com/embed/icPKTEZ4H3o?si=TdsJLLhs7dSoTlU5"
              />
            </Box>
          </Grid>

          {/* Enlace a todos los videos en YouTube */}
          <Grid m={"auto"} item>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: {
                  xs: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                },
              }}
            >
              <Typography sx={{ m: 2, fontWeight: "bold" }} variant="h3">
                Todos los videos acá:
              </Typography>
              <a
                href="https://www.youtube.com/@yoyjara3573"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.img
                  src="/images/youtube_Logo.svg"
                  alt="Youtube"
                  whileHover={{ scale: 1.1, rotate: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    ease: "easeOut",
                  }} // Mejor transición
                  style={{
                    width: 120,
                    height: 120,
                    objectFit: "contain",
                    marginTop: "0.5rem",
                    willChange: "transform", // Optimización
                  }}
                />
              </a>
            </Box>
          </Grid>
        </Grid>

        {/* Separador visual */}
        <Divider sx={{ my: 4, backgroundColor: "white" }} />

        {/* Enlaces a plataformas */}
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{
            fontWeight: "bold",
            mb: 4,
            mt: { xs: 4, sm: 4, md: 10, lg: 15, xl: 15 },
          }}
        >
          Escucha en todas las plataformas
        </Typography>
        <Grid
          sx={{
            mt: { xs: -4, sm: -4, md: -6, lg: -6 },
            display: "flex",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
          }}
          container
          spacing={2}
          justifyContent="center"
        >
          {/* Iconos de plataformas */}
          <PlatformIcon
            href="https://open.spotify.com/intl-es/artist/5mdBiXJlONCRpzhHIKYJwR?si=Rb7bws73ReSittJgAjp1fw"
            src="/images/logo_spotify.png"
            alt="Spotify"
          />
          <PlatformIcon
            href="https://music.apple.com/cr/artist/yoy-jara/1180808962"
            src="/images/Apple_Music_Logo.png"
            alt="Apple Music"
          />
          <PlatformIcon
            href="https://music.amazon.com/artists/B01N0Q0J4S/yoy-jara?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=CR&ref=dm_sh_CUGhxVkC0Oz4JuHHj9GUqdByL"
            src="/images/Amazon_Music_Logo.svg"
            alt="Amazon Music"
          />
        </Grid>
      </Box>
    </Box>
  );
};

export default Musica;
