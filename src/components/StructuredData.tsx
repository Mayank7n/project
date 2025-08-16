import { Helmet } from 'react-helmet-async';

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Organization"],
    "name": "S.K PUF Panel",
    "legalName": "SK Enterprises",
    "alternateName": ["SK PUF Panel", "S.K. Enterprises", "SK PUF"],
    "image": "https://skpufpanel.com/images/logo.png",
    "description": "SK Enterprises, operating as S.K PUF Panel, is a leading manufacturer and installer of high-quality PUF panels and cold rooms in Mathura. Formerly known as SK Enterprises, we specialize in PUF panel work, installation, and fabrication services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "KosiKalan",
      "addressLocality": "Mathura",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "281403",
      "addressCountry": "India"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "27.4924",
      "longitude": "77.6737"
    },
    "url": "https://skpufpanel.com",
    "telephone": "+919068324872",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/skpufpanel",
      "https://www.instagram.com/skpufpanel",
      "https://in.linkedin.com/company/sk-puf-panel"
    ],
    "keywords": [
      "SK Enterprises",
      "SK PUF Panel",
      "S.K. Enterprises",
      "PUF panel work",
      "PUF panel installation Mathura",
      "PUF panel contractor",
      "cold room installation",
      "PUF panel manufacturer"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "name": "PUF Panel Installation",
        "description": "Professional PUF panel installation services by SK Enterprises (S.K PUF Panel) for industrial and commercial properties."
      },
      {
        "@type": "Offer",
        "name": "Cold Room Construction",
        "description": "Custom cold room construction using high-quality PUF panels by SK PUF Panel."
      }
    ],
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "27.4924",
        "longitude": "77.6737"
      },
      "geoRadius": "50000"
    },
    "foundingDate": "2020",
    "founder": {
      "@type": "Person",
      "name": "Bhoopendra Singh"
    },
    "brand": {
      "@type": "Brand",
      "name": "S.K PUF Panel",
      "alternateName": ["SK Enterprises", "SK PUF"],
      "logo": "https://skpufpanel.com/logo.png"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData, null, 2)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
