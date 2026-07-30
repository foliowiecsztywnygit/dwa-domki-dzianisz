import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { RoomsSection } from '../components/sections/RoomsSection';
import { PromoCards } from '../components/sections/PromoCards';
import { Location } from '../components/sections/Location';
import { ContactForm } from '../components/sections/ContactForm';
import { Faq } from '../components/sections/Faq';
import { GoralskiDivider } from '../components/ui/Icons';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Cicha Przystań Dzianisz – Luksusowe Domki z Widokiem na Tatry</title>
        <meta 
          name="description" 
          content="Luksusowe domki w Dzianiszu koło Zakopanego. Przepiękny widok na Giewont i Tatry Zachodnie, strefa Wellness (ruska bania, sauna) oraz pełna prywatność." 
        />
        <link rel="canonical" href="https://cichaprzystandzianisz.pl/" />
        {/* JSON-LD for Local Business */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              "name": "Cicha Przystań Dzianisz",
              "description": "Luksusowe domki z widokiem na Tatry, ruska bania, sauna.",
              "image": "https://cichaprzystandzianisz.pl/galeria/IMG-20260729-WA0008.jpg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "ul. Dworska 73",
                "addressLocality": "Dzianisz",
                "postalCode": "34-514",
                "addressCountry": "PL"
              },
              "telephone": "+48 602 222 212",
              "priceRange": "$$$"
            }
          `}
        </script>
      </Helmet>

      <Hero />
      <About />
      <GoralskiDivider />
      <RoomsSection />
      <GoralskiDivider />
      <PromoCards />
      <GoralskiDivider />
      <Location />
      <GoralskiDivider />
      <ContactForm />
      <Faq />
    </>
  );
}
