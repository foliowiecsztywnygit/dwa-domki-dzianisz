import { Helmet } from 'react-helmet-async';
import { Faq } from '../components/sections/Faq';

export default function FaqPage() {
  return (
    <div className="pt-24">
      <Helmet>
        <title>FAQ | Cicha Przystań Dzianisz</title>
        <meta name="description" content="FAQ: parking, zameldowanie, wyposażenie domków, strefa Wellness i informacje o pobycie. Sprawdź odpowiedzi przed rezerwacją." />
      </Helmet>
      <Faq />
    </div>
  );
}

