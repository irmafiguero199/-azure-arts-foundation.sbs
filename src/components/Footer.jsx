import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Shield, Facebook, Instagram, Linkedin, Twitter, Heart } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-azure-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <span className="text-lg font-bold font-display">Azure Arts</span>
                <span className="block text-xs text-azure-300 -mt-1">Foundation</span>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Empowering artists and communities through creative expression, education, and cultural engagement in the Sacramento region since 2019.
            </p>
            <div className="flex items-center gap-1 text-gold-400 text-sm font-medium">
              <Shield className="w-4 h-4" />
              <span>Registered 501(c)(3) | EIN: 68-0321352</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-display">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { path: '/about', label: 'About Us' },
                { path: '/programs', label: 'Our Programs' },
                { path: '/impact', label: 'Our Impact' },
                { path: '/team', label: 'Our Team' },
                { path: '/news', label: 'News & Updates' },
                { path: '/gallery', label: 'Gallery' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-slate-300 hover:text-azure-300 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-display">Legal & Information</h3>
            <ul className="space-y-2.5">
              {[
                { path: '/registration-information', label: 'Registration Information' },
                { path: '/privacy-policy', label: 'Privacy Policy' },
                { path: '/terms-of-service', label: 'Terms of Service' },
                { path: '/donate', label: 'Make a Donation' },
                { path: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-slate-300 hover:text-azure-300 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-display">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-azure-400 mt-0.5 shrink-0" />
                <span className="text-slate-300">
                  9933 Business Park Dr<br />
                  Sacramento, CA 95827-1722<br />
                  United States
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-azure-400 shrink-0" />
                <a href="tel:+19165550142" className="text-slate-300 hover:text-azure-300 transition-colors">
                  (916) 555-0142
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-azure-400 shrink-0" />
                <a href="mailto:admin@azurartsfoundation.sbs" className="text-slate-300 hover:text-azure-300 transition-colors">
                  admin@azure-arts-foundation.sbs
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-5">
              <p className="text-xs text-slate-400 mb-2">Follow Us</p>
              <div className="flex items-center gap-3">
                <a href="https://www.facebook.com/azureartsfoundation" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center hover:bg-azure-600 transition-colors" aria-label="Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/azureartsfoundation" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center hover:bg-azure-600 transition-colors" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/company/azurartsfoundation.sbs" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center hover:bg-azure-600 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://twitter.com/azureartsfoundation" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center hover:bg-azure-600 transition-colors" aria-label="Twitter">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1">
              <span>© {currentYear} Azure Arts Foundation. All rights reserved.</span>
              <span className="hidden md:inline">|</span>
              <span className="flex items-center gap-1">
                <Shield className="w-3 h-3" /> EIN: 68-0321352
              </span>
              <span className="hidden md:inline">|</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" /> Sacramento, CA
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-red-400 fill-red-400" />
              <span>for the arts community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
