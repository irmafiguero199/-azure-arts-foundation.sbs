import { Helmet } from 'react-helmet-async'
import { Heart, Target, Users, Award, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'

function About() {
  const values = [
    {
      icon: Heart,
      title: 'Community Empowerment',
      description: 'We believe art should be accessible to everyone, empowering individuals and strengthening community bonds across Sacramento.',
    },
    {
      icon: Target,
      title: 'Artistic Excellence',
      description: 'Supporting artists with high-quality resources, mentorship, and opportunities to showcase their talent and thrive.',
    },
    {
      icon: Users,
      title: 'Inclusive Engagement',
      description: 'Fostering safe, welcoming environments for diverse voices, background cultures, and creative disciplines.',
    },
    {
      icon: Award,
      title: 'Sustainable Impact',
      description: 'Creating lasting educational and cultural programs that uplift underserved neighborhoods for generations to come.',
    },
  ]

  const stats = [
    { number: '2,500+', label: 'Community Members Served' },
    { number: '150+', label: 'Art Programs Delivered' },
    { number: '$485K', label: 'Arts Grants Distributed' },
    { number: '12+', label: 'Years of Service' },
  ]

  return (
    <>
      <Helmet>
        <title>About Us | Azure Arts Foundation | Sacramento Nonprofit</title>
        <meta
          name="description"
          content="Learn about Azure Arts Foundation in Sacramento, CA. Our mission, values, and leadership driving arts education and community enrichment. 501(c)(3) nonprofit."
        />
        <link rel="canonical" href="https://www.azure-arts-foundation.sbs/about" />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-azure-900 text-white py-20">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold font-display mb-4">About Azure Arts Foundation</h1>
          <p className="text-azure-200 text-lg max-w-2xl mx-auto">
            Empowering artists and enriching lives through creative programs, cultural events, and educational initiatives.
          </p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-white py-16">
        <div className="container-custom mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Mission & Impact"
            subtitle="Dedicated to bridging cultural divides and nurturing artistic talent throughout the Sacramento region."
          />

          <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Who We Are</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Azure Arts Foundation is a registered 501(c)(3) nonprofit organization based in Sacramento, CA. 
              We believe that access to the arts is a fundamental human right that sparks innovation, builds empathy, and elevates local communities.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Through strategic partnerships, youth workshops, community murals, and direct artist grants, we provide essential infrastructure for local talent to flourish.
            </p>
          </div>

          {/* Stats Display */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((item, index) => (
              <div key={index} className="p-6 bg-azure-50 rounded-xl border border-azure-100">
                <p className="text-3xl font-extrabold text-azure-600 mb-1">{item.number}</p>
                <p className="text-xs sm:text-sm font-medium text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding bg-slate-50 py-16">
        <div className="container-custom mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Core Values"
            subtitle="The principles that guide our work and community partnerships."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v, i) => {
              const IconComponent = v.icon
              return (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-lg bg-azure-50 text-azure-600 flex items-center justify-center mb-4">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{v.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{v.description}</p>
                </div>
              )
            })}
          </div>

          {/* Call to Action */}
          <div className="mt-12 bg-azure-900 text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Want to Support Our Mission?</h3>
            <p className="text-azure-200 text-sm max-w-xl mx-auto mb-6">
              Join us in making art accessible to underserved youth and local creators across Sacramento.
            </p>
            <Link
              to="/donate"
              className="inline-flex items-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-lg transition-colors text-sm"
            >
              Support Our Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
