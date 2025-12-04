import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedWines } from '@/lib/mock-wines';
import { getDeliveryMessage, getCutoffMessage } from '@/lib/delivery-date';

export default function Home() {
  const featuredWines = getFeaturedWines();
  const deliveryMessage = getDeliveryMessage();
  const cutoffMessage = getCutoffMessage();

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1920&q=80"
          alt="Wijncollectie"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        
        <div className="relative z-10 text-white px-4 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Ontdek Premium Wijnen
              <span className="block text-wine-200 text-4xl md:text-6xl mt-2">
                Wekelijks Geleverd
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Geselecteerde collectie van premium wijnen uit Europa's beste wijngaarden
            </p>
            
            {/* Delivery Info Card */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-md">
              <div className="flex items-start space-x-3">
                <div className="text-3xl">🚚</div>
                <div>
                  <p className="text-wine-900 font-semibold text-lg mb-1">
                    {deliveryMessage}
                  </p>
                  <p className="text-wine-700 text-sm">
                    {cutoffMessage}
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/shop"
              className="inline-block bg-wine-600 hover:bg-wine-700 text-white font-semibold px-10 py-4 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Ontdek Onze Collectie
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Wines Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-wine-900 mb-4">
            Uitgelichte Selectie
          </h2>
          <p className="text-lg text-wine-600 max-w-2xl mx-auto">
            Handgeselecteerde wijnen door Danny Telleir van gerenommeerde domeinen
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredWines.map((wine) => (
            <Link 
              key={wine.id} 
              href={`/product/${wine.slug}`}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="aspect-[3/4] bg-gradient-to-br from-wine-50 to-wine-100 relative overflow-hidden">
                  <Image
                    src={wine.image}
                    alt={wine.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-wine-600 uppercase tracking-wide">
                      {wine.category === 'red' && 'Rood'}
                      {wine.category === 'white' && 'Wit'}
                      {wine.category === 'rosé' && 'Rosé'}
                      {wine.category === 'sparkling' && 'Mousserende'}
                    </span>
                    <span className="text-xs text-wine-500">{wine.vintage}</span>
                  </div>
                  <h3 className="font-semibold text-lg text-wine-900 mb-2 group-hover:text-wine-600 transition-colors">
                    {wine.name}
                  </h3>
                  <p className="text-sm text-wine-600 mb-3">{wine.region}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-wine-900 font-bold text-xl">€{wine.price.toFixed(2)}</p>
                    <span className="text-wine-600 text-sm font-medium group-hover:text-wine-700">
                      Bekijk Details →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/shop"
            className="inline-block bg-wine-900 hover:bg-wine-800 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Bekijk Volledige Collectie
          </Link>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="bg-gradient-to-b from-wine-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-wine-900 mb-4">
              Winkel per Categorie
            </h2>
            <p className="text-lg text-wine-600">
              Ontdek wijnen op maat van jouw smaak
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { category: 'red', emoji: '🍷', name: 'Rode Wijnen', image: 'photo-1506377247377-2a5b3b417ebb' },
              { category: 'white', emoji: '🥂', name: 'Witte Wijnen', image: 'photo-1551024709-8f23befc6f87' },
              { category: 'rosé', emoji: '🌸', name: 'Rosé Wijnen', image: 'photo-1510812431401-41d2bd2722f3' },
              { category: 'sparkling', emoji: '🍾', name: 'Mousserende', image: 'photo-1547595628-c61a29f496f0' },
            ].map((cat) => (
              <Link
                key={cat.category}
                href={`/shop?category=${cat.category}`}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-[4/5] relative">
                  <Image
                    src={`https://images.unsplash.com/${cat.image}?w=400&q=80`}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-4xl mb-2">{cat.emoji}</div>
                    <h3 className="text-2xl font-bold mb-1">{cat.name}</h3>
                    <p className="text-sm text-gray-200 group-hover:text-white transition-colors">
                      Bekijk Collectie →
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Wednesday Delivery USP */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-wine-700 via-wine-600 to-wine-700 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src="https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800&q=80"
                  alt="Wijnlevering"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 text-white flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Woensdaglevering
                </h2>
                <p className="text-lg text-wine-100 mb-8 leading-relaxed">
                  Geniet van het gemak van wekelijkse wijnlevering. Danny selecteert en levert 
                  persoonlijk premium wijnen aan uw deur elke woensdag. Bestel gewoon voor dinsdag 
                  18u en ontvang uw wijnen de volgende dag.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <p className="font-semibold text-lg mb-1">📦 Besteldeadline</p>
                    <p className="text-wine-100">Dinsdag 18:00</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <p className="font-semibold text-lg mb-1">🚚 Leverdag</p>
                    <p className="text-wine-100">Elke Woensdag</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <p className="font-semibold text-lg mb-1">📍 Levergebied</p>
                    <p className="text-wine-100">Ronse Regio</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Link
                    href="/delivery"
                    className="inline-block bg-white text-wine-700 hover:bg-wine-50 font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
                  >
                    Meer Over Levering
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-wine-900 mb-4">
              Waarom Danny Telleir Vins
            </h2>
            <p className="text-lg text-wine-600 max-w-2xl mx-auto">
              Uw vertrouwde partner voor uitzonderlijke wijnen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold text-wine-900 mb-3">
                Persoonlijk Geselecteerd
              </h3>
              <p className="text-wine-600">
                Elke wijn wordt zorgvuldig geselecteerd door Danny Telleir voor kwaliteit en waarde
              </p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold text-wine-900 mb-3">
                Betrouwbare Levering
              </h3>
              <p className="text-wine-600">
                Wekelijkse woensdagleveringen zorgen ervoor dat uw wijnen in perfecte staat aankomen
              </p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-xl font-semibold text-wine-900 mb-3">
                Premium Kwaliteit
              </h3>
              <p className="text-wine-600">
                Directe relaties met wijngaarden garanderen authenticiteit en versheid
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
