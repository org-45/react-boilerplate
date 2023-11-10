import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import HomePage from './pages/homepage'
import Login from './pages/login'
import AdminDashboard from './pages/admin'
import Market from './pages/market'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/market" element={<Market />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
