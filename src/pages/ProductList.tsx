import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, ChevronDown, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    price: '₹129,999',
    rating: 4.5,
    reviews: 2456,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=300&h=300',
    category: 'Electronics'
  },
  {
    id: 2,
    name: 'Samsung Galaxy Watch 6',
    price: '₹34,999',
    rating: 4.3,
    reviews: 1289,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=300&h=300',
    category: 'Electronics'
  },
  {
    id: 3,
    name: 'Sony WH-1000XM5',
    price: '₹24,999',
    rating: 4.7,
    reviews: 3421,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&q=80&w=300&h=300',
    category: 'Electronics'
  },
  {
    id: 4,
    name: 'PlayStation 5',
    price: '₹49,999',
    rating: 4.8,
    reviews: 5678,
    image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?auto=format&fit=crop&q=80&w=300&h=300',
    category: 'Electronics'
  },
  {
    id: 5,
    name: 'MacBook Pro 16"',
    price: '₹249,999',
    rating: 4.9,
    reviews: 892,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=300&h=300',
    category: 'Electronics'
  },
  {
    id: 6,
    name: 'iPad Air',
    price: '₹54,999',
    rating: 4.6,
    reviews: 1567,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=300&h=300',
    category: 'Electronics'
  }
];

const ProductList = () => {
  const [sortBy, setSortBy] = useState('popularity');
  const [priceRange, setPriceRange] = useState('all');

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6">
          {/* Filters Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="h-5 w-5" />
                <h2 className="text-lg font-semibold">Filters</h2>
              </div>
              
              <div className="border-t py-4">
                <h3 className="font-medium mb-2">Price Range</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="price"
                      value="all"
                      checked={priceRange === 'all'}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="mr-2"
                    />
                    All
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="price"
                      value="under-25000"
                      checked={priceRange === 'under-25000'}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="mr-2"
                    />
                    Under ₹25,000
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="price"
                      value="25000-50000"
                      checked={priceRange === '25000-50000'}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="mr-2"
                    />
                    ₹25,000 - ₹50,000
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="price"
                      value="above-50000"
                      checked={priceRange === 'above-50000'}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="mr-2"
                    />
                    Above ₹50,000
                  </label>
                </div>
              </div>

              <div className="border-t py-4">
                <h3 className="font-medium mb-2">Customer Ratings</h3>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <label key={rating} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      {rating}★ & above
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Electronics</h1>
                <div className="flex items-center gap-4">
                  <span className="text-gray-600">Sort By</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border rounded-md px-2 py-1"
                  >
                    <option value="popularity">Popularity</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Customer Rating</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="font-medium text-gray-800 mb-2">{product.name}</h2>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-green-600 text-white text-sm px-2 py-0.5 rounded flex items-center">
                        {product.rating} <Star className="h-3 w-3 ml-1 fill-current" />
                      </span>
                      <span className="text-gray-500 text-sm">
                        ({product.reviews.toLocaleString()} reviews)
                      </span>
                    </div>
                    <span className="text-xl font-bold">{product.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;