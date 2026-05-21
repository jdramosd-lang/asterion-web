/* ============================================
   ASTERIÓN: GUARDIÁN DEL LABERINTO
   Página Principal
   
   Esta página integra todos los componentes
   de la experiencia web inmersiva del Minotauro.
   ============================================ */

import { Loader } from "@/components/asterion/loader"
import { Navbar } from "@/components/asterion/navbar"
import { HeroSection } from "@/components/asterion/hero-section"
import { HistorySection } from "@/components/asterion/history-section"
import { MediaSection } from "@/components/asterion/media-section"
import { Experience3DSection } from "@/components/asterion/experience-3d-section"
import { PdfSection } from "@/components/asterion/pdf-section"
import { ContactSection } from "@/components/asterion/contact-section"
import { Footer } from "@/components/asterion/footer"

export default function AsterionPage() {
  return (
    <>
      {/*============================================
          LOADER INICIAL
          
          Para editar el loader:
          1. Abre components/asterion/loader.tsx
          2. Modifica LOADER_CONFIG al inicio del archivo
          3. Puedes cambiar: duration, text, subtext, showProgress, showSpinner
          ============================================*/}
      <Loader />

      {/*Navegación fija*/}
      <Navbar />

      {/*Contenido principal*/}
      <main>
        {/* Sección Hero - Pantalla de inicio con título épico */}
        <HeroSection />

        {/* Sección Historia - Narrativa del Minotauro */}
        <HistorySection />

        {/* Sección Media - Video trailer y galería de concept art */}
        <MediaSection />

        {/* Sección PDF - Revista digital descargable (parte de Media) */}
        <PdfSection />

        {/* Sección Experiencia 3D - Visualizador interactivo */}
        <Experience3DSection />

        {/* Sección Contacto - Formulario */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}
