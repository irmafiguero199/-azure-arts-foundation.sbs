import { Helmet } from 'react-helmet-async'
import { Shield, Mail, MapPin } from 'lucide-react'

function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Azure Arts Foundation | Sacramento Nonprofit</title>
        <meta name="description" content="Privacy Policy of Azure Arts Foundation, a registered 501(c)(3) nonprofit in Sacramento, CA. EIN: 68-0321352. Address: 9933 Business Park Dr, Sacramento, CA 95827-1722." />
        <link rel="canonical" href="https://www.azurartsfoundation.sbs/privacy-policy" />
      </Helmet>

      <div className="bg-azure-900 text-white py-20">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold font-display mb-4">Privacy Policy</h1>
          <p className="text-azure-200 text-lg max-w-2xl mx-auto">
            How we collect, use, and protect your information.
          </p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <div className="prose prose-slate max-w-none">
            <div className="bg-azure-50 rounded-xl p-6 border border-azure-100 mb-8">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-azure-600" />
                <h2 className="text-lg font-bold text-slate-900 m-0">Organization Information</h2>
              </div>
              <p className="text-slate-700 text-sm m-0">
                This Privacy Policy is issued by <strong>Azure Arts Foundation</strong>, a registered 501(c)(3) nonprofit organization.
                Federal EIN: <strong>68-0321352</strong>. Registered Address: <strong>9933 Business Park Dr, Sacramento, CA 95827-1722, United States</strong>.
                Contact Email: <a href="mailto:admin@azurartsfoundation.sbs" className="text-azure-600 hover:underline">admin@azurartsfoundation.sbs</a>.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 font-display">1. Introduction</h2>
            <p className="text-slate-600 leading-relaxed">
              Azure Arts Foundation ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at www.azure-arts-foundation.sbs or interact with us. By using our website, you consent to the practices described in this policy.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 font-display mt-8">2. Information We Collect</h2>
            <p className="text-slate-600 leading-relaxed">
              We may collect the following types of information:
            </p>
            <ul className="text-slate-600 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, mailing address, and payment information when you donate, register for programs, or contact us.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, pages visited, and time spent on pages.</li>
              <li><strong>Cookies:</strong> We use cookies to enhance your browsing experience and analyze website traffic.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 font-display mt-8">3. How We Use Your Information</h2>
            <p className="text-slate-600 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="text-slate-600 space-y-2">
              <li>Process donations and send tax receipts</li>
              <li>Register participants for programs and events</li>
              <li>Send newsletters and organizational updates</li>
              <li>Respond to inquiries and provide customer support</li>
              <li>Improve our website and program offerings</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 font-display mt-8">4. Information Sharing</h2>
            <p className="text-slate-600 leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share information with:
            </p>
            <ul className="text-slate-600 space-y-2">
              <li><strong>Service Providers:</strong> Trusted third parties who assist us in operating our website, processing payments, and delivering programs.</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights, property, or safety.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 font-display mt-8">5. Data Security</h2>
            <p className="text-slate-600 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 font-display mt-8">6. Your Rights</h2>
            <p className="text-slate-600 leading-relaxed">
              You have the right to:
            </p>
            <ul className="text-slate-600 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 font-display mt-8">7. Children's Privacy</h2>
            <p className="text-slate-600 leading-relaxed">
              Our website is not directed at children under 13. We do not knowingly collect personal information from children under 13 without parental consent. If you believe we have collected information from a child under 13, please contact us immediately.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 font-display mt-8">8. Changes to This Policy</h2>
            <p className="text-slate-600 leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 font-display mt-8">9. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed">
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 mt-4">
              <p className="text-slate-700 font-medium">Azure Arts Foundation</p>
              <p className="text-slate-600 text-sm flex items-center gap-2 mt-1"><MapPin className="w-4 h-4 text-azure-500" /> 9933 Business Park Dr, Sacramento, CA 95827-1722</p>
              <p className="text-slate-600 text-sm flex items-center gap-2 mt-1"><Mail className="w-4 h-4 text-azure-500" /> <a href="mailto:admin@azure-arts-foundation.sbs" className="text-azure-600 hover:underline">admin@azurartsfoundation.sbs</a></p>
              <p className="text-slate-600 text-sm mt-1">EIN: 68-0321352</p>
            </div>

            <p className="text-slate-500 text-sm mt-8">Last Updated: August 14, 2026</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default PrivacyPolicy
