import { Helmet } from 'react-helmet-async';
import { Rooms } from '../components/sections/Rooms';

export default function DomkiPage() {
  return (
    <div className="pt-24">
      <Helmet>
        <title>Nasze Domki | Cicha Przystań Dzianisz</title>
        <meta name="description" content="Poznaj nasze luksusowe domki w Dzianiszu. Oferujemy trzy bliźniacze domki, z których każdy pomieści do 11 osób. Sprawdź wyposażenie i zarezerwuj swój nocleg z widokiem na Tatry." />
      </Helmet>
      <Rooms />
    </div>
  );
}
