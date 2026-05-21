"use client"

import { useEffect, useRef, useState, FormEvent } from "react"
import { Send, CheckCircle } from "lucide-react"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de envío del formulario
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-[#0C1519] to-[#162127]"
    >
      {/* Patrón de fondo */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #CF9D7B 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-[0.15em] text-[#CF9D7B] mb-4">
            CONTÁCTANOS
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#CF9D7B]/50 to-transparent mx-auto" />
        </div>

        {/* Formulario */}
        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Campo Nombre */}
            <div className="relative group">
              <label 
                htmlFor="name"
                className="block font-sans text-sm text-[#CF9D7B]/60 mb-2 tracking-wider uppercase"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 bg-[#0C1519] border border-[#3A3534] rounded-sm text-[#CF9D7B] placeholder-[#CF9D7B]/30 focus:outline-none focus:border-[#CF9D7B]/50 focus:shadow-[0_0_20px_rgba(207,157,123,0.1)] transition-all duration-300"
                placeholder="Tu nombre"
              />
              {/* Glow effect on focus */}
              <div className="absolute inset-0 -z-10 rounded-sm opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 blur-xl bg-[#CF9D7B]/10" />
            </div>

            {/* Campo Email */}
            <div className="relative group">
              <label 
                htmlFor="email"
                className="block font-sans text-sm text-[#CF9D7B]/60 mb-2 tracking-wider uppercase"
              >
                E-Mail
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 bg-[#0C1519] border border-[#3A3534] rounded-sm text-[#CF9D7B] placeholder-[#CF9D7B]/30 focus:outline-none focus:border-[#CF9D7B]/50 focus:shadow-[0_0_20px_rgba(207,157,123,0.1)] transition-all duration-300"
                placeholder="tu@email.com"
              />
              <div className="absolute inset-0 -z-10 rounded-sm opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 blur-xl bg-[#CF9D7B]/10" />
            </div>

            {/* Campo Mensaje */}
            <div className="relative group">
              <label 
                htmlFor="message"
                className="block font-sans text-sm text-[#CF9D7B]/60 mb-2 tracking-wider uppercase"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="w-full px-4 py-3 bg-[#0C1519] border border-[#3A3534] rounded-sm text-[#CF9D7B] placeholder-[#CF9D7B]/30 focus:outline-none focus:border-[#CF9D7B]/50 focus:shadow-[0_0_20px_rgba(207,157,123,0.1)] transition-all duration-300 resize-none"
                placeholder="Escribe tu mensaje aquí..."
              />
              <div className="absolute inset-0 -z-10 rounded-sm opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 blur-xl bg-[#CF9D7B]/10" />
            </div>

            {/* Botón Enviar */}
            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={isSubmitted}
                className={`group inline-flex items-center gap-3 px-10 py-4 rounded-sm tracking-wider uppercase text-sm transition-all duration-300 ${
                  isSubmitted
                    ? "bg-green-900/30 border border-green-700/50 text-green-400 cursor-default"
                    : "bg-[#CF9D7B]/10 border border-[#CF9D7B]/30 text-[#CF9D7B] hover:bg-[#CF9D7B]/20 hover:border-[#CF9D7B]/60 hover:shadow-[0_0_30px_rgba(207,157,123,0.2)]"
                }`}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Enviado</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <span>Enviar</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
