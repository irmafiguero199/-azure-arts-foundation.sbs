import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Palette, BookOpen, Users, Heart, Calendar, MapPin } from 'lucide-react'
import Hero from '../components/Hero'
import SectionHeader from '../components/SectionHeader'
import Newsletter from '../components/Newsletter'

function Home() {
  return (
    <>
      <Helmet>
        <title>Azure Arts Foundation | Registered 501(c)(3) Nonprofit | Sacramento, CA</title>
        <meta name="description" content="Azure Arts Foundation is a registered 501(c)(3) nonprofit organization empowering artists and enriching communities through creative programs in Sacramento, California. EIN: 68-0321352." />
        <link rel="canonical" href="https://www.azurartsfoundation.sbs/" />
      </Helmet>

      <Hero />

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-azure-600 font-semibold text-sm uppercase tracking-wider">Our Mission</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-6 font-display">
                Cultivating Creativity, Building Community
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Azure Arts Foundation believes that access to the arts is a fundamental right. Since our founding in 2019, 
                we have worked tirelessly to remove barriers to artistic participation for underserved youth, emerging artists, 
                and community members throughout Sacramento County. Through workshops, exhibitions, grants, and public art 
                installations, we create spaces where creativity thrives and communities connect.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our programs reach over 2,500 individuals annually, providing free and low-cost arts education, 
                professional development for artists, and cultural events that celebrate the diverse heritage of our region.
              </p>
              <Link to="/mission-vision" className="btn-primary">
                Learn About Our Mission
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-azure-100 to-azure-200 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <Palette className="w-20 h-20 text-azure-500 mx-auto mb-4" />
                  <p className="text-azure-800 font-display text-xl font-semibold">Art for Everyone</p>
                  <p className="text-azure-600 mt-2">Sacramento's creative community hub</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5 border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">100%</div>
                    <div className="text-xs text-slate-500">Community-Focused</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom mx-auto">
          <SectionHeader
            title="Our Programs"
            subtitle="We offer a diverse range of programs designed to nurture artistic talent, provide educational opportunities, and strengthen community bonds through creative expression."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Palette className="w-8 h-8" />,
                title: 'Youth Arts Academy',
                desc: 'Free after-school arts education for students ages 8-18, covering visual arts, music, theater, and digital media.',
                color: 'bg-azure-50 text-azure-700',
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: 'Artist Grants',
                desc: 'Financial support for emerging and mid-career artists in Sacramento to create new work and advance their practice.',
                color: 'bg-gold-50 text-gold-700',
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Community Murals',
                desc: 'Collaborative public art projects that transform neighborhoods and give voice to local stories and identities.',
                color: 'bg-emerald-50 text-emerald-700',
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: 'Cultural Events',
                desc: 'Annual festivals, exhibitions, and performances that celebrate the rich cultural diversity of Sacramento.',
                color: 'bg-rose-50 text-rose-700',
              },
            ].map((program, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className={`w-14 h-14 rounded-lg ${program.color} flex items-center justify-center mb-4`}>
                  {program.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{program.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{program.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/programs" className="btn-secondary">
              View All Programs
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Banner */}
      <section className="bg-azure-800 text-white">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold font-display mb-2">Make a Difference in Sacramento's Arts Community</h3>
              <p className="text-azure-200">
                Your tax-deductible donation directly supports artists and arts education in our community. 
                Azure Arts Foundation is a registered 501(c)(3) nonprofit. EIN: 68-0321352.
              </p>
            </div>
            <Link to="/donate" className="btn-primary bg-gold-500 hover:bg-gold-600 shrink-0">
              Donate Today
            </Link>
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionHeader
            title="Latest News"
            subtitle="Stay informed about our latest programs, events, and the impact we are making in the Sacramento arts community."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                date: 'August 10, 2026',
                category: 'Programs',
                title: 'Youth Arts Academy Fall Registration Now Open',
                excerpt: 'Registration is now open for our Fall 2026 Youth Arts Academy sessions. Classes begin September 8th at our Sacramento studio.',
              },
              {
                date: 'July 28, 2026',
                category: 'Grants',
                title: '2026 Artist Grant Recipients Announced',
                excerpt: 'We are thrilled to announce the 12 talented Sacramento artists who will receive grants totaling $75,000 this year.',
              },
              {
                date: 'July 15, 2026',
                category: 'Events',
                title: 'Summer Arts Festival Draws Record Crowd',
                excerpt: 'Over 3,000 community members attended our annual Summer Arts Festival at William Land Park on July 12th.',
              },
            ].map((news, idx) => (
              <article key={idx} className="bg-slate-50 rounded-xl overflow-hidden border border-slate-100 hover:shadow-md transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-azure-100 to-azure-200 flex items-center justify-center">
                  <span className="text-azure-400 font-display text-4xl font-bold">{news.category[0]}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-azure-600 bg-azure-50 px-2.5 py-1 rounded-full">{news.category}</span>
                    <span className="text-xs text-slate-400">{news.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">{news.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{news.excerpt}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/news" className="btn-secondary">
              Read All News
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="bg-slate-50">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 font-display">Get in Touch</h3>
                <p className="text-slate-600 mb-6">
                  Have questions about our programs, partnership opportunities, or how to get involved? 
                  We would love to hear from you. Reach out to our team at Azure Arts Foundation.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-slate-700">
                    <MapPin className="w-4 h-4 text-azure-500" />
                    <span>9933 Business Park Dr, Sacramento, CA 95827-1722</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <span className="w-4 h-4 text-azure-500 flex items-center justify-center text-xs font-bold">@</span>
                    <a href="mailto:admin@azurartsfoundation.sbs" className="hover:text-azure-600 transition-colors">
                     admin@azurartsfoundation.sbs
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex justify-start lg:justify-end">
                <Link to="/contact" className="btn-primary">
                  Contact Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}

export default Home
