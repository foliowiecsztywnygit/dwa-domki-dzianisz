import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { FadeIn } from '../ui/FadeIn';

export function Location() {
  return (
    <Section background="default" id="lokalizacja" className="py-24">
      <div className="container">
        <Card className="flex flex-col lg:flex-row overflow-hidden shadow-card">
          <div className="lg:w-1/2 p-10 md:p-16 lg:p-20 flex flex-col justify-center">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-heading text-foreground-heading mb-6">
                Doskonała Lokalizacja
              </h2>
              <div className="prose prose-lg text-foreground-body font-body leading-relaxed max-w-none">
                <p className="mb-6">
                  Z dala od miejskiego zgiełku, u stóp Tatr. Cicha Przystań w Dzianiszu to gwarancja prywatności, 
                  komfortu i niezapomnianych widoków na Giewont. Idealna baza wypadowa na szlaki górskie.
                </p>
              </div>
            </FadeIn>
          </div>
          <div className="lg:w-1/2 min-h-[400px] lg:min-h-full relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2596.1754070081395!2d19.8660877156942!3d49.3106518793318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715f5c88c71db6b%3A0x8e833446698651a5!2sDzianisz!5e0!3m2!1spl!2spl!4v1689252345678!5m2!1spl!2spl"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa: Cicha Przystań Dzianisz"
            />
          </div>
        </Card>
      </div>
    </Section>
  );
}
