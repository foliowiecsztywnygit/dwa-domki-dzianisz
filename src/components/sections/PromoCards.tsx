import { FadeIn, StaggerContainer, StaggerItem } from '../ui/FadeIn';
import { Card } from '../ui/Card';
import { AppImage } from '../ui/AppImage';

export function PromoCards() {
  const cards = [
    {
      title: 'Ruska bania i sauna',
      description: 'Zrelaksuj się po górskich wędrówkach w naszej strefie Wellness. Tradycyjna ruska bania i sauna dostępne na wyłączność dla naszych gości po wcześniejszym umówieniu.',
      image: '/galeria/IMG-20260729-WA0004.jpg',
      alt: 'Ruska bania przy domkach',
    },
    {
      title: 'Z dala od zgiełku',
      description: 'Odpocznij w otoczeniu natury. Cicha Przystań to idealne miejsce, by uciec od tłumów, cieszyć się ciszą, spokojem i luksusowym standardem domków.',
      image: '/galeria/IMG-20260729-WA0031.jpg',
      alt: 'Cicha Przystań w otoczeniu natury',
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <StaggerContainer className="grid md:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <StaggerItem key={i}>
              <Card hover className="h-full overflow-hidden bg-background-card rounded-none border border-brand-green/20">
                <div className="relative h-72 md:h-80 overflow-hidden">
                  <AppImage 
                    src={card.image} 
                    alt={card.alt} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                    fallbackSrc="/images/placeholders/landscape.svg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <h3 className="text-2xl md:text-3xl font-heading text-white mb-3 uppercase tracking-wide">
                      {card.title}
                    </h3>
                    <p className="text-white/90 font-body text-sm md:text-base leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
