import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  return (
    <section className="bg-azure-50">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 font-display">
            Stay Connected with Pelican Bay Sailing School
          </h2>
          <p className="text-slate-600 mb-8">
            Subscribe to our newsletter for updates on programs, events, and opportunities to support sailing excellence in Bonita Springs.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-emerald-600 bg-emerald-50 rounded-lg py-4 px-6">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Thank you for subscribing! Check your inbox for confirmation.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-azure-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="btn-primary px-6 py-3"
              >
                <Send className="w-4 h-4 mr-2" />
                Subscribe
              </button>
            </form>
          )}

          <p className="text-xs text-slate-400 mt-4">
            PELICAN BAY SAILING SCHOOL INC respects your privacy. EIN: 92-3488213
          </p>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
