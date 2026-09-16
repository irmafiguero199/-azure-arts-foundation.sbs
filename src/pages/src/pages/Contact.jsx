import { Helmet } from 'react-helmet-async'
import { Mail, MapPin, Phone } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Pelican Bay Sailing School Inc</title>
        <meta name="description" content="Get in touch with Pelican Bay Sailing School Inc in Bonita Springs, FL." />
      </Helmet>

      <div className="bg-azure-900 text-white py-20">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold font-display mb-4">Contact Us</h1>
          <p className="text-azure-200 text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Get in touch with our team.
          </p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl px-4">
          <SectionHeader title="Reach Out" subtitle="Send us a message or find our contact information below." />
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-azure-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Address</h3>
                  <p className="text-gray-600 text-sm">4971 BONITA BAY BLVD, BONITA SPRINGS, FL 34134</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-azure-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Email</h3>
                  <p className="text-gray-600 text-sm">admin@pelicanbaysailingschoolinc.sbs</p>
                </div>
              </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg p-2.5 text-sm" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full border border-gray-300 rounded-lg p-2.5 text-sm" placeholder="Your Email" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows="4" className="w-full border border-gray-300 rounded-lg p-2.5 text-sm" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="btn-primary w-full justify-center">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
