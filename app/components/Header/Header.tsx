import React from 'react'

export const Header: React.FC = () => {
  return (
    <header className="absolute left-0 top-0 z-20 w-full px-6">
      <div
        className="flex items-center justify-between border-gray-50/50 py-4"
        style={{ borderBottom: '1px solid rgba(255, 255, 255, .5' }}
      >
        <a href="/" className="text-lg text-white">
          Beaver Lake Productions
        </a>

        <nav className="hidden sm:block">
          <ul className="flex items-center justify-evenly">
            <li>
              <a href="#featured" className="ml-4 text-sm text-white">
                Featured Videos
              </a>
            </li>
            <li>
              <a href="#music" className="ml-4 text-sm text-white">
                Music
              </a>
            </li>
            <li>
              <a href="#about" className="ml-4 text-sm text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="ml-4 text-sm text-white">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
