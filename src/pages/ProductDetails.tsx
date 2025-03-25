import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Share2, Shield, Package, RefreshCw } from 'lucide-react';

const product = {
  id: 1,
  name: 'iPhone 15 Pro',
  price: '₹129,999',
  rating: 4.5,
  reviews: 2456,
  images: [
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800&h=800',
    'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&q=80&w=800&h=800',
    'https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&q=80&w=800&h=800'
  ],
  description: 'Experience the next level of innovation with the iPhone 15 Pro. Featuring a powerful A17 Pro chip, a stunning Super Retina XDR display, and a professional camera system that takes mobile photography to new heights.',
  highlights: [
    'A17 Pro chip',
    'Super Retina XDR display',
    'Pro camera system',
    'Titanium design',
    '5G capable'
  ],
  specifications: {
    'Display': '6.1-inch Super Retina XDR',
    'Processor': 'A17 Pro chip',
    'Storage': '256GB',
    'Camera': '48MP Main + 12MP Ultra Wide + 12MP Telephoto',
    'Battery': 'Up to 23 hours video playback'
  }
};

const ProductDetails = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Image Gallery */}
            <div>
              <div className="aspect-square rounded-lg overflow-hidden mb-4">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-[#2874f0]' : 'border-transparent'
                    }`}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
              <div className="flex gap-4 mt-6">
                <button className="flex-1 bg-[#ff9f00] text-white py-4 px-6 rounded-lg font-medium flex items-center justify-center gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  ADD TO CART
                </button>
                <button className="flex-1 bg-[#fb641b] text-white py-4 px-6 rounded-lg font-medium flex items-center justify-center gap-2">
                  BUY NOW
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-2xl font-medium text-gray-800 mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-green-600 text-white px-2 py-0.5 rounded flex items-center">
                  {product.rating} <Star className="h-4 w-4 ml-1 fill-current" />
                </span>
                <span className="text-gray-500">
                  {product.reviews.toLocaleString()} ratings
                </span>
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold">{product.price}</span>
                <span className="text-green-600 ml-2">₹20,000 off</span>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-medium mb-2">Description</h2>
                  <p className="text-gray-600">{product.description}</p>
                </div>

                <div>
                  <h2 className="text-lg font-medium mb-2">Highlights</h2>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {product.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-lg font-medium mb-2">Specifications</h2>
                  <div className="border rounded-lg">
                    {Object.entries(product.specifications).map(([key, value], index) => (
                      <div
                        key={key}
                        className={`flex p-3 ${
                          index !== 0 ? 'border-t' : ''
                        }`}
                      >
                        <span className="w-1/3 text-gray-600">{key}</span>
                        <span className="w-2/3">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t mt-8 pt-6">
                <h2 className="text-lg font-medium mb-4">Services</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Shield className="h-5 w-5" />
                    <span>1 Year Warranty</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Package className="h-5 w-5" />
                    <span>Free Delivery</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <RefreshCw className="h-5 w-5" />
                    <span>10 Days Replacement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;