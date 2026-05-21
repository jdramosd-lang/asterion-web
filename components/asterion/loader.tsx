"use client"

import { useEffect, useState } from "react"

/* ============================================
   LOADER INICIAL - FÁCILMENTE EDITABLE
   
   ╔══════════════════════════════════════════╗
   ║  CÓMO EDITAR ESTE LOADER EN VS CODE:     ║
   ║                                          ║
   ║  1. Busca LOADER_CONFIG abajo            ║
   ║  2. Cambia los valores según necesites   ║
   ║  3. Guarda el archivo (Ctrl+S)           ║
   ║  4. El cambio se verá automáticamente    ║
   ╚══════════════════════════════════════════╝
   
   OPCIONES DISPONIBLES:
   - duration: Tiempo del loader en milisegundos
   - text: Título principal
   - subtext: Subtítulo
   - loadingText: Texto en la parte inferior
   - showProgress: Mostrar/ocultar barra de progreso
   - showSpinner: Mostrar/ocultar anillo giratorio
   - colors: Paleta de colores personalizable
   
   COLORES POR DEFECTO (del moodboard):
   - background: #0C1519 (negro profundo)
   - primary: #CF9D7B (beige antiguo)
   - secondary: #724B39 (oliva oscuro)
   - border: #3A3534 (marrón oscuro)
   ============================================ */

// ╔════════════════════════════════════════════════════════════╗
// ║         CONFIGURACIÓN DEL LOADER - EDITA AQUÍ              ║
// ╚════════════════════════════════════════════════════════════╝
const LOADER_CONFIG = {
  // ⏱️ Duración total del loader (en milisegundos)
  // Ejemplos: 1500 = 1.5 segundos, 3000 = 3 segundos
  duration: 2500,
  
  // 📝 Texto principal del loader (título grande)
  text: "ASTERIÓN",
  
  // 📝 Subtexto del loader (debajo del título)
  subtext: "Guardián del Laberinto",
  
  // 📝 Texto que aparece en la parte inferior
  loadingText: "Cargando experiencia...",
  
  // ✅ Mostrar barra de progreso (true/false)
  showProgress: true,
  
  // ✅ Mostrar anillo giratorio (true/false)
  showSpinner: true,
  
  // 🎨 COLORES - Cambia estos valores para personalizar
  colors: {
    background: "#0C1519",  // Color de fondo
    primary: "#CF9D7B",     // Color principal (texto y acentos)
    secondary: "#724B39",   // Color secundario (degradados)
    border: "#3A3534",      // Color de bordes
  }
}
// ════════════════════════════════════════════════════════════════

export function Loader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Animación de progreso
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, LOADER_CONFIG.duration / 50)

    // Ocultar loader después de la duración configurada
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, LOADER_CONFIG.duration)

    return () => {
      clearTimeout(timer)
      clearInterval(progressInterval)
    }
  }, [])

  if (!isLoading) return null

  // Extraer colores de la configuración para uso en estilos inline
  const { colors } = LOADER_CONFIG

  return (
    <div 
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-500"
      style={{ 
        backgroundColor: colors.background,
        opacity: progress >= 100 ? 0 : 1,
        pointerEvents: progress >= 100 ? "none" : "auto"
      }}
    >
      {/* Fondo con partículas sutiles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: `${colors.primary}33`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Contenedor principal del loader */}
      <div className="relative flex flex-col items-center gap-8">
        
        {/* Anillo giratorio - EDITABLE */}
        {LOADER_CONFIG.showSpinner && (
          <div className="relative">
            {/* Anillo exterior */}
            <div 
              className="w-24 h-24 rounded-full border-2"
              style={{ 
                borderColor: colors.border,
                animation: "loader-spin 3s linear infinite" 
              }}
            >
              {/* Indicador de progreso en el anillo */}
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                style={{ 
                  backgroundColor: colors.primary,
                  boxShadow: `0 0 10px ${colors.primary}, 0 0 20px ${colors.primary}` 
                }}
              />
            </div>
            
            {/* Anillo interior (gira en dirección opuesta) */}
            <div 
              className="absolute inset-4 rounded-full border"
              style={{ 
                borderColor: `${colors.secondary}80`,
                animation: "loader-spin 2s linear infinite reverse" 
              }}
            />
            
            {/* Símbolo central - Laberinto estilizado */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg 
                className="w-8 h-8" 
                viewBox="0 0 24 24" 
                fill="none"
                style={{ 
                  color: colors.primary,
                  animation: "loader-pulse 2s ease-in-out infinite" 
                }}
              >
                <path 
                  d="M12 2L2 7v10l10 5 10-5V7L12 2z" 
                  stroke="currentColor" 
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path 
                  d="M12 22V12M2 7l10 5 10-5" 
                  stroke="currentColor" 
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        )}

        {/* Texto del loader - EDITABLE */}
        <div className="text-center">
          <h1 
            className="font-serif text-3xl md:text-4xl tracking-[0.3em] mb-2"
            style={{ 
              color: colors.primary,
              animation: "loader-pulse 2s ease-in-out infinite" 
            }}
          >
            {LOADER_CONFIG.text}
          </h1>
          <p 
            className="font-sans text-sm tracking-[0.2em] uppercase"
            style={{ color: `${colors.primary}99` }}
          >
            {LOADER_CONFIG.subtext}
          </p>
        </div>

        {/* Barra de progreso - EDITABLE */}
        {LOADER_CONFIG.showProgress && (
          <div className="w-48 md:w-64">
            {/* Fondo de la barra */}
            <div 
              className="h-[2px] rounded-full overflow-hidden"
              style={{ backgroundColor: colors.border }}
            >
              {/* Progreso */}
              <div 
                className="h-full transition-all duration-100 ease-out"
                style={{ 
                  width: `${progress}%`,
                  background: `linear-gradient(to right, ${colors.secondary}, ${colors.primary})`
                }}
              />
            </div>
            {/* Porcentaje */}
            <p 
              className="text-center text-xs mt-2 font-mono"
              style={{ color: `${colors.primary}66` }}
            >
              {progress}%
            </p>
          </div>
        )}
      </div>

      {/* Texto inferior */}
      <p 
        className="absolute bottom-8 text-xs tracking-widest uppercase"
        style={{ color: `${colors.primary}4D` }}
      >
        {LOADER_CONFIG.loadingText}
      </p>
    </div>
  )
}
