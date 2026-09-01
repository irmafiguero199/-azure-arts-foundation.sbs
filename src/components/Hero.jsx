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
          <div className="flex items-center justify-between h
