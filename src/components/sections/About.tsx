import { Section } from '../ui/Section';
import { FadeIn, StaggerContainer, StaggerItem } from '../ui/FadeIn';
import { advantages } from '../../content/data';
import { Leaf, MapPin, Heart, Key, Mountain, Flame, Car } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Car,
  MapPin,
  Leaf,
  Heart,
  Key,
  Mountain,
  Flame,
};

export function About() {
  return (
    <Section background="default" id="o-nas">
      <FadeIn className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl font-heading text-brand-green mb-6 uppercase">Witaj w Cichej Przystani</h2>
        <div className="w-24 h-px bg-accent-gold mx-auto mb-6" />
        <p className="text-foreground-body font-body text-lg leading-relaxed">
          Stworzyliśmy to miejsce z myślą o tych, którzy szukają wyjątkowego standardu i prawdziwego relaksu u podnóża gór.
          Nasze dwa niezależne domki łączą w sobie luksus, góralską duszę i przestrzeń na wyłączność.
        </p>
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {advantages.map((advantage) => {
          const Icon = iconMap[advantage.icon];
          return (
            <StaggerItem key={advantage.id}>
              <div className="flex flex-col items-center text-center p-8 rounded-none border border-brand-green/20 bg-background-card hover:border-brand-green/40 transition-colors h-full">
                <div className="w-16 h-16 rounded-full bg-brand-green/5 flex items-center justify-center mb-6">
                  {Icon && <Icon size={28} className="text-brand-green" />}
                </div>
                <h3 className="text-xl font-heading text-brand-green mb-3 uppercase tracking-wide">{advantage.title}</h3>
                <p className="text-foreground-body font-body">{advantage.description}</p>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}
