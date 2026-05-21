import type { Metadata, Viewport } from 'next'
import { Cinzel, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

/* ============================================
   TIPOGRAFÍAS CINEMATOGRÁFICAS
   - Cinzel: Títulos épicos estilo romano/griego
   - Cormorant Garamond: Texto elegante y narrativo
   ============================================ */
const cinzel = Cinzel({ 
  subsets: ["latin"],
  variable: '--font-cinzel',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ASTERIÓN: Guardián del Laberinto',
  description: 'Descubre la historia del Minotauro como nunca antes. Explora su origen, su reinterpretación y el proceso creativo detrás de su diseño en un recorrido visual e interactivo.',
  keywords: ['Minotauro', 'Asterión', 'Mitología griega', 'Bestiario', '3D', 'Laberinto', 'Creta'],
  authors: [{ name: 'Nicolás Lancheros' }, { name: 'Jeisson Ramos' }],
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#0C1519',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${cinzel.variable} ${cormorant.variable} bg-background`}>
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
