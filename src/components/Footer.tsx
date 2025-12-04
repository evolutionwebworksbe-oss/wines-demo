import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-wine-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-3xl">🍷</div>
              <div>
                <h3 className="text-xl font-bold">Danny Telleir Vins</h3>
                <p className="text-wine-300 text-sm">Premium Wijnen & Champagnes</p>
              </div>
            </div>
            <p className="text-wine-400 text-sm">
              Geselecteerde collectie van premium wijnen en champagnes, persoonlijk gekozen door Danny Telleir.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Winkel</h4>
            <ul className="space-y-2 text-wine-300">
              <li>
                <Link href="/shop" className="hover:text-white transition-colors">
                  Alle Wijnen
                </Link>
              </li>
              <li>
                <Link href="/shop?category=red" className="hover:text-white transition-colors">
                  Rode Wijnen
                </Link>
              </li>
              <li>
                <Link href="/shop?category=white" className="hover:text-white transition-colors">
                  Witte Wijnen
                </Link>
              </li>
              <li>
                <Link href="/shop?category=rosé" className="hover:text-white transition-colors">
                  Rosé Wijnen
                </Link>
              </li>
              <li>
                <Link href="/shop?category=sparkling" className="hover:text-white transition-colors">
                  Champagne & Mousserende
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Informatie</h4>
            <ul className="space-y-2 text-wine-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Over Ons
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="hover:text-white transition-colors">
                  Leveringsinformatie
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Veelgestelde Vragen
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-wine-300 text-sm">
              <li>📍 Rozenlaan 6, 9031 Drongen</li>
              <li>📧 info@dannytelleir.be</li>
              <li>📞 +32 (0) 123 45 67 89</li>
              <li className="pt-2">
                <div className="font-semibold text-wine-100">🏪 Drongen Markt</div>
                <div className="text-xs">Elke eerste zaterdag van de maand</div>
              </li>
              <li className="pt-2">
                <div className="font-semibold text-wine-100">🚚 Woensdagleveringen</div>
                <div className="text-xs">Bestel voor dinsdag 18u</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-wine-800 mt-8 pt-8 text-center text-wine-400 text-sm">
          <p>© 2025 Danny Telleir Vins. Alle rechten voorbehouden.</p>
          <p className="mt-2 text-wine-500">
            Demo website door{' '}
            <a 
              href="https://evolutionwebworks.be" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-wine-400 hover:text-wine-200 transition-colors"
            >
              Evolution Web Works
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
