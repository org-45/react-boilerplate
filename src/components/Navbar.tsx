import { useState } from 'react'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-semibold">Your Logo</div>

        <div className="hidden md:flex space-x-4">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-2xl focus:outline-none"
          >
            &#8801;
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden flex p-4 text-center">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
