"use client"

import { useEffect, useRef, useState } from "react"
import { RotateCcw, Maximize2, Move } from "lucide-react"

export function Experience3DSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [rotation, setRotation] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Rotación automática sutil
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.5) % 360)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="experiencia-3d"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-[#0C1519] via-[#162127] to-[#0C1519]"
    >
      {/* Efecto de cuadrícula futurista */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #724B39 1px, transparent 1px),
            linear-gradient(to bottom, #724B39 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Partículas tecnológicas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#CF9D7B]/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${8 + Math.random() * 6}s linear infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Contenido de texto */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-[0.15em] text-[#CF9D7B] mb-6">
              DESCUBRE AL MINOTAURO DESDE TODOS LOS ÁNGULOS
            </h2>
            
            <div className="w-24 h-[1px] bg-gradient-to-r from-[#CF9D7B]/50 to-transparent mb-8" />
            
            <p className="font-sans text-base md:text-lg text-[#CF9D7B]/70 leading-relaxed mb-8">
              Explora cada detalle de la criatura en una experiencia inmersiva e interactiva. 
              Arrastra o desliza para girarlo en 360°.
            </p>

            {/* Badge 360° */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#162127] border border-[#3A3534] rounded-sm">
              <span className="font-serif text-3xl text-[#CF9D7B]">360°</span>
              <span className="text-[#CF9D7B]/50 text-sm">Interactivo</span>
            </div>

            {/* Instrucciones */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-[#CF9D7B]/50 text-sm">
                <Move className="w-4 h-4" />
                <span>Arrastra para rotar</span>
              </div>
              <div className="flex items-center gap-2 text-[#CF9D7B]/50 text-sm">
                <Maximize2 className="w-4 h-4" />
                <span>Pinch para zoom</span>
              </div>
              <div className="flex items-center gap-2 text-[#CF9D7B]/50 text-sm">
                <RotateCcw className="w-4 h-4" />
                <span>Doble tap para resetear</span>
              </div>
            </div>
          </div>

          {/* Área del modelo 3D */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Contenedor del modelo 3D con efectos */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#162127] to-[#0C1519] border border-[#3A3534]">
                {/* Anillos decorativos giratorios */}
                <div 
                  className="absolute inset-4 rounded-full border border-[#724B39]/30"
                  style={{ transform: `rotate(${rotation}deg)` }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#CF9D7B]" />
                </div>
                
                <div 
                  className="absolute inset-8 rounded-full border border-[#3A3534]/50"
                  style={{ transform: `rotate(${-rotation * 0.7}deg)` }}
                >
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#724B39]" />
                </div>

                <div 
                  className="absolute inset-12 rounded-full border border-dashed border-[#724B39]/20"
                  style={{ transform: `rotate(${rotation * 0.5}deg)` }}
                />

                {/* Área central para el modelo 3D */}
                <div className="absolute inset-16 rounded-full bg-[#0C1519]/50 flex items-center justify-center">
                  {/* Placeholder para el modelo 3D real */}
                  <div className="text-center">
                    <div 
                      className="w-24 h-24 mx-auto mb-4 border-2 border-[#CF9D7B]/30 rounded-lg flex items-center justify-center"
                      style={{ 
                        transform: `rotateY(${rotation}deg)`,
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      <span className="text-[#CF9D7B]/50 text-4xl">🐂</span>
                    </div>
                    <p className="text-[#CF9D7B]/40 text-sm">
                      Modelo 3D<br />
                      <span className="text-xs">(Aquí se integrará el visor 3D)</span>
                    </p>
                  </div>
                </div>

                {/* Glow effect */}
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    boxShadow: 'inset 0 0 100px rgba(207, 157, 123, 0.1)',
                  }}
                />
              </div>

              {/* Esquinas decorativas */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-[#CF9D7B]/30" />
              <div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-[#CF9D7B]/30" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-[#CF9D7B]/30" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-[#CF9D7B]/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
