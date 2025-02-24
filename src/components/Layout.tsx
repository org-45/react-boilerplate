//COMPONENT
import  { FC,ReactNode } from 'react'
import Navbar from '@/components/Navbar'
import { useAdmin } from '@/contexts/AdminContext'

type LayoutProps = {
	children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const { isAdmin } = useAdmin()
  return (
    <div className="min-h-screen flex flex-col">
			<Navbar isAdmin={isAdmin}/>
      <main>{children}</main>
    </div>
  )
}

export default Layout
