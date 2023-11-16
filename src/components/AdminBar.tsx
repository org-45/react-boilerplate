import { useState } from 'react'

function AdminBar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen)
  }

  const closeDropdown = () => {
    setDropdownOpen(false)
  }

  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-semibold"></div>
        <div className="hidden md:flex space-x-4">
          <div className="relative group">
            <button
              onClick={toggleDropdown}
              onBlur={closeDropdown}
              className="group-hover:text-blue-500 focus:outline-none"
            >
              <span className="text-white">
                {' '}
                {/* You can replace this span with an icon */}
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
        </div>
      </div>
    </nav>
  )
}

export default AdminBar
