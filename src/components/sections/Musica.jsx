import React from "react";
import { Typography, Box, Grid, Divider } from "@mui/material";

const Musica = ({ id }) => {
  return (
    <Box
      id={id} // Agrego el id para la navegación
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
        <Typography
          variant="h3"
          gutterBottom
          align="center"
          sx={{ fontWeight: "bold", mb: 4 }}
        >
          Discografía
        </Typography>

        {/* Grid para el contenido */}
        <Grid container spacing={4}>
          {/* Sección de álbumes y sencillos (izquierda en pantallas grandes) */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              Álbumes y Sencillos
            </Typography>
            <Box sx={{ mb: 4 }}>
              {/* Aquí irían los embeds de Spotify */}
              <Box sx={{ mb: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Último lanzamiento
                </Typography>
                {/* Embed de Spotify (ejemplo) */}
                <iframe
                  title="spotify-embed-1"
                  src="https://open.spotify.com/embed/album/4LfAiYP1a21k357yWiFDjs?utm_source=generator"
                  width="100%"
                  height="352"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  style={{ border: "none", borderRadius: "12px" }} // Elimina el borde y añade bordes redondeados
                ></iframe>
              </Box>
              {/* spotify little1 */}
              <Box sx={{ mb: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Lanzamiento anterior
                </Typography>
                {/* Embed de Spotify (ejemplo) */}
                <iframe
                  title="spotify-embed-2"
                  src="https://open.spotify.com/embed/track/4zbs7iCTVYk2QiEnnCoRGI?utm_source=generator"
                  width="100%"
                  height="152"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  style={{ border: "none", borderRadius: "12px" }} // Elimina el borde y añade bordes redondeados
                ></iframe>
              </Box>
              {/* spotify little2 */}
              <Box sx={{ mb: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Lanzamiento anterior
                </Typography>
                {/* Embed de Spotify (ejemplo) */}
                <iframe
                  title="spotify-embed-2"
                  src="https://open.spotify.com/embed/track/44Rr3RIWe95QnOeYc23sUl?utm_source=generator"
                  width="100%"
                  height="152"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  style={{ border: "none", borderRadius: "12px" }} // Elimina el borde y añade bordes redondeados
                ></iframe>
              </Box>
            </Box>
          </Grid>

          {/* Sección de videos de YouTube (derecha en pantallas grandes) */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              Videos Musicales
            </Typography>
            <Box sx={{ mb: 4 }}>
              {/* Aquí irían los embeds de YouTube */}
              <Box sx={{ mb: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Yo Siento Gozo (2019)
                </Typography>
                {/* Embed de YouTube (ejemplo) */}
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/pbH8x3Mll0E?si=stQVKJsvzQdkppRD"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  style={{ border: "none", borderRadius: "12px" }} // Elimina el borde y añade bordes redondeados
                  allowFullScreen
                ></iframe>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Blanco y Negro
                </Typography>
                {/* Embed de YouTube (ejemplo) */}
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/icPKTEZ4H3o?si=TdsJLLhs7dSoTlU5"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  style={{ border: "none", borderRadius: "12px" }} // Elimina el borde y añade bordes redondeados
                  allowFullScreen
                ></iframe>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Separador visual */}
        <Divider sx={{ my: 4, backgroundColor: "white" }} />

        {/* Sección de enlaces a plataformas */}
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ fontWeight: "bold", mb: 4 }}
        >
          Escucha en todas las plataformas
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {/* Icono y enlace a Spotify */}
          <Grid item>
            <a
              href="https://open.spotify.com/intl-es/artist/5mdBiXJlONCRpzhHIKYJwR?si=Rb7bws73ReSittJgAjp1fw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/logo_spotify.png" // Ruta local del logo de Spotify
                alt="Spotify"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                }}
              />
            </a>
          </Grid>

          {/* Icono y enlace a Apple Music */}
          <Grid item>
            <a
              href="https://music.apple.com/cr/artist/yoy-jara/1180808962"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/Apple_Music_Logo.png" // Ruta local del logo de Apple Music
                alt="Apple Music"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                }}
              />
            </a>
          </Grid>

          {/* Icono y enlace a Amazon Music */}
          <Grid item>
            <a
              href="https://music.amazon.com/artists/B01N0Q0J4S/yoy-jara?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=CR&ref=dm_sh_CUGhxVkC0Oz4JuHHj9GUqdByL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/Amazon_Music_Logo.svg" // Ruta local del logo de Amazon Music
                alt="Amazon Music"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                }}
              />
            </a>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Musica;
