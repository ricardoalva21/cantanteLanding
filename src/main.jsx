import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa desde 'react-dom/client'
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';

// Crea un root usando createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza la aplicación
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);