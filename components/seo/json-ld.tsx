export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://zinavo.com/#organization",
    name: "Zinavo Technologies",
    url: "https://zinavo.com",
    logo: "https://zinavo.com/logo.png",
    image: "https://zinavo.com/aboutUsImg.png",
    description:
      "Zinavo is a leading web design and development company in Bangalore, offering custom web solutions, SEO, and digital marketing.",
    telephone: "+91-8035694395",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "2nd Floor, No. 31, Main Chairman Layout, 9th B, HRBR Layout 1st Block, Balaji Layout, Subbaiahnapalya, Banaswadi",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560043",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.0035,
      longitude: 77.6413,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:30",
      },
    ],
    sameAs: [
      "https://www.facebook.com/zinavopvtltd/",
      "https://x.com/Zinavogroup",
      "https://www.linkedin.com/company/zinavo/",
      "https://www.instagram.com/zinavopvtltd/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="organization-jsonld"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: "Standard implementation for JSON-LD"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
