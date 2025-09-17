import React, { useState } from 'react';
import { Search, Shield, Eye, RotateCcw, CreditCard, ChevronDown } from 'lucide-react';

const AutoTrustHomepage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedMileage, setSelectedMileage] = useState('');

  const makes = ['Toyota', 'Honda', 'BMW', 'Mercedes', 'Audi', 'Ford', 'Chevrolet'];
  const years = ['2024', '2023', '2022', '2021', '2020', '2019', '2018'];
  const priceRanges = ['Under $15k', '$15k-$25k', '$25k-$35k', '$35k-$50k', '$50k+'];
  const mileageRanges = ['Under 20k', '20k-50k', '50k-75k', '75k-100k', '100k+'];

  const featuredCars = [
    {
      id: 1,
      image: '/api/placeholder/400/250',
      make: 'BMW',
      model: '3 Series',
      year: 2022,
      price: '$32,995',
      mileage: '15,432',
      certified: true,
      lowMiles: false
    },
    {
      id: 2,
      image: '/api/placeholder/400/250',
      make: 'Porsche',
      model: '911',
      year: 2021,
      price: '$89,995',
      mileage: '8,234',
      certified: true,
      lowMiles: true
    },
    {
      id: 3,
      image: '/api/placeholder/400/250',
      make: 'BMW',
      model: 'X5 M',
      year: 2023,
      price: '$95,995',
      mileage: '5,821',
      certified: true,
      lowMiles: true
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black border-b border-gray-800">
        <div className="container mx-auto px-4">
          {/* Top bar */}
          <div className="flex justify-end py-2 text-sm text-gray-400">
            <div className="space-x-6">
              <a href="#" className="hover:text-white transition-colors">Financing</a>
              <a href="#" className="hover:text-white transition-colors">Customer Support</a>
            </div>
          </div>
          
          {/* Main navigation */}
          <nav className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold">AUTOTRUST</h1>
              <span className="text-xs text-gray-400 uppercase tracking-wider">Used Car Sale</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-gray-300 transition-colors">Inventory</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Sell/Trade</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Financing</a>
              <a href="#" className="hover:text-gray-300 transition-colors">About</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Contact</a>
            </div>
            
            <button className="bg-red-700 hover:bg-red-600 px-6 py-2 rounded-lg transition-colors">
              Get Pre-Approved
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <div className="w-full h-full bg-gradient-to-l from-red-900/30 to-transparent flex items-center justify-center">
            <div className="w-96 h-64 bg-gradient-to-br from-red-600 to-red-800 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute">
              <div className="w-80 h-48 bg-red-700 rounded-lg transform rotate-12 opacity-30"></div>
              <div className="absolute top-8 left-8 w-64 h-32 bg-red-600 rounded-lg transform -rotate-6 opacity-50"></div>
            </div>
          </div>
        </div>
        
        <div className="relative z-20 container mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <div className="text-red-400 text-sm font-semibold mb-4 tracking-wider uppercase">
              Certified & Inspected
            </div>
            <h1 className="text-6xl font-bold leading-tight mb-6">
              Find Your Next<br />
              Ride with<br />
              <span className="text-white">Confidence</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transparent history. Easy financing. Nationwide delivery.
            </p>
            <div className="flex space-x-4">
              <button className="bg-red-700 hover:bg-red-600 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
                Shop Used Cars
              </button>
              <button className="border border-gray-600 hover:border-gray-400 px-8 py-3 rounded-lg font-semibold transition-all hover:bg-gray-900">
                Get Pre-Approved
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex-1 min-w-64">
              <input
                type="text"
                placeholder="Search make, model, year..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
              />
            </div>
            
            <select 
              value={selectedMake}
              onChange={(e) => setSelectedMake(e.target.value)}
              className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500 min-w-32"
            >
              <option value="">Make</option>
              {makes.map(make => <option key={make} value={make}>{make}</option>)}
            </select>
            
            <select 
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500 min-w-36"
            >
              <option value="">Year Range</option>
              {years.map(year => <option key={year} value={year}>{year}</option>)}
            </select>
            
            <select 
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.target.value)}
              className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500 min-w-36"
            >
              <option value="">Price Range</option>
              {priceRanges.map(range => <option key={range} value={range}>{range}</option>)}
            </select>
            
            <select 
              value={selectedMileage}
              onChange={(e) => setSelectedMileage(e.target.value)}
              className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500 min-w-32"
            >
              <option value="">Mileage</option>
              {mileageRanges.map(range => <option key={range} value={range}>{range}</option>)}
            </select>
            
            <button className="bg-red-700 hover:bg-red-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Free Car History Report</h3>
              <p className="text-gray-400 text-sm">Complete vehicle history transparency</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">150-Point Inspection</h3>
              <p className="text-gray-400 text-sm">Thorough quality assurance check</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <RotateCcw className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">7-Day Return</h3>
              <p className="text-gray-400 text-sm">Peace of mind guarantee</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Flexible Financing</h3>
              <p className="text-gray-400 text-sm">Easy approval process</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Deals */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Deals</h2>
            <p className="text-gray-400">Hand-picked vehicles with exceptional value</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <div key={car.id} className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors">
                <div className="relative">
                  <div className="h-48 bg-gray-700 flex items-center justify-center">
                    <div className="text-gray-500">Vehicle Image</div>
                  </div>
                  <div className="absolute top-4 left-4 flex space-x-2">
                    {car.certified && (
                      <span className="bg-green-600 text-xs px-2 py-1 rounded">Certified</span>
                    )}
                    {car.lowMiles && (
                      <span className="bg-blue-600 text-xs px-2 py-1 rounded">Low Miles</span>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {car.year} {car.make} {car.model}
                  </h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-red-400">{car.price}</span>
                    <span className="text-gray-400">{car.mileage} miles</span>
                  </div>
                  <button className="w-full bg-red-700 hover:bg-red-600 py-2 rounded-lg transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutoTrustHomepage;