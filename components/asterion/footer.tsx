"use client"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 bg-[#0C1519] border-t border-[#3A3534]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo y descripción */}
          <div>
            <h3 className="font-serif text-xl tracking-[0.2em] text-[#CF9D7B] mb-4">
              ASTERIÓN
            </h3>
            <p className="font-sans text-sm text-[#CF9D7B]/50 leading-relaxed">
              Guardián del Laberinto. Una reinterpretación visual e interactiva 
              del Minotauro de la mitología griega.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-sans text-sm tracking-wider text-[#CF9D7B]/70 uppercase mb-4">
              Navegación
            </h4>
            <nav className="space-y-2">
              <a href="#inicio" className="block text-sm text-[#CF9D7B]/50 hover:text-[#CF9D7B] transition-colors">
                Inicio
              </a>
              <a href="#historia" className="block text-sm text-[#CF9D7B]/50 hover:text-[#CF9D7B] transition-colors">
                Historia
              </a>
              <a href="#media" className="block text-sm text-[#CF9D7B]/50 hover:text-[#CF9D7B] transition-colors">
                Media
              </a>
              <a href="#experiencia-3d" className="block text-sm text-[#CF9D7B]/50 hover:text-[#CF9D7B] transition-colors">
                Experiencia 3D
              </a>
              <a href="#contacto" className="block text-sm text-[#CF9D7B]/50 hover:text-[#CF9D7B] transition-colors">
                Contacto
              </a>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-sans text-sm tracking-wider text-[#CF9D7B]/70 uppercase mb-4">
              Legal
            </h4>
            <nav className="space-y-2">
              <a href="#" className="block text-sm text-[#CF9D7B]/50 hover:text-[#CF9D7B] transition-colors">
                Términos de uso
              </a>
              <a href="#" className="block text-sm text-[#CF9D7B]/50 hover:text-[#CF9D7B] transition-colors">
                Aviso de privacidad
              </a>
              <a href="#" className="block text-sm text-[#CF9D7B]/50 hover:text-[#CF9D7B] transition-colors">
                Licencias
              </a>
              <a href="#" className="block text-sm text-[#CF9D7B]/50 hover:text-[#CF9D7B] transition-colors">
                Acerca de
              </a>
            </nav>
          </div>
        </div>

        {/* Separador */}
        <div className="my-8 h-[1px] bg-gradient-to-r from-transparent via-[#3A3534] to-transparent" />

        {/* Copyright y clasificación */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#CF9D7B]/40">
            © {currentYear} Nicolás Lancheros & Jeisson Ramos. Todos los derechos reservados.
          </p>

          {/* Badge de clasificación */}
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-center text-[#CF9D7B]/40">
              <span className="text-xs">Apto para mayores de 15 años</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-8 h-8 border border-[#CF9D7B]/40 rounded flex items-center justify-center text-xs text-[#CF9D7B]/60">
                +15
              </div>
              <span className="text-xs text-[#CF9D7B]/40">R</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
