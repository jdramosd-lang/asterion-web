"use client"

import { useEffect, useRef, useState } from "react"
import { Download, BookOpen, FileText } from "lucide-react"

export function PdfSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
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

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden bg-[#0C1519]"
    >
      {/* Efecto de luz ambiental */}
      <div className="absolute inset-0">
        <div className="absolute top-[75%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-[#CF9D7B]/4 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Tarjeta de revista */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
          >
            <div
              className="relative group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Sombra y glow */}
              <div
                className={`absolute inset-0 rounded-sm transition-all duration-500 ${isHovered
                  ? 'shadow-[0_0_60px_rgba(207,157,123,0.3)] translate-y-[-5px]'
                  : 'shadow-[0_20px_60px_rgba(0,0,0,0.5)]'
                  }`}
              />

              {/* Contenedor de la revista */}
              <div
                className={`relative aspect-[3/4] bg-gradient-to-br from-[#162127] to-[#0C1519] border border-[#3A3534] rounded-sm overflow-hidden transition-all duration-500 ${isHovered ? 'border-[#CF9D7B]/50' : ''
                  }`}
              >
                <img
                  src="/images/revista-cover.jpg"
                  alt="Portada revista Asterión"
                  className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
                {/* Decoración de portada */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  {/* Cabecera */}
                  <div>
                    <div className="w-12 h-[1px] bg-[#CF9D7B]/50 mb-4" />
                    <p className="font-mono text-xs text-[#CF9D7B]/40 uppercase tracking-widest">
                      Revista Digital
                    </p>
                  </div>

                  {/* Centro */}
                  <div className="text-center">
                    <BookOpen className="w-16 h-16 mx-auto text-[#CF9D7B]/30 mb-4" />
                    <h3 className="font-serif text-2xl md:text-3xl tracking-[0.15em] text-[#CF9D7B]">
                      ASTERIÓN
                    </h3>
                    <p className="font-sans text-sm text-[#CF9D7B]/50 mt-2">
                      El Proceso Creativo
                    </p>
                  </div>

                  {/* Pie */}
                  <div className="flex items-center justify-between">
                    <FileText className="w-5 h-5 text-[#CF9D7B]/30" />
                    <p className="font-mono text-xs text-[#CF9D7B]/30">PDF</p>
                  </div>
                </div>

                {/* Líneas decorativas */}
                <div className="absolute top-0 right-8 w-[1px] h-full bg-gradient-to-b from-transparent via-[#CF9D7B]/10 to-transparent" />
                <div className="absolute bottom-8 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#CF9D7B]/10 to-transparent" />

                {/* Efecto de página */}
                <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-[#0C1519]/50 to-transparent" />
              </div>

              {/* Reflejo */}
              <div
                className={`absolute -bottom-8 left-0 right-0 h-16 bg-gradient-to-b from-[#CF9D7B]/5 to-transparent blur-sm transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
              />
            </div>
          </div>

          {/* Contenido de texto */}
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
          >
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-[0.1em] text-[#CF9D7B] mb-6">
              Explora el Minotauro más allá de la pantalla.
            </h2>

            <p className="font-sans text-base md:text-lg text-[#CF9D7B]/70 leading-relaxed mb-8">
              Adéntrate en el universo de Asterión y descubre el proceso creativo detrás
              de su diseño, reinterpretación y modelado en 3D. Un recorrido visual lleno
              de arte conceptual, narrativa y detalles del proyecto que podrás explorar
              al hacer clic en
            </p>

            {/* Características */}
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="px-3 py-1 text-xs text-[#CF9D7B]/60 border border-[#3A3534] rounded-sm">
                Historia completa
              </span>
              <span className="px-3 py-1 text-xs text-[#CF9D7B]/60 border border-[#3A3534] rounded-sm">
                Arte conceptual
              </span>
              <span className="px-3 py-1 text-xs text-[#CF9D7B]/60 border border-[#3A3534] rounded-sm">
                Proceso 3D
              </span>
            </div>

            {/* Botón de descarga */}
            <a
              href="https://www.behance.net/gallery/249725415/Revista-Acadmica-Asterion"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#CF9D7B]/10 border border-[#CF9D7B]/30 rounded-sm text-[#CF9D7B] tracking-wider uppercase text-sm transition-all duration-300 hover:bg-[#CF9D7B]/20 hover:border-[#CF9D7B]/60 hover:shadow-[0_0_30px_rgba(207,157,123,0.2)]"
            >
              <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              <span>Ver PDF</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
