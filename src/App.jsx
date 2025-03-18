import React, { Suspense } from "react";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import './i18n/i18n';


// Carga dinámica de las secciones
const Bio = React.lazy(() => import("./components/sections/Bio"));
const Musica = React.lazy(() => import("./components/sections/Musica"));
const Contacto = React.lazy(() => import("./components/sections/Contacto"));
const Footer = React.lazy(() => import("./components/sections/Footer"));

function App() {
  return (
    <>
      {/* Header se muestra en todas las páginas */}
      <Header />

      {/* Contenido de la página */}
      <main>
        <Hero />
        <Suspense fallback={<div>Cargando Biografía...</div>}>
          <Bio id="biografia" />
        </Suspense>
        <Suspense fallback={<div>Cargando Música...</div>}>
          <Musica id="musica" />
        </Suspense>
        <Suspense fallback={<div>Cargando Contacto...</div>}>
          <Contacto id="contacto" />
        </Suspense>
      </main>
      <Suspense fallback={<div>Cargando Footer</div>}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
