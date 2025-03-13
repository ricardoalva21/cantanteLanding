import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Crea un tema base
let theme = createTheme({
  palette: {
    primary: {
      // main: '#1976d2', // Color principal
      main: '#807F80'
    },
    secondary: {
      main: '#dc004e', // Color secundario
    },
  },
  typography: {
    fontFamily: '"Crimson Text","Roboto", "Helvetica", "Arial", "sans-serif"',
    h1: {
      fontSize: '3rem', // Tamaño de fuente para h1
      fontWeight: 500, // Grosor de la fuente
    },
    h2: {
      fontSize: '2.5rem', // Tamaño de fuente para h2
      fontWeight: 500,
    },
    h3: {
      fontSize: '2rem', // Tamaño de fuente para h3
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem', // Tamaño de fuente para body1
    },
  },
});

// Aplica responsiveFontSizes al tema
theme = responsiveFontSizes(theme, {
  factor: 2, // Factor de escalado (por defecto es 2)
  breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'], // Breakpoints a considerar
  variants: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'body1'], // Variantes a escalar
});

export default theme;




// .crimson-text-regular {
//   font-family: "Crimson Text", serif;
//   font-weight: 400;
//   font-style: normal;
// }

// .crimson-text-semibold {
//   font-family: "Crimson Text", serif;
//   font-weight: 600;
//   font-style: normal;
// }

// .crimson-text-bold {
//   font-family: "Crimson Text", serif;
//   font-weight: 700;
//   font-style: normal;
// }

// .crimson-text-regular-italic {
//   font-family: "Crimson Text", serif;
//   font-weight: 400;
//   font-style: italic;
// }

// .crimson-text-semibold-italic {
//   font-family: "Crimson Text", serif;
//   font-weight: 600;
//   font-style: italic;
// }

// .crimson-text-bold-italic {
//   font-family: "Crimson Text", serif;
//   font-weight: 700;
//   font-style: italic;
// }
