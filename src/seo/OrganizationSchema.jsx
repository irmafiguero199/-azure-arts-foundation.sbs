import { Helmet } from 'react-helmet-async'

function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: 'Azure Arts Foundation',
    alternateName: 'Azure Arts',
    url: 'https://www.azure-arts-foundation.sbs',
    logo: 'https://www.azure-arts-foundation.sbs/logo.svg',
    email: 'admin@azure-arts-foundation.sbs',
    telephone: '+1-916-555-0142',
    taxID: '68-0321352',
    sameAs: [
      'https://www.facebook.com/azureartsfoundation',
      'https://www.instagram.com/azureartsfoundation',
      'https://www.linkedin.com/company/azure-arts-foundation',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '9933 Business Park Dr',
      addressLocality: 'Sacramento',
      addressRegion: 'CA',
      postalCode: '95827-1722',
      addressCountry: 'US',
    },
    description: 'Azure Arts Foundation is a registered 501(c)(3) nonprofit organization dedicated to fostering artistic expression and cultural enrichment in underserved communities throughout the Sacramento region.',
    foundingDate: '2019',
    areaServed: {
      '@type': 'City',
      name: 'Sacramento',
      containedInPlace: {
        '@type': 'State',
        name: 'California',
      },
    },
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  )
}

export default OrganizationSchema
