import { Link } from 'react-router-dom'
import { Shield, ArrowRight, Users, Palette, Award } from 'lucide-react'

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-azure-900 via-azure-800 to-slate-900">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-azure-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-azure-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <Shield className="w-4 h-4 text-gold-400" />
            <span className="text-sm font-medium text-azure-100">Registered 501(c)(3) Nonprofit Organization</span>
            <span className="text-sm font-bold text-gold-400">| EIN: 68-0321352</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-display leading-tight">
            Where Art Meets
            <span className="block text-gold-400">Community</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-azure-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Azure Arts Foundation empowers artists and enriches lives through creative programs, 
            cultural events, and educational initiatives serving underserved communities throughout 
            the Sacramento region.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link to="/programs" className="btn-primary bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 text-base">
              Explore Our Programs
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/donate" className="btn-secondary border-white text-white hover:bg-white/10 px-8 py-4 text-base">
              Support Our Mission
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Users className="w-8 h-8 text-gold-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">2,500+</div>
              <div className="text-sm text-azure-200">Community Members Served</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Palette className="w-8 h-8 text-gold-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">150+</div>
              <div className="text-sm text-azure-200">Art Programs Delivered</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Award className="w-8 h-8 text-gold-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">$485K</div>
              <div className="text-sm text-azure-200">Arts Grants Distributed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

export default Hero
