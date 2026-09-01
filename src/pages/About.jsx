import { Helmet } from 'react-helmet-async'
import { Heart, Target, Users, Award, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'

function About() {
  const values = [
    {
      icon: Heart,
      title: 'Community Empowerment',
      description: 'We believe sailing should be accessible to everyone, empowering individuals and strengthening community bonds across Bonita Springs.',
    },
    {
      icon: Target,
      title: 'Sailing Excellence',
      description: 'Supporting sailors with high-quality resources, mentorship, and opportunities to showcase their skills and thrive.',
    },
    {
      icon: Users,
      title: 'Inclusive Engagement',
      description: 'Fostering safe, welcoming environments for diverse voices, background cultures, and maritime disciplines.',
    },
    {
      icon: Award,
      title: 'Sustainable Impact',
      description: 'Creating lasting educational and cultural programs that uplift underserved communities for generations to come.',
    },
  ]

  const stats = [
    { number: '2,500+', label: 'Community Members Served' },
    { number: '150+', label: 'Sailing Programs Delivered' },
    { number: '$485K', label: 'Maritime Grants Distributed' },
    { number: '12+', label: 'Years of Service' },
  ]

  return (
    <>
      <Helmet>
        <title>About Us | Pelican Bay Sailing School Inc | Bonita Springs Nonprofit</title>
        <meta
          name="description"
          content="Learn about Pelican Bay Sailing School Inc in Bonita Springs, FL. Our mission, values, and leadership driving sailing education and community enrichment. 501(c)(3) nonprofit."
        />
        <link rel="canonical" href="https://www.pelicanbaysailingschoolinc.sbs/about" />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-azure-900 text-white py-20">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold font-display mb-4">About Pelican Bay Sailing School Inc</h1>
          <p className="text-azure-200 text-lg max-w-2xl mx-auto">
            Empowering individuals and enriching lives through sailing programs, maritime events, and educational initiatives.
          </p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-white py-16">
        <div className="container-custom mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Mission & Impact"
            subtitle="Dedicated to building maritime skills and nurturing sailing talent throughout the Bonita Springs region."
          />

          <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Who We Are</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Pelican Bay Sailing School Inc is a registered 501(c)(3) nonprofit organization based in Bonita Springs, FL. 
              We believe that access to sailing education is a fundamental human right that sparks innovation, builds teamwork, and elevates local communities.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Through strategic partnerships, youth workshops, community regattas, and direct training grants, we provide essential infrastructure for local sailing talent to flourish.
            </p>
          </div>

          {/* Stats Display */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((item, index) => (
              <div key={index} className="p-6 bg-azure-50 rounded-xl border border-azure-100">
                <p className="text
