import { Helmet } from 'react-helmet-async'
import { Calendar, ArrowRight, Tag } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'

function News() {
  const articles = [
    {
      date: 'August 10, 2026',
      category: 'Programs',
      title: 'Youth Sailing Academy Fall Registration Now Open',
      excerpt: 'Registration is now open for our Fall 2026 Youth Sailing Academy sessions. Classes in seamanship, navigation, water safety, and racing begin September 8th at our Bonita Springs facility. Scholarships available for qualifying families.',
    },
    {
      date: 'July 28, 2026',
      category: 'Grants',
      title: '2026 Sailing Grant Recipients Announced',
      excerpt: 'We are thrilled to announce the 12 talented Bonita Springs sailors who will receive grants totaling $75,000 this year. The selected sailors represent diverse maritime disciplines including dinghy racing, coastal cruising, navigation, and marine mechanics.',
    },
    {
      date: 'July 15, 2026',
      category: 'Events',
      title: 'Summer Regatta Draws Record Crowd',
      excerpt: 'Over 3,000 community members attended our annual Summer Regatta at Bonita Bay on July 12th. The event featured 80 local vessels, live marine exhibitions, and interactive water safety stations for children.',
    },
    {
      date: 'June 20, 2026',
      category: 'Marinas',
      title: 'Bonita Bay Community Dock Unveiled',
      excerpt: 'A vibrant modern community dock celebrating Bonita Springs maritime history was unveiled today at Bonita Bay Blvd. The project engaged 45 community members in its development over six weeks.',
    },
    {
      date: 'May 5, 2026',
      category: 'Programs',
      title: 'New Partnership with Lee County Public Schools',
      excerpt: 'Pelican Bay Sailing School Inc is proud to announce a three-year partnership with LCPS to bring sailing education to 15 elementary schools lacking dedicated marine programs.',
    },
    {
      date: 'April 15, 2026',
      category: 'Awards',
      title: 'Pelican Bay Sailing School Receives Regional Nonprofit Excellence Award',
      excerpt: 'The Florida Business Journal has recognized Pelican Bay Sailing School Inc with the 2026 Regional Nonprofit Excellence Award for outstanding community impact and program innovation.',
    },
  ]

  return (
    <>
      <Helmet>
        <title>News & Updates | Pelican Bay Sailing School Inc | Bonita Springs Nonprofit</title>
        <meta name="description" content="Latest news from Pelican Bay Sailing School Inc in Bonita Springs, FL. Programs, grants, events, and community updates. 501(c)(3) nonprofit. EIN: 92-3488213." />
        <link rel="canonical" href="https://www.pelicanbaysailingschoolinc.sbs/news" />
      </Helmet>

      <div className="bg-azure-900 text-white py-20">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold font-display mb-4">News & Updates</h1>
          <p className="text-azure-200 text-lg max-w-2xl mx-auto">
            Stay informed about our latest programs, achievements, and community impact.
          </p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeader
            title="Latest Articles"
            subtitle="News, announcements, and stories from the Pelican Bay Sailing School Inc community."
          />

          <div className="space-y-8">
            {articles.map((article, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-azure-600" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1 bg-azure-50 text-azure-700 px-2.5 py-0.5 rounded-full text-xs font-medium">
                    <Tag className="w-3 h-3" />
                    {article.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default News
