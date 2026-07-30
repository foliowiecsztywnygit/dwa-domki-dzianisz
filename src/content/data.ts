// Dane strony - Cicha Przystań Dzianisz (Domki, Atuty, Opinie, FAQ, Atrakcje)

export const advantages = [
  {
    id: 'view',
    title: 'Przepiękny widok',
    description: 'Widok na Giewont i Tatry Zachodnie',
    icon: 'Mountain',
  },
  {
    id: 'wellness',
    title: 'Strefa Wellness',
    description: 'Tradycyjna ruska bania i sauna',
    icon: 'Flame',
  },
  {
    id: 'privacy',
    title: 'Wyłączność',
    description: 'Niezależne domki na wyłączność',
    icon: 'Key',
  },
  {
    id: 'nature',
    title: 'Z dala od zgiełku',
    description: 'Cisza, spokój i otoczenie natury',
    icon: 'Leaf',
  },
];

export const rooms = [
  {
    id: 'domek-wschodni',
    name: 'Domek Wschodni',
    description: 'Przestronny, luksusowy domek w stylu góralskim z widokiem na Giewont i Tatry Zachodnie. Idealny dla rodzin lub grupy przyjaciół, gwarantujący pełną prywatność i komfort na najwyższym poziomie.',
    capacity: 'Maksymalnie 11 osób',
    amenities: ['3 sypialnie', '2 łazienki', 'Kominek', 'Taras z widokiem', 'Zmywarka', 'Klimatyzacja', 'Grill'],
    image: '/galeria/IMG-20260729-WA0008.jpg', 
    images: [
      '/galeria/IMG-20260729-WA0008.jpg', // Zewnętrze (Dzień)
      '/galeria/IMG-20260729-WA0028.jpg', // Salon z kominkiem
      '/galeria/IMG-20260729-WA0025.jpg', // Sypialnia
      '/galeria/IMG-20260729-WA0023.jpg', // Kuchnia
      '/galeria/IMG-20260729-WA0019.jpg', // Łazienka
    ],
    details: {
      bedrooms: [
        'Sypialnia nr 1: Łóżko 2-osobowe',
        'Sypialnia nr 2: Łóżko 2-osobowe + dwa łóżka 1-osobowe',
        'Sypialnia nr 3: Łóżko 2-osobowe + jedno łóżko 1-osobowe',
      ],
      livingRoom: 'Kominek, rozkładana kanapa (dla 2 osób), płaski TV',
      kitchen: 'Zmywarka, lodówka, płyta indukcyjna, ekspres do kawy, czajnik elektryczny, naczynia, przybory kuchenne',
      bathrooms: '2 łazienki z prysznicem i ręcznikami',
      outdoor: 'Taras, balkon, meble ogrodowe, grill, piękny widok na góry'
    }
  },
  {
    id: 'domek-zachodni',
    name: 'Domek Zachodni',
    description: 'Przestronny, luksusowy domek w stylu góralskim z widokiem na Giewont i Tatry Zachodnie. Bliźniaczy układ zapewniający idealne warunki do wypoczynku z dala od miejskiego zgiełku.',
    capacity: 'Maksymalnie 11 osób',
    amenities: ['3 sypialnie', '2 łazienki', 'Kominek', 'Taras z widokiem', 'Zmywarka', 'Klimatyzacja', 'Grill'],
    image: '/galeria/IMG-20260729-WA0031.jpg', 
    images: [
      '/galeria/IMG-20260729-WA0031.jpg', // Zewnętrze (Noc)
      '/galeria/IMG-20260729-WA0030.jpg', // Salon / Jadalnia
      '/galeria/IMG-20260729-WA0026.jpg', // Sypialnia
      '/galeria/IMG-20260729-WA0022.jpg', // Kuchnia zbliżenie
      '/galeria/IMG-20260729-WA0021.jpg', // Łazienka 2
    ],
    details: {
      bedrooms: [
        'Sypialnia nr 1: Łóżko 2-osobowe',
        'Sypialnia nr 2: Łóżko 2-osobowe + dwa łóżka 1-osobowe',
        'Sypialnia nr 3: Łóżko 2-osobowe + jedno łóżko 1-osobowe',
      ],
      livingRoom: 'Kominek, rozkładana kanapa (dla 2 osób), płaski TV',
      kitchen: 'Zmywarka, lodówka, płyta indukcyjna, ekspres do kawy, czajnik elektryczny, naczynia, przybory kuchenne',
      bathrooms: '2 łazienki z prysznicem i ręcznikami',
      outdoor: 'Taras, balkon, meble ogrodowe, grill, piękny widok na góry'
    }
  },
];

