'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getWineBySlug, mockWines } from '@/lib/mock-wines';
import { getDeliveryMessage } from '@/lib/delivery-date';

export default function ProductPage({ params }: { params: { slug: string } }) {
  const wine = getWineBySlug(params.slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!wine) {
    notFound();
  }

  const relatedWines = mockWines
    .filter(w => w.category === wine.category && w.id !== wine.id)
    .slice(0, 4);

  const deliveryMessage = getDeliveryMessage();

  const handleAddToCart = () => {
    // In real app, this would add to cart context/state
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 12) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-wine-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-sm text-wine-600">
            <Link href="/" className="hover:text-wine-800">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/shop" className="hover:text-wine-800">Shop</Link>
            <span className="mx-2">/</span>
            <Link href={`/shop?category=${wine.category}`} className="hover:text-wine-800 capitalize">
              {wine.category}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-wine-900 font-medium">{wine.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div>
            <div className="aspect-[3/4] bg-gradient-to-br from-wine-50 to-wine-100 rounded-2xl overflow-hidden mb-4 relative">
              <Image
                src={wine.images[selectedImage]}
                alt={wine.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            {wine.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {wine.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === idx
                        ? 'border-wine-600 ring-2 ring-wine-200'
                        : 'border-wine-200 hover:border-wine-400'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${wine.name} view ${idx + 1}`}
                      width={100}
                      height={100}
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block px-3 py-1 bg-wine-100 text-wine-700 text-sm font-semibold rounded-full uppercase">
                {wine.category}
              </span>
              {wine.featured && (
                <span className="inline-block px-3 py-1 bg-wine-600 text-white text-sm font-semibold rounded-full">
                  Featured
                </span>
              )}
            </div>

            <h1 className="text-4xl font-bold text-wine-900 mb-2">
              {wine.name}
            </h1>
            
            <p className="text-xl text-wine-600 mb-4">{wine.vintage}</p>

            <div className="flex items-center gap-4 mb-6">
              <p className="text-4xl font-bold text-wine-900">
                €{wine.price.toFixed(2)}
              </p>
              <div className="flex items-center gap-1">
                {wine.inStock ? (
                  <>
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-green-600 font-medium">In Stock</span>
                  </>
                ) : (
                  <>
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full"></span>
                    <span className="text-red-600 font-medium">Out of Stock</span>
                  </>
                )}
              </div>
            </div>

            <p className="text-wine-700 text-lg leading-relaxed mb-6">
              {wine.description}
            </p>

            {/* Delivery Info */}
            <div className="bg-wine-50 border border-wine-200 rounded-xl p-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="text-2xl">🚚</div>
                <div>
                  <p className="font-semibold text-wine-900 mb-1">
                    {deliveryMessage}
                  </p>
                  <p className="text-sm text-wine-600">
                    Order by Tuesday 6 PM for Wednesday delivery
                  </p>
                </div>
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4 mb-8">
              <div>
                <label className="block text-sm font-medium text-wine-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="w-10 h-10 rounded-lg border-2 border-wine-300 text-wine-700 font-bold hover:bg-wine-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    −
                  </button>
                  <span className="text-2xl font-semibold text-wine-900 w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= 12}
                    className="w-10 h-10 rounded-lg border-2 border-wine-300 text-wine-700 font-bold hover:bg-wine-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    +
                  </button>
                  <span className="text-sm text-wine-600 ml-2">
                    (Max 12 bottles)
                  </span>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={!wine.inStock}
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all ${
                  addedToCart
                    ? 'bg-green-600 text-white'
                    : 'bg-wine-600 hover:bg-wine-700 text-white disabled:bg-gray-300 disabled:cursor-not-allowed'
                }`}
              >
                {addedToCart ? '✓ Added to Cart!' : wine.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>

              <Link
                href="/cart"
                className="block w-full py-4 rounded-xl border-2 border-wine-600 text-wine-600 hover:bg-wine-50 font-semibold text-lg text-center transition-colors"
              >
                View Cart
              </Link>
            </div>

            {/* Wine Details */}
            <div className="border-t border-wine-200 pt-6 space-y-4">
              <div>
                <h3 className="font-semibold text-wine-900 mb-2">Region</h3>
                <p className="text-wine-700">{wine.region}</p>
              </div>

              <div>
                <h3 className="font-semibold text-wine-900 mb-2">Grape Variety</h3>
                <p className="text-wine-700">{wine.grapeVariety.join(', ')}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-wine-900 mb-2">Alcohol</h3>
                  <p className="text-wine-700">{wine.alcoholPercentage}%</p>
                </div>
                <div>
                  <h3 className="font-semibold text-wine-900 mb-2">Volume</h3>
                  <p className="text-wine-700">{wine.volume}ml</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-wine-900 mb-2">Serving Temperature</h3>
                <p className="text-wine-700">{wine.servingTemperature}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Details */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-wine-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-wine-900 mb-4">
              Tasting Notes
            </h2>
            <p className="text-wine-700 leading-relaxed">
              {wine.tastingNotes}
            </p>
          </div>

          <div className="bg-wine-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-wine-900 mb-4">
              Food Pairing
            </h2>
            <p className="text-wine-700 leading-relaxed">
              {wine.foodPairing}
            </p>
          </div>
        </div>

        {/* Related Wines */}
        {relatedWines.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-wine-900 mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedWines.map((relatedWine) => (
                <Link
                  key={relatedWine.id}
                  href={`/product/${relatedWine.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                    <div className="aspect-[3/4] bg-gradient-to-br from-wine-50 to-wine-100 relative overflow-hidden">
                      <Image
                        src={relatedWine.image}
                        alt={relatedWine.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-wine-900 mb-1 group-hover:text-wine-600 line-clamp-1">
                        {relatedWine.name}
                      </h3>
                      <p className="text-sm text-wine-600 mb-2">{relatedWine.vintage}</p>
                      <p className="text-wine-900 font-bold">€{relatedWine.price.toFixed(2)}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
