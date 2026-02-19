export default function StructuredData() {
    const hotelSchema = {
        "@context": "https://schema.org",
        "@type": "Hotel",
        "name": "Hotel Belvior Estate",
        "description": "Experience the pinnacle of luxury at Hotel Belvior Estate. Located in the heart of Srinagar, Kashmir, we offer premium rooms and world-class hospitality.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Opposite Dal Lake",
            "addressLocality": "Srinagar",
            "addressRegion": "Kashmir",
            "postalCode": "190001",
            "addressCountry": "IN"
        },
        "telephone": "+91 80821 11549",
        "url": "https://www.belviorestate.com",
        "image": "https://www.belviorestate.com/Logo.svg",
        "priceRange": "₹3500 - ₹15000",
        "starRating": {
            "@type": "Rating",
            "ratingValue": "5"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
        />
    );
}
