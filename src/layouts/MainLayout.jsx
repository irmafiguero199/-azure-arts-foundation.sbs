import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import OrganizationSchema from '../seo/OrganizationSchema'

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <OrganizationSchema />
      <Header />
      <main className="flex-1 pt-[112px] lg:pt-[128px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
