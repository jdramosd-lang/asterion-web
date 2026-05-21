"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const [particles] = useState(() =>
    [...Array(30)].map(() => ({
      width: 2 + Math.random() * 4,
      height: 2 + Math.random() * 4,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 5 + Math.random() * 10,
      delay: Math.random() * 5,
    }))
  )

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2700)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Fondo */}
      <div className="absolute inset-0 bg-[#0C1519]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: "url(/images/hero-bg.jpg)" }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#0C1519] via-transparent to-[#0C1519]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C1519]/80 via-transparent to-[#0C1519]/80" />

        {/* Textura */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, #724B39 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Partículas */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-[#CF9D7B]/10"
              style={{
                width: `${particle.width}px`,
                height: `${particle.height}px`,
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animation: `float ${particle.duration}s ease-in-out infinite`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}
        </div>

        {/* Neblina */}
        <div
          className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#162127]/50 to-transparent"
          style={{ animation: "fog 20s ease-in-out infinite" }}
        />
      </div>

      {/* Contenido */}
      <div
        className={`relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
          }`}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

          {/* Texto */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent to-[#CF9D7B]/50" />
              <div className="w-2 h-2 rotate-45 border border-[#CF9D7B]/50" />
              <div className="w-16 md:w-24 h-[1px] bg-gradient-to-l from-transparent to-[#CF9D7B]/50" />
            </div>

            <h1
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.2em] text-[#CF9D7B] mb-4"
              style={{
                textShadow: "0 0 60px rgba(207, 157, 123, 0.3)",
              }}
            >
              ASTERIÓN
            </h1>

            <p className="font-serif font-bold text-xl sm:text-2xl md:text-3xl tracking-[0.15em] text-[#CF9D7B]/70 uppercase mb-8">
              Guardián del Laberinto
            </p>

            <p className="font-sans text-base md:text-lg text-[#CF9D7B]/50 max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed">
              Descubre la historia del Minotauro como nunca antes. Explora su
              origen, su reinterpretación y el proceso creativo detrás de su
              diseño en un recorrido visual e interactivo que te sumergirá en su mundo.
            </p>

            <a
              href="#historia"
              className="group inline-flex items-center gap-3 px-8 py-4 border border-[#CF9D7B]/30 rounded-sm text-[#CF9D7B] tracking-wider uppercase text-sm transition-all duration-300 hover:bg-[#CF9D7B]/10 hover:border-[#CF9D7B]/60 hover:shadow-[0_0_30px_rgba(207,157,123,0.2)]"
            >
              <span>Explorar</span>
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Imagen del Minotauro */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full max-w-3xl flex items-center justify-center">
              <img
                src="/images/minotauro.png"
                alt="Minotauro"
                className="max-w-full max-h-[950px] object-contain mx-auto scale-155"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Indicador scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#CF9D7B]/50 to-transparent" />
      </div>

      {/* Badge */}
      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-1 text-[#CF9D7B]/40">
        <div className="w-10 h-10 border border-current rounded flex items-center justify-center text-xs">
          +15
        </div>
        <span className="text-[8px] uppercase tracking-wider">R</span>
      </div>
    </section>
  )
}