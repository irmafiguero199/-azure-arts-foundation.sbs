import { Helmet } from 'react-helmet-async'
import { Calendar, ArrowRight, Tag } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'

function News() {
  const articles = [
    {
      date: 'August 10, 2026',
      category: 'Programs',
      title: 'Youth Arts Academy Fall Registration Now Open',
      excerpt: 'Registration is now open for our Fall 2026 Youth Arts Academy sessions. Classes in visual arts, music, theater, and digital media begin September 8th at our Sacramento studio. Scholarships available for qualifying families.',
    },
    {
      date: 'July 28, 2026',
      category: 'Grants',
      title: '2026 Artist Grant Recipients Announced',
      excerpt: 'We are thrilled to announce the 12 talented Sacramento artists who will receive grants totaling $75,000 this year. The selected artists represent diverse disciplines including painting, sculpture, photography, and performance art.',
    },
    {
      date: 'July 15, 2026',
      category: 'Events',
      title: 'Summer Arts Festival Draws Record Crowd',
      excerpt: 'Over 3,000 community members attended our annual Summer Arts Festival at William Land Park on July 12th. The event featured 80 local artists, live performances, and interactive art stations for children.',
    },
    {
      date: 'June 20, 2026',
      category: 'Murals',
      title: 'Oak Park Community Mural Unveiled',
      excerpt: 'A vibrant 200-foot mural celebrating Oak Park history was unveiled today at 14th Avenue and Stockton Boulevard. The project engaged 45 community members in its creation over six weeks.',
    },
    {
      date: 'May 5, 2026',
      category: 'Programs',
      title: 'New Partnership with Sacramento City Unified School District',
      excerpt: 'Azure Arts Foundation is proud to announce a three-year partnership with SCUSD to bring arts education to 15 elementary schools lacking dedicated art programs.',
    },
    {
      date: 'April 15, 2026',
      category: 'Awards',
      title: 'Azure Arts Foundation Receives Regional Nonprofit Excellence Award',
      excerpt: 'The Sacramento Business Journal has recognized Azure Arts Foundation with the 2026 Regional Nonprofit Excellence Award for outstanding community impact and program innovation.',
    },
  ]

  return (
    <>
      <Helmet>
        <title>News & Updates | Azure Arts Foundation | Sacramento Nonprofit</title>
        <meta name="description" content="Latest news from Azure Arts Foundation in Sacramento, CA. Programs, grants, events, and community updates. 501(c)(3) nonprofit. EIN: 68-0321352." />
        <link rel="canonical" href="https://www.azure-arts-foundation.sbs/news" />
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
            subtitle="News, announcements, and stories from the Azure Arts Foundation community."
          />

          <div className="space-y-6">
            {articles.map((a, i) => (
              <article key={i} className="bg-slate-50 rounded-xl p-6 lg:p-8 border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="flex items-center gap-1.5 text-xs font-medium text-azure-600 bg-azure-50 px-3 py-1 rounded-full">
                    <Tag className="w-3 h-3" /> {a.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Calendar className="w-3 h-3" /> {a.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{a.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-4">{a.excerpt}</p>
                <button className="text-azure-600 hover:text-azure-700 text-sm font-medium flex items-center gap-1">
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-slate-500 text-sm">
              For media inquiries, please contact{' '}
              <a href="mailto:admin@azure-arts-foundation.sbs" className="text-azure-600 hover:underline">admin@azure-arts-foundation.sbs</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default News
