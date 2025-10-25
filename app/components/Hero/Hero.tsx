'use client'

import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import './Hero.css'

interface HeroProps {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  imageUrl: string
}

export default function Hero({
  title,
  subtitle,
  ctaText,
  imageUrl,
}: HeroProps) {
  const [open, setOpen] = useState(false)

  const embedId = '4upii3jsKQU'

  const slides = [
    {
      type: 'custom-slide',
    },
  ]
  return (
    <div
      className="relative h-screen w-full bg-slate-950"
      style={{ maxHeight: '70vh' }}
    >
      <div className="hero-content z-10 md:hidden"></div>
      <Image
        src={imageUrl}
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <div
        className="absolute bottom-14 left-0 z-20 px-6"
        style={{ maxWidth: '500px' }}
      >
        <h1 className="mb-4 text-2xl font-thin leading-[1.15] text-white md:text-4xl">
          {title}
        </h1>
        <p className="mb-10 text-base font-light text-white md:text-xl">
          {subtitle}
        </p>
        <button
          onClick={() => setOpen(true)}
          className="rounded-full border-2 border-green-600 bg-green-600 px-10 py-4 text-lg font-light text-white transition-colors duration-300 hover:bg-green-600/50"
        >
          {ctaText}
        </button>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: '' }]}
        carousel={{ finite: slides.length <= 1 }}
        render={{
          slide: () => (
            <div className="flex h-full w-full items-center">
              <div className="relative w-full" style={{ paddingBottom: '45%' }}>
                <iframe
                  width="853"
                  height="480"
                  src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                  className="absolute left-0 top-0 h-full w-full"
                />
              </div>
            </div>
          ),
          iconNext: () => null,
          iconPrev: () => null,
        }}
      />
    </div>
  )
}
