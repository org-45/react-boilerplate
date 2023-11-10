import LogoImage from '@/assets/logo.png'
import AdminBar from '@/components/AdminBar'

function AdminDashboard() {
  return (
    <>
      <div className="flex h-screen bg-gray-800">
        {/* Side Panel */}
        <aside className="w-64 bg-gray-900 text-white">
          <div className="p-4 pl-6">
            <div className="mb-4 text-center">
              <img
                src={LogoImage}
                alt="Logo"
                className="w-16 h-auto shadow-lg"
              />
            </div>
            <div className="py-10"></div>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="block text-lg font-semibold text-white hover:text-blue-500"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-lg font-semibold text-white hover:text-blue-500"
                >
                  Discussions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-lg font-semibold text-white hover:text-blue-500"
                >
                  Users
                </a>
              </li>
              <li>
                <a
                  href="/market"
                  className="block text-lg font-semibold text-white hover:text-blue-500"
                >
                  Market
                </a>
              </li>
              <li className="border-t border-gray-700 pt-3"></li>
            </ul>
          </div>
        </aside>

        <main className="flex-grow bg-gray-100">
          <AdminBar />
          <div className="p-6 m-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-4xl font-semibold text-gray-800 mb-4">
              Dashboard
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Welcome to the Dashboard section.
            </p>
          </div>
        </main>
      </div>
    </>
  )
}

export default AdminDashboard
