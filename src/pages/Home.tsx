import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Percent, Clock, Siren as Fire, Gift } from 'lucide-react';

const categories = [
  { name: 'Electronics', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=200&h=200' },
  { name: 'Fashion', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=200&h=200' },
  { name: 'Home', image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&q=80&w=200&h=200' },
  { name: 'Beauty', image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&q=80&w=200&h=200' },
  { name: 'Appliances', image: 'https://images.unsplash.com/photo-1578643463396-0997cb5328c1?auto=format&fit=crop&q=80&w=200&h=200' },
  { name: 'Toys', image: 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?auto=format&fit=crop&q=80&w=200&h=200' }
];

const banners = [
  'https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1607082350899-7e105aa886ae?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&q=80&w=2070'
];

const deals = [
  {
    id: 1,
    title: 'Smartphone X',
    price: '₹29,999',
    discount: '40% off',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    id: 2,
    title: 'Smart Watch Pro',
    price: '₹12,999',
    discount: '25% off',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    id: 3,
    title: 'Wireless Earbuds',
    price: '₹4,999',
    discount: '50% off',
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    id: 4,
    title: 'Gaming Console',
    price: '₹39,999',
    discount: '20% off',
    image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?auto=format&fit=crop&q=80&w=300&h=300'
  }
];

const newArrivals = [
  {
    id: 5,
    title: 'MacBook Air M2',
    price: '₹114,999',
    discount: '15% off',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    id: 6,
    title: 'iPad Pro 2025',
    price: '₹79,999',
    discount: '10% off',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    id: 7,
    title: 'Sony Camera Alpha',
    price: '₹89,999',
    discount: '30% off',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    id: 8,
    title: 'Gaming Laptop',
    price: '₹129,999',
    discount: '25% off',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=300&h=300'
  }
];

const trending = [
  {
    id: 9,
    title: 'Smart TV 65"',
    price: '₹89,999',
    discount: '35% off',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    id: 10,
    title: 'Robot Vacuum',
    price: '₹34,999',
    discount: '20% off',
    image: 'https://images.unsplash.com/photo-1589006880562-58b425f1c701?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    id: 11,
    title: 'Coffee Maker',
    price: '₹24,999',
    discount: '40% off',
    image: 'https://images.unsplash.com/photo-1520970014086-2208d157c9e2?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    id: 12,
    title: 'Air Purifier',
    price: '₹19,999',
    discount: '30% off',
    image: 'https://images.unsplash.com/photo-1585157603905-6c0081d9c496?auto=format&fit=crop&q=80&w=300&h=300'
  }
];

const ProductSection = ({ title, icon: Icon, products, bgColor }) => (
  <div className={`${bgColor} rounded-lg shadow-sm p-6 mb-8`}>
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-2">
        <Icon className="h-6 w-6" />
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>
      <Link
        to="/products"
        className="text-[#2874f0] hover:underline flex items-center"
      >
        View All
        <ChevronRight className="h-4 w-4 ml-1" />
      </Link>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link
          key={product.id}
          to={`/product/${product.id}`}
          className="group"
        >
          <div className="bg-white p-4 rounded-lg transition-shadow duration-200 hover:shadow-md">
            <div className="aspect-square mb-4 overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <h3 className="text-gray-800 font-medium mb-2 group-hover:text-[#2874f0]">
              {product.title}
            </h3>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-gray-900">{product.price}</span>
              <span className="text-green-600 text-sm font-medium">{product.discount}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

const Home = () => {
  const [currentBanner, setCurrentBanner] = React.useState(0);

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  React.useEffect(() => {
    const timer = setInterval(nextBanner, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Categories */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center space-x-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/products?category=${category.name.toLowerCase()}`}
                className="flex flex-col items-center group"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <span className="text-sm font-medium text-gray-800 group-hover:text-[#2874f0]">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Banner Carousel */}
      <div className="relative">
        <div className="overflow-hidden h-[400px]">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${
                index === currentBanner ? 'translate-x-0' : 'translate-x-full'
              }`}
              style={{ transform: `translateX(${(index - currentBanner) * 100}%)` }}
            >
              <img
                src={banner}
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <button
          onClick={prevBanner}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextBanner}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Product Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProductSection
          title="Deals of the Day"
          icon={Percent}
          products={deals}
          bgColor="bg-white"
        />
        
        <ProductSection
          title="New Arrivals"
          icon={Clock}
          products={newArrivals}
          bgColor="bg-white"
        />

        <ProductSection
          title="Trending Now"
          icon={Fire}
          products={trending}
          bgColor="bg-white"
        />

        {/* Featured Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 text-white">
            <h2 className="text-2xl font-bold mb-4">Fashion Week Sale</h2>
            <p className="mb-4">Up to 70% off on premium brands</p>
            <Link to="/products?category=fashion" className="inline-block bg-white text-purple-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100">
              Shop Now
            </Link>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg p-6 text-white">
            <h2 className="text-2xl font-bold mb-4">Electronics Fest</h2>
            <p className="mb-4">Latest gadgets at best prices</p>
            <Link to="/products?category=electronics" className="inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;