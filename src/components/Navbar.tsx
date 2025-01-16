import { useState } from 'react'
import ThemeButton from './ThemeButton'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="bg-black text-white dark:bg-white dark:text-black">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-semibold">Your Logo</div>

        <div className="hidden md:flex space-x-4">
          <a href="#home">Home</a>
          <a href="/market">Market</a>
          <a href="/admin">Admin</a>
          <a href="/login">Login</a>
					<ThemeButton/>
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
          <a href="/market">Market</a>
          <a href="/admin">Admin</a>
          <a href="/login">Login</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
