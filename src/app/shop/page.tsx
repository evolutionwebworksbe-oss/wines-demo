'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { mockWines } from '@/lib/mock-wines';
import type { Wine, WineCategory } from '@/types/wine';

// Separate the component that uses useSearchParams
function ShopContent() {
  const searchParams = useSearchParams();
  const [filteredWines, setFilteredWines] = useState<Wine[]>(mockWines);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>('name');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  useEffect(() => {
    let wines = [...mockWines];

    if (selectedCategory) {
      wines = wines.filter(wine => wine.category === selectedCategory);
    }

    if (searchQuery) {
      wines = wines.filter(wine => 
        wine.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        wine.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
        wine.grapeVariety.some(grape => grape.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    wines.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredWines(wines);
  }, [selectedCategory, sortBy, searchQuery]);

  const getCategoryLabel = (cat: WineCategory) => {
    switch(cat) {
      case 'red': return 'Rode Wijnen';
      case 'white': return 'Witte Wijnen';
      case 'rosé': return 'Rosé Wijnen';
      case 'sparkling': return 'Mousserende';
      default: return cat;
    }
  };

  const categories: { value: WineCategory; label: string; count: number }[] = [
    { value: 'red', label: getCategoryLabel('red'), count: mockWines.filter(w => w.category === 'red').length },
    { value: 'white', label: getCategoryLabel('white'), count: mockWines.filter(w => w.category === 'white').length },
    { value: 'rosé', label: getCategoryLabel('rosé'), count: mockWines.filter(w => w.category === 'rosé').length },
    { value: 'sparkling', label: getCategoryLabel('sparkling'), count: mockWines.filter(w => w.category === 'sparkling').length },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-wine-900 to-wine-700 flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1920&q=80"
            alt="Wijncollectie"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Wijncollectie
          </h1>
          <p className="text-xl text-wine-100">
            Ontdek onze selectie van {mockWines.length} premium wijnen
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-bold text-wine-900 mb-4">Filters</h2>
              
              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-wine-700 mb-2">
                  Zoeken
                </label>
                <input
                  type="text"
                  placeholder="Wijnnaam, regio..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 border border-wine-200 rounded-lg focus:ring-2 focus:ring-wine-500 focus:border-transparent outline-none"
                />
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-wine-700 mb-3">Categorie</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      !selectedCategory
                        ? 'bg-wine-600 text-white'
                        : 'bg-gray-50 text-wine-700 hover:bg-wine-50'
                    }`}
                  >
                    <span className="flex items-center justify-between">
                      <span>Alle Wijnen</span>
                      <span className="text-sm">{mockWines.length}</span>
                    </span>
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => setSelectedCategory(cat.value)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === cat.value
                          ? 'bg-wine-600 text-white'
                          : 'bg-gray-50 text-wine-700 hover:bg-wine-50'
                      }`}
                    >
                      <span className="flex items-center justify-between">
                        <span>{cat.label}</span>
                        <span className="text-sm">{cat.count}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedCategory || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSearchQuery('');
                  }}
                  className="w-full text-wine-600 hover:text-wine-700 text-sm font-medium py-2"
                >
                  Wis alle filters
                </button>
              )}
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-wine-700">
                <span className="font-semibold">{filteredWines.length}</span> wijnen gevonden
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-wine-200 rounded-lg focus:ring-2 focus:ring-wine-500 focus:border-transparent outline-none bg-white"
              >
                <option value="name">Sorteer op Naam</option>
                <option value="price-asc">Prijs: Laag naar Hoog</option>
                <option value="price-desc">Prijs: Hoog naar Laag</option>
              </select>
            </div>

            {/* Wine Grid */}
            {filteredWines.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🍷</div>
                <h3 className="text-xl font-semibold text-wine-900 mb-2">
                  Geen wijnen gevonden
                </h3>
                <p className="text-wine-600 mb-6">
                  Probeer uw filters of zoektermen aan te passen
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSearchQuery('');
                  }}
                  className="inline-block bg-wine-600 hover:bg-wine-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Wis Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredWines.map((wine) => (
                  <Link 
                    key={wine.id} 
                    href={`/product/${wine.slug}`}
                    className="group"
                  >
                    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 h-full">
                      <div className="aspect-[3/4] bg-gradient-to-br from-wine-50 to-wine-100 relative overflow-hidden">
                        <Image
                          src={wine.image}
                          alt={wine.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {wine.featured && (
                          <div className="absolute top-3 right-3 bg-wine-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                            Uitgelicht
                          </div>
                        )}
                      </div>
                      <div className="p-5">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold text-wine-600 uppercase tracking-wide">
                            {getCategoryLabel(wine.category)}
                          </span>
                          <span className="text-xs text-wine-500">{wine.vintage}</span>
                        </div>
                        <h3 className="font-semibold text-lg text-wine-900 mb-2 group-hover:text-wine-600 transition-colors line-clamp-1">
                          {wine.name}
                        </h3>
                        <p className="text-sm text-wine-600 mb-1">{wine.region}</p>
                        <p className="text-xs text-wine-500 mb-3">{wine.grapeVariety.join(', ')}</p>
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Main component with Suspense boundary
export default function ShopPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🍷</div>
          <p className="text-wine-600">Wijnen laden...</p>
        </div>
      </div>
    }>
      <ShopContent />
    </Suspense>
  );
}