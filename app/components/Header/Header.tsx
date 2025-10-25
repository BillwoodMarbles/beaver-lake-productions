'use client'

import React, { useEffect, useState } from 'react'
import { Navigation } from '../Navigation'

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)

    // Check initial scroll position
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed left-0 top-0 z-40 w-full px-6 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div
        className="flex items-center justify-between border-gray-50/50 py-4"
        style={{
          borderBottom: isScrolled
            ? '1px solid transparent'
            : '1px solid rgba(255, 255, 255, 0.5)',
        }}
      >
        <a href="/" className="text-lg text-white">
          Beaver Lake Productions
        </a>

        <Navigation />
      </div>
    </header>
  )
}
