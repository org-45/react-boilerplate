import React, { ReactNode } from 'react'
import Navbar from '@/components/Navbar'

type LayoutProps = {
	children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
			<Navbar/>
      <main>{children}</main>
    </div>
  )
}

export default Layout
