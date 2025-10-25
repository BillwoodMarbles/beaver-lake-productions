'use client'

import React, { useState } from 'react'

export const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    {
      href: 'https://coolmomlavonne.com/collections/beaver-lake-productions',
      target: '_blank',
      rel: 'noreferrer noopener',
      label: 'Shop',
    },
    { href: '#featured', label: 'Videos' },
    { href: '#documentary', label: 'Documentary' },
    { href: '#music', label: 'Music' },
    { href: '#about', label: 'About Us' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex items-center justify-evenly">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                target={item.target}
                rel={item.rel}
                className="ml-4 text-sm text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        className="z-[70] flex h-8 w-8 flex-col items-center justify-center md:hidden"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <span
          className={`block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-y-[2px] rotate-45' : ''
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'mt-0 opacity-0' : 'mt-1.5'
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-y-[-2px] -rotate-45' : 'mt-1.5'
          }`}
        ></span>
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black transition-opacity duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
        onClick={closeMobileMenu}
      >
        <nav
          className="flex h-full items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="flex flex-col items-center space-y-8">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  target={item.target}
                  rel={item.rel}
                  className="text-2xl text-white transition-colors hover:text-gray-300"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}
