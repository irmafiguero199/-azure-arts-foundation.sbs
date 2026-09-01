import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Anchor, BookOpen, Users, Heart, Calendar, MapPin } from 'lucide-react'
import Hero from '../components/Hero'
import SectionHeader from '../components/SectionHeader'
import Newsletter from '../components/Newsletter'

function Home() {
  return (
    <>
      <Helmet>
        <title>Pelican Bay Sailing School Inc | Registered 501(c)(3) Nonprofit | Bonita Springs, FL</title>
        <meta name="description" content="Pelican Bay Sailing School Inc is a registered 501(c)(3) nonprofit organization empowering sailors and enriching communities through sailing programs in Bonita Springs, Florida. EIN: 92-3488213." />
        <link rel="canonical" href="https://www.pelicanbaysailingschoolinc.sbs/" />
      </Helmet>

      <Hero />

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-azure-600 font-semibold text-sm uppercase tracking-wider">Our Mission</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-6 font-display">
                Cultivating Sailing Skills, Building Community
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Pelican Bay Sailing School Inc believes that access to sailing education is a fundamental right. Since our founding in 2019, 
                we have worked tirelessly to remove barriers to maritime participation for underserved youth, emerging sailors, 
                and community members throughout Lee County. Through workshops, regattas, grants, and public marine safety programs, 
                we create spaces where sailing thrives and communities connect.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our programs reach over 2,500 individuals annually, providing free and low-cost sailing education, 
                professional development for mariners, and cultural events that celebrate the maritime heritage of our region.
              </p>
              <Link to="/mission-vision" className="btn-primary">
                Learn About Our Mission
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-azure-100 to-azure-200 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <Anchor className="w-20 h-20 text-azure-500 mx-auto mb-4" />
                  <p className="text-azure-800 font-display text-xl font-semibold">Sailing for Everyone</p>
                  <p className="text-azure-600 mt-2">Bonita Springs's maritime community hub</p>
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
            subtitle="We offer a diverse range of programs designed to nurture sailing talent, provide educational opportunities, and strengthen community bonds through maritime activities."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Anchor className="w-8 h-8" />,
                title: 'Youth Sailing Academy',
                desc: 'Free after-school sailing education for students ages 8-18, covering seamanship, navigation, water safety, and racing.',
                color: 'bg-azure-50 text-azure-700',
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: 'Sailing Grants',
                desc: 'Financial support for emerging and mid-career sailors in Bonita Springs to advance their training and certifications.',
                color: 'bg-gold-50 text-gold-700',
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Community Regattas',
                desc: 'Collaborative public sailing events that unite coastal neighborhoods and give voice to local maritime heritage.',
                color: 'bg-emerald-50 text-emerald-700',
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: 'Maritime Events',
                desc: 'Annual boat shows, regattas, and educational seminars that celebrate the rich coastal diversity of Bonita Springs.',
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
              <h3 className="text-2xl font-bold font-display mb-2">Make a Difference in Bonita Springs's Sailing Community</h3>
              <p className="text-azure-200">
                Your tax-deductible donation directly supports sailors and sailing education in our community. 
                Pelican Bay Sailing School Inc is a registered 501(c)(3) nonprofit. EIN: 92-3488213.
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
            subtitle="Stay informed about our latest programs, events, and the impact we are making in the Bonita Springs sailing community."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                date: 'August 10, 2026',
                category: 'Programs',
                title: 'Youth Sailing Academy Fall Registration Now Open',
                excerpt: 'Registration is now open for our Fall 2026 Youth Sailing Academy sessions. Classes begin September 8th at our Bonita Springs facility.',
              },
              {
                date: 'July 28, 2026',
                category: 'Grants',
                title: '2026 Sailing Grant Recipients Announced',
                excerpt: 'We are thrilled to announce the 12 talented Bonita Springs sailors who will receive grants totaling $75,000 this year.',
              },
              {
                date: 'July 15, 2026',
                category: 'Events',
                title: 'Summer Regatta Draws Record Crowd',
                excerpt: 'Over 3,000 community members attended our annual Summer Regatta at Bonita Bay on July 12th.',
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
                  We would love to hear from you. Reach out to our team at Pelican Bay Sailing School Inc.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-slate-700">
                    <MapPin className="w-4 h-4 text-azure-500" />
                    <span>4971 BONITA BAY BLVD, BONITA SPRINGS, FL 34134</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <span className="w-4 h-4 text-azure-500 flex items-center justify-center text-xs font-bold">@</span>
                    <a href="mailto:admin@pelicanbaysailingschoolinc.sbs" className="hover:text-azure-600 transition-colors">
                      admin@pelicanbaysailingschoolinc.sbs
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
