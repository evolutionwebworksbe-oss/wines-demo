import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-wine-900 to-wine-700">
        <Image
          src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1920&q=80"
          alt="Wijnkelder"
          fill
          className="object-cover opacity-30"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Over Ons</h1>
            <p className="text-xl text-wine-100 max-w-2xl">
              Uw specialist in premium wijnen en champagnes uit Drongen
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-wine-900 mb-6">Ons Verhaal</h2>
            <div className="space-y-4 text-wine-700 text-lg leading-relaxed">
              <p>
                Danny Telleir uit Drongen heeft zich gespecialiseerd in het aanbieden van de 
                beste wijnen en champagnes aan wijnliefhebbers in de regio Gent.
              </p>
              <p>
                Met een passie voor kwaliteit en een oog voor detail, selecteert Danny persoonlijk 
                elke fles in zijn collectie. Van gerenommeerde champagnehuizen tot bijzondere 
                wijndomeinen uit heel Europa.
              </p>
              <p>
                Elke eerste zaterdag van de maand vindt u Danny op de Drongen Markt, waar u 
                wijnen kan proeven en advies kan inwinnen. Voor nog meer gemak bieden we ook 
                een woensdagbezorgservice aan voor onze vaste klanten.
              </p>
            </div>
          </div>
          <div className="relative h-96 lg:h-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80"
              alt="Wijncollectie"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Market Presence */}
      <section className="bg-wine-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-6xl mb-4">🏪</div>
                <h2 className="text-3xl font-bold text-wine-900 mb-4">
                  Bezoek Ons op de Drongen Markt
                </h2>
                <p className="text-wine-700 text-lg leading-relaxed mb-6">
                  Elke eerste zaterdag van de maand staat Danny Telleir voor u klaar op de 
                  Drongen Markt. Kom langs om te proeven, advies te krijgen en kennis te maken 
                  met onze uitgebreide collectie wijnen en champagnes.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-wine-600 mr-3 text-xl">📅</span>
                    <div>
                      <p className="font-semibold text-wine-900">Wanneer</p>
                      <p className="text-wine-700">Elke eerste zaterdag van de maand</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-wine-600 mr-3 text-xl">📍</span>
                    <div>
                      <p className="font-semibold text-wine-900">Waar</p>
                      <p className="text-wine-700">Versmarkt Drongenplein, 9031 Drongen</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-wine-600 mr-3 text-xl">🍷</span>
                    <div>
                      <p className="font-semibold text-wine-900">Wat</p>
                      <p className="text-wine-700">Proeven, adviseren, verkopen</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1441986380878-c4248f5b8b5b?w=800&q=80"
                  alt="Markt"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-wine-900 mb-12 text-center">
            Onze Waarden
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-wine-50 rounded-xl p-8 shadow-md">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-wine-900 mb-3">Persoonlijke Selectie</h3>
              <p className="text-wine-700 leading-relaxed">
                Danny selecteert persoonlijk elke wijn en champagne. Alleen de beste flessen 
                komen in onze collectie terecht.
              </p>
            </div>

            <div className="bg-wine-50 rounded-xl p-8 shadow-md">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-wine-900 mb-3">Vakkundig Advies</h3>
              <p className="text-wine-700 leading-relaxed">
                Met jarenlange ervaring in wijnen en champagnes, helpt Danny u graag de 
                perfecte fles te vinden voor elke gelegenheid.
              </p>
            </div>

            <div className="bg-wine-50 rounded-xl p-8 shadow-md">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-2xl font-bold text-wine-900 mb-3">Premium Kwaliteit</h3>
              <p className="text-wine-700 leading-relaxed">
                Van klassieke champagnes tot bijzondere wijnen - kwaliteit staat altijd voorop 
                in onze selectie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wednesday Delivery */}
      <section className="bg-gradient-to-b from-wine-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800&q=80"
                alt="Wijnlevering"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-wine-900 mb-6">
                Woensdaglevering
              </h2>
              <div className="space-y-4 text-wine-700 text-lg leading-relaxed">
                <p>
                  Voor onze vaste klanten bieden we een handige woensdagbezorgservice aan. 
                  Bestel uw favoriete wijnen en champagnes en ontvang ze vers aan huis.
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="text-wine-600 mr-2">✓</span>
                    <span>Bestel eenvoudig online of op de markt</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-wine-600 mr-2">✓</span>
                    <span>Levering elke woensdag in de regio</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-wine-600 mr-2">✓</span>
                    <span>Persoonlijke service en aandacht</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-wine-600 mr-2">✓</span>
                    <span>Elke fles met zorg verpakt</span>
                  </li>
                </ul>
                <p className="pt-4 font-semibold text-wine-900">
                  Bestel voor dinsdag 18u voor levering op woensdag!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-wine-900 mb-12 text-center">
          Over Danny Telleir
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-wine-100 to-wine-200 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="text-8xl mb-4">👨‍💼</div>
                  <h3 className="text-2xl font-bold text-wine-900">Danny Telleir</h3>
                  <p className="text-wine-600 mt-2">Eigenaar & Wijnselecteur</p>
                  <p className="text-wine-700 text-sm mt-4">Drongen, Gent</p>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <div className="space-y-4 text-wine-700 leading-relaxed">
                  <p>
                    Danny Telleir heeft zich gespecialiseerd in het selecteren en aanbieden van 
                    de beste wijnen en champagnes. Met een scherp oog voor kwaliteit en een 
                    passie voor het vak, bouwde hij een trouwe klantenkring op in de regio Gent.
                  </p>
                  <p>
                    Elke eerste zaterdag van de maand staat Danny op de Drongen Markt, waar hij 
                    persoonlijk advies geeft en klanten laat kennismaken met zijn zorgvuldig 
                    geselecteerde collectie.
                  </p>
                  <p>
                    Van exclusieve champagnes tot verrassende wijnen uit heel Europa - Danny 
                    helpt u graag de perfecte fles te vinden voor elke gelegenheid. Of het nu 
                    gaat om een feestje, een diner of gewoon om thuis van te genieten.
                  </p>
                  <p className="text-wine-900 font-semibold italic">
                    "Goede wijn en champagne maken elk moment speciaal. Daar help ik graag bij."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-wine-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-wine-900 mb-6">Kom Langs of Neem Contact Op</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="font-semibold text-wine-900 mb-2">Adres</h3>
              <p className="text-wine-700 text-sm">Rozenlaan 6<br/>9031 Drongen</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="font-semibold text-wine-900 mb-2">Email</h3>
              <p className="text-wine-700 text-sm">info@dannytelleir.be</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-3">🏪</div>
              <h3 className="font-semibold text-wine-900 mb-2">Markt</h3>
              <p className="text-wine-700 text-sm">Eerste zaterdag<br/>van de maand</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-wine-700 to-wine-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ontdek Onze Collectie</h2>
          <p className="text-xl text-wine-100 mb-8">
            Bekijk onze selectie van premium wijnen en champagnes
          </p>
          <Link
            href="/shop"
            className="inline-block bg-white text-wine-700 hover:bg-wine-50 font-semibold px-10 py-4 rounded-xl text-lg transition-colors shadow-lg"
          >
            Bekijk Alle Wijnen
          </Link>
        </div>
      </section>
    </div>
  );
}
