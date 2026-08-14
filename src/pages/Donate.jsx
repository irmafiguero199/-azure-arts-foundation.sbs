import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Shield, Heart, CheckCircle, Mail, MapPin } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

function Donate() {
  const [amount, setAmount] = useState('')
  const [customAmount, setCustomAmount] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const presetAmounts = [25, 50, 100, 250, 500, 1000]

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const displayAmount = amount === 'custom' ? customAmount : amount

  return (
    <>
      <Helmet>
        <title>Donate | Azure Arts Foundation | Tax-Deductible 501(c)(3) | EIN 68-0321352</title>
        <meta name="description" content="Make a tax-deductible donation to Azure Arts Foundation, a registered 501(c)(3) nonprofit in Sacramento, CA. EIN: 68-0321352. Your support empowers artists and communities." />
        <link rel="canonical" href="https://www.azure-arts-foundation.sbs/donate" />
      </Helmet>

      <div className="bg-azure-900 text-white py-20">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold font-display mb-4">Support Our Mission</h1>
          <p className="text-azure-200 text-lg max-w-2xl mx-auto">
            Your tax-deductible donation directly funds arts education, artist grants, and community programs in Sacramento.
          </p>
          <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-white/10 rounded-full border border-white/20">
            <Shield className="w-4 h-4 text-gold-400" />
            <span className="text-sm">501(c)(3) Nonprofit | EIN: 68-0321352 | All donations are tax-deductible</span>
          </div>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Donation Form */}
            <div className="lg:col-span-3">
              <div className="bg-slate-50 rounded-2xl p-6 lg:p-8 border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-2 font-display">Make a Donation</h2>
                <p className="text-slate-600 text-sm mb-6">
                  Azure Arts Foundation is a registered 501(c)(3) nonprofit organization. EIN: 68-0321352.
                </p>

                {submitted ? (
                  <div className="flex items-center gap-3 text-emerald-600 bg-emerald-50 rounded-lg p-6">
                    <CheckCircle className="w-6 h-6" />
                    <div>
                      <p className="font-medium">Thank you for your generosity!</p>
                      <p className="text-sm">Your donation of ${displayAmount} will help us continue our vital work in the Sacramento arts community.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Amount Selection */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-3">Select Donation Amount</label>
                      <div className="grid grid-cols-3 gap-3">
                        {presetAmounts.map((a) => (
                          <button
                            key={a}
                            type="button"
                            onClick={() => { setAmount(String(a)); setCustomAmount('') }}
                            className={`py-3 rounded-lg border-2 font-semibold transition-colors ${
                              amount === String(a)
                                ? 'border-azure-500 bg-azure-50 text-azure-700'
                                : 'border-slate-200 bg-white text-slate-700 hover:border-azure-300'
                            }`}
                          >
                            ${a}
                          </button>
                        ))}
                      </div>
                      <div className="mt-3">
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Custom Amount</label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">$</span>
                          <input
                            type="number"
                            min="1"
                            placeholder="Other amount"
                            value={customAmount}
                            onChange={(e) => { setCustomAmount(e.target.value); setAmount('custom') }}
                            className="w-full pl-8 pr-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-azure-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Donor Info */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">First Name *</label>
                        <input type="text" required className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-azure-500" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Last Name *</label>
                        <input type="text" required className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-azure-500" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address *</label>
                      <input type="email" required className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-azure-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone</label>
                      <input type="tel" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-azure-500" />
                    </div>

                    {/* Recurring */}
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="recurring" className="w-4 h-4 text-azure-600 rounded border-slate-300 focus:ring-azure-500" />
                      <label htmlFor="recurring" className="text-sm text-slate-700">Make this a monthly recurring donation</label>
                    </div>

                    <button type="submit" className="btn-primary w-full bg-gold-500 hover:bg-gold-600 text-lg py-4">
                      <Heart className="w-5 h-5 mr-2" />
                      Donate {displayAmount ? `$${displayAmount}` : 'Now'}
                    </button>

                    <p className="text-xs text-slate-400 text-center">
                      This is a demonstration form. For actual donations, please contact us at{' '}
                      <a href="mailto:admin@azure-arts-foundation.sbs" className="text-azure-500 hover:underline">admin@azure-arts-foundation.sbs</a>
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-azure-50 rounded-xl p-6 border border-azure-100">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Your Impact</h3>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-azure-500 mt-0.5 shrink-0" /> $25 provides art supplies for one youth student</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-azure-500 mt-0.5 shrink-0" /> $100 sponsors a week of after-school arts classes</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-azure-500 mt-0.5 shrink-0" /> $250 funds a community mural paint supply</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-azure-500 mt-0.5 shrink-0" /> $500 supports an emerging artist grant</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-azure-500 mt-0.5 shrink-0" /> $1,000 underwrites a full semester of Youth Arts Academy</li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Other Ways to Give</h3>
                <div className="space-y-4 text-sm text-slate-700">
                  <div>
                    <p className="font-medium text-slate-900">By Check</p>
                    <p>Mail checks payable to Azure Arts Foundation to:</p>
                    <p className="mt-1 text-slate-600">
                      9933 Business Park Dr<br/>Sacramento, CA 95827-1722
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Employer Matching</p>
                    <p>Ask your employer about matching gift programs to double your impact.</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Planned Giving</p>
                    <p>Include Azure Arts Foundation in your estate planning. Contact us for details.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gold-50 rounded-xl p-6 border border-gold-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-gold-600" />
                  Tax Information
                </h3>
                <p className="text-sm text-slate-700">
                  Azure Arts Foundation is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the fullest extent allowed by law.
                </p>
                <div className="mt-3 text-sm space-y-1">
                  <p><span className="text-slate-500">EIN:</span> <span className="font-mono font-medium">68-0321352</span></p>
                  <p><span className="text-slate-500">Address:</span> 9933 Business Park Dr, Sacramento, CA 95827-1722</p>
                  <p><span className="text-slate-500">Email:</span> <a href="mailto:admin@azure-arts-foundation.sbs" className="text-azure-600 hover:underline">admin@azure-arts-foundation.sbs</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Donate
