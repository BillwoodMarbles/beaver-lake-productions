import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://beaverlakeproductions.com'),
  title: 'Beaver Lake Productions',
  description:
    'We are a small production company based in Omaha, Nebraska that specializes in short films, comedy sketches, and music videos. We also provide video production services for local businesses of all types.',
  openGraph: {
    images: ['/images/vala.jpg'],
    description:
      'We are a small production company based in Omaha, Nebraska that specializes in short films, comedy sketches, and music videos. We also provide video production services for local businesses of all types.',
    title: 'Beaver Lake Productions',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-5RT6N8VGVN" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-5RT6N8VGVN');
        `}
        </Script>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
