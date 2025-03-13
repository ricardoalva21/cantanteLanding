// components/SpotifyEmbed.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

// Animación de entrada
const fadeInUp = {
    hidden: { opacity: 0.2, transform: "translateY(50px)" }, // En vez de 0, un inicio más gradual
    visible: { 
      opacity: 1, 
      transform: "translateY(0)",
      transition: { 
        duration: 0.6, // Un poco más de duración para Safari
        ease: [0.25, 1, 0.5, 1], // Bezier curve más natural en Safari
        delay: 0.1, // Pequeño delay para evitar cortes en Safari
      } 
    },
  };
  

const SpotifyEmbed = ({ title, src, height }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    variants={fadeInUp}
    viewport={{ once: true, amount: 0.3 }}
  >
    <Box
      sx={{ mb: 2, mx: { xs: 5, sm: 6, md: 2, lg: 1 } }}
      style={{ willChange: "transform" }} // Solo en el Box, no en motion.div
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <iframe
        title={title}
        src={src}
        width="100%"
        height={height}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style={{
          border: "none",
          borderRadius: "12px",
          boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      ></iframe>
    </Box>
  </motion.div>
);

export default SpotifyEmbed;
