import { Helmet } from 'react-helmet-async'
import { Mail, MapPin, Shield } from 'lucide-react'

function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Azure Arts Foundation | Sacramento Nonprofit</title>
        <meta name="description" content="Terms of Service for Azure Arts Foundation, a registered 501(c)(3) nonprofit in Sacramento, CA. EIN: 68-0321352. Address: 9933 Business Park Dr, Sacramento, CA 95827-1722." />
        <link rel="canonical" href="https://www.azure-arts-foundation.sbs/terms-of-service" />
      </Helmet>

      <div className="bg-azure-900 text-white py-20">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold font-display mb-4">Terms of Service</h1>
          <p className="text-azure-200 text-lg max-w-2xl mx-auto">
            Terms and conditions governing your use of our website and services.
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
                These Terms of Service are issued by <strong>Azure Arts Foundation</strong>, a registered 501(c)(3) nonprofit organization.
                Federal EIN: <strong>68-0321352</strong>. Registered Address: <strong>9933 Business Park Dr, Sacramento, CA 95827-1722, United States</strong>.
                Contact Email: <a href="mailto:admin@azure-arts-foundation.sbs" className="text-azure-600 hover:underline">admin@azure-arts-foundation.sbs</a>.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 font-display">1. Agreement to Terms</h2>
            <p className="text-slate-600 leading-relaxed">
              By accessing or using the website of Azure Arts Foundation ("we," "us," or "our") at www.azure-arts-foundation.sbs, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 font-display mt-8">2. Organization Information</h2>
            <p className="text-slate-600 leading-relaxed">
              Azure Arts Foundation is a registered 501(c)(3) nonprofit organization incorporated in the State of California. Our federal Employer Identification Number (EIN) is 68-0321352. Our registered address is 9933 Business Park Dr, Sacramento, CA 95827-1722, United States.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 font-display mt-8">3. Use of Website</h2>
            <p className="text-slate-600 leading-relaxed">
              You may use our website for lawful purposes only. You agree not to:
            </p>
            <ul className="text-slate-600 space-y-2">
              <li>Use the website in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to any portion of the website</li>
              <li>Use the website to transmit harmful code, malware, or viruses</li>
              <li>Interfere with the proper functioning of the website</li>
              <li>Harvest or collect personal information of other users without consent</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 font-display mt-8">4. Donations</h2>
            <p className="text-slate-600 leading-relaxed">
              All donations made to Azure Arts Foundation are voluntary and non-refundable. Donations are tax-deductible to the fullest extent allowed by law. We are a registered 501(c)(3) nonprofit organization (EIN: 68-0321352). Donors will receive a receipt for tax purposes.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 font-display mt-8">5. Intellectual Property</h2>
            <p className="text-slate-600 leading-relaxed">
              All content on this website, including text, graphics, logos, images, and software, is the property of Azure Arts Foundation or its content suppliers and is protected by United States and international copyright laws. You may not reproduce, distribute, modify, or create derivative works without our express written permission.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 font-display mt-8">6. Third-Party Links</h2>
            <p className="text-slate-600 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or terms of service of any third-party sites. We encourage you to review the terms and policies of any external sites you visit.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 font-display mt-8">7. Disclaimer of Warranties</h2>
            <p className="text-slate-600 leading-relaxed">
              Our website is provided on an "as is" and "as available" basis. We make no warranties, express or implied, regarding the accuracy, reliability, or availability of the website or its content. We disclaim all warranties to the maximum extent permitted by law.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 font-display mt-8">8. Limitation of Liability</h2>
            <p className="text-slate-600 leading-relaxed">
              To the maximum extent permitted by law, Azure Arts Foundation shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the website.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 font-display mt-8">9. Governing Law</h2>
            <p className="text-slate-600 leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any disputes arising under these terms shall be resolved in the courts of Sacramento County, California.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 font-display mt-8">10. Changes to Terms</h2>
            <p className="text-slate-600 leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page. Your continued use of the website constitutes acceptance of the revised terms.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 font-display mt-8">11. Contact Information</h2>
            <p className="text-slate-600 leading-relaxed">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 mt-4">
              <p className="text-slate-700 font-medium">Azure Arts Foundation</p>
              <p className="text-slate-600 text-sm flex items-center gap-2 mt-1"><MapPin className="w-4 h-4 text-azure-500" /> 9933 Business Park Dr, Sacramento, CA 95827-1722</p>
              <p className="text-slate-600 text-sm flex items-center gap-2 mt-1"><Mail className="w-4 h-4 text-azure-500" /> <a href="mailto:admin@azure-arts-foundation.sbs" className="text-azure-600 hover:underline">admin@azure-arts-foundation.sbs</a></p>
              <p className="text-slate-600 text-sm mt-1">EIN: 68-0321352</p>
            </div>

            <p className="text-slate-500 text-sm mt-8">Last Updated: August 14, 2026</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default TermsOfService
