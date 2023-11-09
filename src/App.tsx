import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/homepage'
import Login from './pages/login'
import AdminDashboard from './pages/admin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
