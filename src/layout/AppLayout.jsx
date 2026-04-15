import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function AppLayout() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row">
        <Sidebar />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
