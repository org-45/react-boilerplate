import { useState } from 'react'
import ThemeButton from './ThemeButton'

interface NavbarProps {
  children?: React.ReactNode
  isAdmin?: boolean
}

function Navbar({ children, isAdmin = false }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const closeDropdown = () => {
    setIsDropdownOpen(false)
  }

  return (
    <nav className="bg-black text-white dark:bg-white dark:text-black">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="/#home">
          <div className="text-2xl font-semibold">Your Logo</div>
        </a>

        <div className="hidden md:flex space-x-4">
          <a href="#home">Home</a>
          <a href="/market">Market</a>
          <a href="/admin">Admin</a>
          <a href="/login">Login</a>
          <ThemeButton />
          {isAdmin && (
            <div className="relative group">
              <button
                onClick={toggleDropdown}
                onBlur={closeDropdown}
                className="group-hover:text-blue-500 focus:outline-none"
              >
                <span className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 inline"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-gray-900 text-white rounded shadow-lg z-10">
                  <ul className="py-2">
                    <li>
                      <a
                        href="#profile"
                        className="block px-4 py-2 hover:bg-gray-800"
                      >
                        Profile
                      </a>
                    </li>
                    <li>
                      <a
                        href="#logout"
                        className="block px-4 py-2 hover:bg-gray-800"
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
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
        <div className="md:hidden flex p-4 text-center flex-col space-y-2">
          <a href="#home">Home</a>
          <a href="/market">Market</a>
          <a href="/admin">Admin</a>
          <a href="/login">Login</a>
          <ThemeButton />
          {children}
        </div>
      )}
    </nav>
  )
}

export default Navbar