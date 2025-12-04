'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="text-3xl">🍷</div>
            <div>
              <h1 className="text-2xl font-bold text-wine-900">Danny Telleir Vins</h1>
              <p className="text-xs text-wine-600">Premium Wijnhandelaar</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-wine-800 hover:text-wine-600 font-medium transition-colors"
            >
              Startpagina
            </Link>
            <Link 
              href="/shop" 
              className="text-wine-800 hover:text-wine-600 font-medium transition-colors"
            >
              Winkel
            </Link>
            <Link 
              href="/shop?category=red" 
              className="text-wine-800 hover:text-wine-600 font-medium transition-colors"
            >
              Rode Wijnen
            </Link>
            <Link 
              href="/shop?category=white" 
              className="text-wine-800 hover:text-wine-600 font-medium transition-colors"
            >
              Witte Wijnen
            </Link>
            <Link 
              href="/shop?category=sparkling" 
              className="text-wine-800 hover:text-wine-600 font-medium transition-colors"
            >
              Mousserende
            </Link>
            <Link 
              href="/about" 
              className="text-wine-800 hover:text-wine-600 font-medium transition-colors"
            >
              Over Ons
            </Link>
          </nav>

          {/* Cart & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/cart"
              className="relative p-2 text-wine-800 hover:text-wine-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-wine-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-wine-800"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-wine-100">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="text-wine-800 hover:text-wine-600 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Startpagina
              </Link>
              <Link 
                href="/shop" 
                className="text-wine-800 hover:text-wine-600 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Alle Wijnen
              </Link>
              <Link 
                href="/shop?category=red" 
                className="text-wine-800 hover:text-wine-600 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Rode Wijnen
              </Link>
              <Link 
                href="/shop?category=white" 
                className="text-wine-800 hover:text-wine-600 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Witte Wijnen
              </Link>
              <Link 
                href="/shop?category=rosé" 
                className="text-wine-800 hover:text-wine-600 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Rosé Wijnen
              </Link>
              <Link 
                href="/shop?category=sparkling" 
                className="text-wine-800 hover:text-wine-600 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Mousserende Wijnen
              </Link>
              <Link 
                href="/about" 
                className="text-wine-800 hover:text-wine-600 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Over Ons
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
