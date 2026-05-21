"use client"

import { useEffect, useState } from "react"

const LOADER_CONFIG = {
  duration: 2500,

  text: "ASTERIÓN",

  subtext: "Guardián del Laberinto",

  loadingText: "Cargando experiencia...",

  showProgress: true,

  showSpinner: true,

  colors: {
    background: "#0C1519",
    primary: "#CF9D7B",
    secondary: "#724B39",
    border: "#3A3534",
  }
}

export function Loader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, LOADER_CONFIG.duration / 50)

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, LOADER_CONFIG.duration)

    return () => {
      clearTimeout(timer)
      clearInterval(progressInterval)
    }
  }, [])

  if (!isLoading) return null

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
      {/* Fondo con partículas */}
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

      {/* Contenedor principal */}
      <div className="relative flex flex-col items-center gap-8">

        {/* Spinner */}
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
              {/* Punto brillante */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                style={{
                  backgroundColor: colors.primary,
                  boxShadow: `0 0 10px ${colors.primary}, 0 0 20px ${colors.primary}`
                }}
              />
            </div>

            {/* Anillo interior */}
            <div
              className="absolute inset-4 rounded-full border"
              style={{
                borderColor: `${colors.secondary}80`,
                animation: "loader-spin 2s linear infinite reverse"
              }}
            />

            {/* Logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/images/Logo.png"
                alt="Asterión"
                className="w-12 h-12 object-contain opacity-90"
                style={{
                  animation: "loader-pulse 2s ease-in-out infinite",
                  filter: `drop-shadow(0 0 10px ${colors.primary})`
                }}
              />
            </div>

          </div>
        )}

        {/* Texto */}
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

        {/* Barra de progreso */}
        {LOADER_CONFIG.showProgress && (
          <div className="w-48 md:w-64">

            <div
              className="h-[2px] rounded-full overflow-hidden"
              style={{ backgroundColor: colors.border }}
            >
              <div
                className="h-full transition-all duration-100 ease-out"
                style={{
                  width: `${progress}%`,
                  background: `linear-gradient(to right, ${colors.secondary}, ${colors.primary})`
                }}
              />
            </div>

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