export const opinions = [
  {
    id: 1,
    author: 'Michał',
    quote: 'Przepiękny widok na Tatry prosto z tarasu. Domek urządzony luksusowo i ze smakiem.',
    rating: 5,
  },
  {
    id: 2,
    author: 'Katarzyna',
    quote: 'Idealne miejsce na odpoczynek z dala od zgiełku. Świetnie wyposażona kuchnia i cudowny kominek w salonie.',
    rating: 5,
  },
  {
    id: 3,
    author: 'Tomasz',
    quote: 'Bania i sauna po całym dniu na szlaku to absolutny hit. Bardzo dobry kontakt z gospodarzem.',
    rating: 5,
  },
];

export const attractions = [
  {
    id: 'tatrzanski-park-narodowy',
    title: 'Tatrzański Park Narodowy',
    description: 'Najpiękniejsze szlaki górskie i doliny, zaledwie 6 km od naszych domków.',
    link: '/blog/tatrzanski-park-narodowy',
    image: '/galeria/IMG-20260729-WA0006.jpg',
  },
  {
    id: 'gubalowka',
    title: 'Gubałówka',
    description: 'Piękna panorama Tatr. Atrakcja znajduje się około 10 km od obiektu.',
    link: '/blog/gubalowka-wjazd-i-atrakcje',
    image: '/galeria/IMG-20260729-WA0008.jpg',
  },
  {
    id: 'zakopane-centrum',
    title: 'Centrum Zakopanego',
    description: 'Krupówki i serce Zakopanego oddalone o około 16 km (blisko PKP).',
    link: '/blog/zakopane-atrakcje',
    image: '/galeria/IMG-20260729-WA0010.jpg',
  },
];

export const faqData = [
  {
    question: 'Na ile osób przewidziany jest jeden domek?',
    answer: 'Każdy z naszych dwóch domków pomieści maksymalnie 11 osób. W domku znajdują się 3 sypialnie oraz rozkładana kanapa w salonie dla 2 osób.',
  },
  {
    question: 'Czy w domkach znajduje się kuchnia?',
    answer: 'Tak, każdy domek posiada w pełni wyposażoną kuchnię (zmywarka, lodówka, płyta indukcyjna, ekspres do kawy, czajnik, naczynia i przybory).',
  },
  {
    question: 'Jak działają ruska bania i sauna?',
    answer: 'Nasza strefa Wellness (ruska bania i sauna) jest dostępna dla gości. Terminy otwarcia i zasady korzystania ustalane są indywidualnie z gospodarzem.',
  },
  {
    question: 'Czy w domku jest klimatyzacja?',
    answer: 'Tak, domki są wyposażone w klimatyzację, z której można korzystać za dodatkową opłatą.',
  },
  {
    question: 'Czy akceptujecie zwierzęta?',
    answer: 'Zwierzęta są u nas mile widziane! Poinformuj nas o tym podczas rezerwacji.',
  },
  {
    question: 'Czy na miejscu jest parking?',
    answer: 'Tak, zapewniamy bezpłatny parking na terenie posesji dla wszystkich naszych gości.',
  },
  {
    question: 'Jak daleko jest do Tatrzańskiego Parku Narodowego?',
    answer: 'Granice Tatrzańskiego Parku Narodowego znajdują się zaledwie 6 km od naszych domków.',
  },
  {
    question: 'Co znajduje się na zewnątrz domku?',
    answer: 'Do dyspozycji gości oddajemy taras, balkon, meble ogrodowe oraz grill, z przepięknym widokiem na Giewont i Tatry Zachodnie.',
  },
];
