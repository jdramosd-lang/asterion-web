"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react"

// Galería de imágenes
const galleryImages = [
  { id: 1, title: "Concept Art 1", category: "Concept", src: "/images/gallery/concept-art-IA.png" },
  { id: 2, title: "Concept Art 2", category: "Concept", src: "/images/gallery/concept-art-IA2.png" },
  { id: 3, title: "Modelado 3D", category: "3D", src: "/images/gallery/Concep-art-2.jpeg" },
  { id: 4, title: "Texturizado", category: "3D", src: "/images/gallery/texture-detail.jpg" },
  { id: 5, title: "Render 1", category: "Render", src: "/images/gallery/Render-1.png" },
  { id: 6, title: "Render 2", category: "Render", src: "/images/gallery/Render-2.png" },
]

export function MediaSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const sectionRef = useRef<HTMLElement>(null)

  // Carrusel
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="media"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden bg-[#0C1519]"
    >
      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#162127]/30 via-transparent to-[#162127]/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-[0.15em] text-[#CF9D7B] mb-4">
            MEDIA
          </h2>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#CF9D7B]/50 to-transparent mx-auto mb-6" />

          <p className="font-sans text-[#CF9D7B]/60 max-w-xl mx-auto">
            Adéntrate en una experiencia que va más allá de lo visual.
          </p>
        </div>

        {/* VIDEO TRAILER */}
        <div
          className={`mb-20 transition-all duration-1000 delay-200 ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
            }`}
        >
          <h3 className="font-serif text-xl md:text-2xl tracking-[0.1em] text-[#CF9D7B]/80 mb-6 text-center">
            VIDEO TRAILER
          </h3>

          {/* Thumbnail */}
          <div
            className="relative aspect-video max-w-4xl mx-auto rounded-sm overflow-hidden group cursor-pointer"
            onClick={() => setIsVideoPlaying(true)}
          >
            <video
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/trailer.mp4" type="video/mp4" />
            </video>

            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C1519] via-[#0C1519]/30 to-[#0C1519]/50" />

            <div className="absolute inset-0 bg-[#0C1519]/40 transition-all duration-500 group-hover:bg-[#0C1519]/20" />

            <div className="absolute inset-0 border border-[#3A3534] group-hover:border-[#CF9D7B]/50 transition-all duration-500 group-hover:shadow-[inset_0_0_60px_rgba(207,157,123,0.1)]" />

            {/* Botón play */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 -m-4 rounded-full border border-[#CF9D7B]/30 animate-ping" />

                <button
                  className="relative w-20 h-20 rounded-full bg-[#CF9D7B]/10 border-2 border-[#CF9D7B]/50 flex items-center justify-center group-hover:bg-[#CF9D7B]/20 group-hover:border-[#CF9D7B] transition-all duration-300 group-hover:scale-110"
                  aria-label="Reproducir trailer"
                >
                  <Play
                    className="w-8 h-8 text-[#CF9D7B] ml-1"
                    fill="currentColor"
                  />
                </button>
              </div>
            </div>

            {/* Texto */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end opacity-50">
              <span className="font-mono text-xs text-[#CF9D7B]">00:00</span>
              <span className="font-mono text-xs text-[#CF9D7B]">TRAILER</span>
            </div>
          </div>
        </div>

        {/* GALERÍA */}
        <div
          className={`transition-all duration-1000 delay-400 ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
            }`}
        >
          <h3 className="font-serif text-xl md:text-2xl tracking-[0.1em] text-[#CF9D7B]/80 mb-8 text-center">
            GALERÍA - CONCEPT ART
          </h3>

          <div className="relative max-w-4xl mx-auto">

            {/* Imagen principal */}
            <div
              className="relative aspect-[16/10] rounded-sm overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(galleryImages[currentSlide].id)}
            >
              <img
                src={galleryImages[currentSlide].src}
                alt={galleryImages[currentSlide].title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1519]/80 via-transparent to-[#0C1519]/20" />

              <div className="absolute inset-0 border border-[#3A3534] group-hover:border-[#CF9D7B]/50 transition-all duration-500" />

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0C1519] to-transparent">
                <p className="font-serif text-xl md:text-2xl text-[#CF9D7B]">
                  {galleryImages[currentSlide].title}
                </p>

                <p className="font-sans text-sm text-[#CF9D7B]/50 mt-1">
                  {galleryImages[currentSlide].category}
                </p>
              </div>
            </div>

            {/* Navegación */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#0C1519]/80 border border-[#CF9D7B]/30 flex items-center justify-center text-[#CF9D7B]"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#0C1519]/80 border border-[#CF9D7B]/30 flex items-center justify-center text-[#CF9D7B]"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-6">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide
                      ? "bg-[#CF9D7B] w-8"
                      : "bg-[#CF9D7B]/30"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-[#0C1519]/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 text-[#CF9D7B]"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>

          <div
            className="relative max-w-4xl w-full bg-[#162127] rounded-sm overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages.find((img) => img.id === selectedImage)?.src}
              alt={galleryImages.find((img) => img.id === selectedImage)?.title}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}

      {/* MODAL VIDEO */}
      {isVideoPlaying && (
        <div
          className="fixed inset-0 z-50 bg-[#0C1519]/95 flex items-center justify-center p-4"
          onClick={() => setIsVideoPlaying(false)}
        >
          <button
            className="absolute top-4 right-4 p-2 text-[#CF9D7B]"
            onClick={() => setIsVideoPlaying(false)}
          >
            <X size={32} />
          </button>

          <div
            className="relative max-w-5xl w-full aspect-video bg-[#162127] rounded-sm overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay
            >
              <source src="/videos/trailer.mp4" type="video/mp4" />
              Tu navegador no soporta video HTML5.
            </video>
          </div>
        </div>
      )}
    </section>
  )
}