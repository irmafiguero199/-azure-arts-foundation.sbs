import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Home, MapPin, Shield } from 'lucide-react'

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Azure Arts Foundation | Sacramento Nonprofit</title>
        <meta name="description" content="The page you are looking for could not be found. Azure Arts Foundation - Registered 501(c)(3) Nonprofit. EIN: 68-0321352." />
        <link rel="canonical" href="https://www.azure-arts-foundation.sbs/404" />
      </Helmet>

      <div className="min-h-[70vh] flex items-center justify-center bg-slate-50">
        <div className="text-center px-4">
          <div className="text-8xl font-bold text-azure-200 font-display mb-4">404</div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4 font-display">Page Not Found</h1>
          <p className="text-slate-600 max-w-md mx-auto mb-8">
            The page you are looking for does not exist or has been moved. We invite you to explore our website and learn more about how Azure Arts Foundation supports the arts community in Sacramento.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <Link to="/" className="btn-primary">
              <Home className="w-4 h-4 mr-2" />
              Return to Homepage
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
          <div className="text-xs text-slate-400 space-y-1">
            <p className="flex items-center justify-center gap-1.5">
              <Shield className="w-3.5 h-3.5" /> Registered 501(c)(3) Nonprofit | EIN: 68-0321352
            </p>
            <p className="flex items-center justify-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" /> 9933 Business Park Dr, Sacramento, CA 95827-1722
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound
