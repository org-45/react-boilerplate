import { createContext, useContext, useState, ReactNode } from 'react'

interface AdminContextProps {
  isAdmin: boolean
  setIsAdmin: (isAdmin: boolean) => void
}

const AdminContext = createContext<AdminContextProps | undefined>(undefined)

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [isAdmin, setIsAdmin] = useState(false)

  return (
    <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </AdminContext.Provider>
  )
}

export const useAdmin = () => {
  const context = useContext(AdminContext)
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider')
  }
  return context
}