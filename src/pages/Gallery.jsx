import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { MapPin, Calendar, Filter } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

function Gallery() {
  const [filter, setFilter] = useState('all')

  const categories = [
    { key: 'all', label: 'All Events' },
    { key: 'festival', label: 'Festivals' },
    { key: 'murals', label: 'Murals' },
    { key: 'exhibition', label: 'Exhibitions' },
    { key: 'workshop', label: 'Workshops' },
  ]

  const events = [
    { title: 'Summer Arts Festival 2026', date: 'July 12, 2026', location: 'William Land Park, Sacramento', category: 'festival', desc: 'Our largest annual event featuring 80+ local artists, live music, food vendors, and interactive art stations. Over 3,000 attendees enjoyed a day of creativity and community.' },
    { title: 'Oak Park Community Mural', date: 'June 20, 2026', location: '14th Ave & Stockton Blvd, Sacramento', category: 'murals', desc: 'A 200-foot mural celebrating Oak Park history, designed and painted by 45 community members under the guidance of artist Amara Johnson.' },
    { title: 'Emerging Artists Exhibition', date: 'May 15, 2026', location: 'Azure Arts Gallery, 9933 Business Park Dr', category: 'exhibition', desc: 'Annual showcase featuring works by 2026 grant recipients across painting, sculpture, photography, and mixed media disciplines.' },
    { title: 'Youth Arts Academy Showcase', date: 'April 28, 2026', location: 'Crocker Art Museum, Sacramento', category: 'exhibition', desc: 'Spring semester culminated in a professional exhibition of 120 student artworks at the prestigious Crocker Art Museum.' },
    { title: 'Día de los Muertos Celebration', date: 'November 2, 2025', location: 'Cesar Chavez Plaza, Sacramento', category: 'festival', desc: 'A vibrant community celebration featuring altars, live performances, face painting, and traditional Mexican folk art workshops.' },
    { title: 'Digital Media Workshop Series', date: 'October 10, 2025', location: 'Azure Arts Studio, Sacramento', category: 'workshop', desc: 'Intensive 3-day workshop on digital illustration and animation led by industry professionals for 30 aspiring digital artists.' },
    { title: 'Del Paso Heights Mural', date: 'August 15, 2025', location: 'Del Paso Blvd, Sacramento', category: 'murals', desc: 'Community-led mural project honoring local civil rights leaders and neighborhood resilience. Over 60 residents participated.' },
    { title: 'Winter Arts Market', date: 'December 7, 2025', location: 'Sacramento Convention Center', category: 'festival', desc: 'Holiday arts and crafts market featuring 50 local artisans, with proceeds supporting youth arts scholarships.' },
  ]

  const filtered = filter === 'all' ? events : events.filter(e => e.category === filter)

  return (
    <>
      <Helmet>
        <title>Gallery | Azure Arts Foundation | Events & Programs | Sacramento</title>
        <meta name="description" content="Browse photos and descriptions of past events, murals, exhibitions, and workshops by Azure Arts Foundation in Sacramento, CA. 501(c)(3) nonprofit. EIN: 68-0321352." />
        <link rel="canonical" href="https://www.azure-arts-foundation.sbs/gallery" />
      </Helmet>

      <div className="bg-azure-900 text-white py-20">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold font-display mb-4">Gallery</h1>
          <p className="text-azure-200 text-lg max-w-2xl mx-auto">
            A visual journey through our events, murals, exhibitions, and community gatherings.
          </p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionHeader
            title="Event Gallery"
            subtitle="Explore the moments that define our work and celebrate Sacramento's creative spirit."
          />

          {/* Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            <Filter className="w-4 h-4 text-slate-400 mr-2" />
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setFilter(c.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === c.key
                    ? 'bg-azure-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((e, i) => (
              <div key={i} className="bg-slate-50 rounded-xl overflow-hidden border border-slate-100 hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] bg-gradient-to-br from-azure-100 to-azure-200 flex items-center justify-center">
                  <span className="text-azure-300 font-display text-6xl font-bold opacity-30">{e.title[0]}</span>
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-azure-600 bg-azure-50 px-2.5 py-1 rounded-full uppercase tracking-wider">{e.category}</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-2 mb-1">{e.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">{e.desc}</p>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {e.date}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {e.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-slate-500">
              <p>No events found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Gallery
