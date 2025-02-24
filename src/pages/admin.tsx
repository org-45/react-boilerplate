
import { useAdmin } from '@/contexts/AdminContext'
import { useEffect } from 'react'

function AdminDashboard() {
  const {setIsAdmin} = useAdmin()

  useEffect(()=>{
    setIsAdmin(true)
  },[])
  
  return (
    <>
      <div className="flex h-screen bg-gray-800">

      </div>
    </>
  )
}

export default AdminDashboard
