"use client"

import { useEffect, useRef, useState } from "react"

export function HistorySection() {
  const [isVisible, setIsVisible] = useState(false)
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
      id="historia"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-[#0C1519] via-[#162127] to-[#0C1519]"
    >
      {/* Textura de fondo */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23CF9D7B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de sección */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-[0.15em] text-[#CF9D7B] mb-4">
            HISTORIA
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#CF9D7B]/50 to-transparent mx-auto" />
        </div>

        {/* Contenido con imagen y texto */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* Columna izquierda - Espacio para imagen */}
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
          >
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg">
              <img
                src="/images/history-image.png"
                alt="Historia del Minotauro"
                className="w-full h-full object-contain bg-[#162127]"
              />

              {/* Overlay cinematográfico */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1519]/60 via-transparent to-[#162127]/20" />

              {/* Bordes decorativos */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[#CF9D7B]/30" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#CF9D7B]/30" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[#CF9D7B]/30" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[#CF9D7B]/30" />
            </div>
          </div>

          {/* Columna derecha - Texto */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
          >
            <p className="font-sans text-base md:text-lg text-[#CF9D7B]/70 leading-relaxed">
              En la antigua Creta, bajo el reinado del rey Minos, nació una historia
              destinada a perdurar en el tiempo. Todo comenzó con un desafío a los dioses,
              un acto de orgullo que desencadenó una maldición imposible de evitar.
            </p>
            <p className="font-sans text-base md:text-lg text-[#CF9D7B]/70 leading-relaxed">
              De esa transgresión surgió una criatura única: el Minotauro, mitad hombre
              y mitad toro, condenado desde su origen a no pertenecer a ningún mundo.
            </p>
            <p className="font-sans text-base md:text-lg text-[#CF9D7B]/70 leading-relaxed">
              Para ocultar aquello que no podía ser comprendido, se construyó el laberinto,
              una estructura tan compleja como el destino del propio ser que habitaba en
              su interior.
            </p>
            <p className="font-sans text-base md:text-lg text-[#CF9D7B]/70 leading-relaxed">
              Allí, entre pasillos interminables, el Minotauro creció en soledad,
              convertido en leyenda, en temor y en símbolo de lo desconocido.
            </p>
            <p className="font-sans text-base md:text-lg text-[#CF9D7B]/70 leading-relaxed">
              Con el paso del tiempo, su historia fue reducida a la de un monstruo
              derrotado por un héroe. Sin embargo, esta visión deja de lado su verdadera
              esencia: la de una criatura marcada por el abandono, el encierro y una
              identidad fragmentada.
            </p>
            <p className="font-sans text-base md:text-lg text-[#CF9D7B]/70 leading-relaxed">
              En este proyecto, retomamos su historia para reinterpretarla desde una
              nueva mirada. Más allá del mito clásico, exploramos su forma, su presencia
              y su significado, dando vida a una versión que invita no solo a observar,
              sino a comprender lo que se oculta tras la figura del Minotauro.
            </p>
          </div>
        </div>

        {/* Cita destacada */}
        <div
          className={`mt-16 md:mt-24 text-center transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
        >
          <blockquote className="relative max-w-3xl mx-auto">
            <div className="absolute -top-4 -left-4 text-6xl text-[#724B39]/30 font-serif">
              {'"'}
            </div>

            <p className="font-serif font-bold text-2xl md:text-3xl text-[#CF9D7B] italic leading-relaxed px-8">
              No es solo una criatura, es una historia que cobra forma.
              Observa cómo el Minotauro emerge desde el concepto hasta su versión final en 3D.
            </p>

            <div className="absolute -bottom-4 -right-4 text-6xl text-[#724B39]/30 font-serif">
              {'"'}
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
