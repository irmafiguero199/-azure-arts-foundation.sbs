import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, MapPin, Shield } from 'lucide-react'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/programs', label: 'Programs' },
    { path: '/impact', label: 'Impact' },
    { path: '/team', label: 'Team' },
    { path: '/news', label: 'News' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-azure-900 text-white text-sm">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between py-2 gap-2">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-gold-400" />
                <span className="font-medium">501(c)(3) | EIN: 92-3488213</span>
              </span>
              <span className="hidden sm:flex items-center gap-1.5 text-azure-200">
                <MapPin className="w-3.5 h-3.5" />
                <span>4971 BONITA BAY BLVD, BONITA SPRINGS, FL 34134</span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a href="mailto:admin@pelicanbaysailingschoolinc.sbs" className="flex items-center gap-1.5 hover:text-gold-300 transition-colors">
                <Mail className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">admin@pelicanbaysailingschoolinc.sbs</span>
              </a>
              <a href="tel:+12395550142" className="flex items-center gap-1.5 hover:text-gold-300 transition-colors">
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden md:inline">(239) 555-0142</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-azure-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-slate-900 font-display">Pelican Bay</span>
                <span className="block text-xs text-azure-600 -mt-1">Sailing School Inc</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-azure-700 bg-azure-50'
                      : 'text-slate-700 hover:text-azure-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/donate"
                className="ml-3 px-5 py-2.5 bg-gold-500 text-white text-sm font-semibold rounded-lg hover:bg-gold-600 transition-colors shadow-sm"
              >
                Donate
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2.5 rounded-md text-sm font-medium ${
                    location.pathname === link.path
                      ? 'text-azure-700 bg-azure-50'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/donate"
                className="block mt-2 px-3 py-2.5 bg-gold-500 text-white text-sm font-semibold rounded-lg text-center"
              >
                Donate Now
              </Link>
              <div className="pt-3 mt-3 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                <p className="flex items-center gap-1.5">
                  <Shield className="w-3 h-3" /> EIN: 92-3488213
                </p>
                <p className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3" /> 4971 BONITA BAY BLVD, BONITA SPRINGS, FL 34134
                </p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
