import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { Header } from '../components/Header'
import { ContactForm } from '../components/ContactForm'
import { Footer } from '../components/Footer'
import { BackToTop } from '../components/BackToTop'

export const metadata = {
  title: {
    default: 'Claudio Lins',
    template: '%s | Claudio Lins',
  },
  description: 'Claudio Lins - Desenvolvedor Front-end',
  icons: [
    {
      url: '/favicon.svg',
    },
  ],
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <BackToTop />
        <Header />
        {children}
        <ContactForm />
        <Footer />
      </body>
    </html>
  )
}
