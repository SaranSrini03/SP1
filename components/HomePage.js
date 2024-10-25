import React from 'react';

const Home = () => {
  return (
    <div className="w-full mx-auto px-4 py-8 bg-white">
      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 mb-16">
        <div className="text-center lg:text-left lg:max-w-md">
          <h3 className="text-lg md:text-xl font-semibold text-blue-500">
            New Arrival
          </h3>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">
            Discover Our New Collection
          </h1>
          <p className="text-sm md:text-base text-gray-600 mt-4">
            Check out our new templates and order now to make your own websites
            for your business, portfolio, etc.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Buy Now
          </button>
        </div>
        <div className="w-full max-w-sm mx-auto">
          <img
            src="path-to-hero-image"
            alt="Website Illustration"
            className="w-full object-cover"
          />
        </div>
      </section>

      {/* Trending Websites */}
      <section className="text-center mb-16">
        <h2 className="text-xl md:text-2xl font-bold">
          Trending Websites on Markets
        </h2>
        <p className="text-sm md:text-base text-gray-500 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex flex-col sm:flex-row justify-around mt-6 text-blue-500 font-semibold gap-4">
          <div>WordPress Theme Websites</div>
          <div>Portfolio Theme Websites</div>
          <div>E-Commerce Theme Websites</div>
        </div>
      </section>

      {/* Products Section */}
      <section className="mb-16">
        <h2 className="text-xl md:text-2xl font-bold text-center">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          {productData.map((product, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-blue-500 mt-2">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="block mx-auto mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Show More
        </button>
      </section>

      {/* Premium Websites Section */}
      <section className="text-center mb-16">
        <h2 className="text-xl md:text-2xl font-bold">
          50+ Premium Websites
        </h2>
        <p className="text-sm md:text-base text-gray-500 mt-2">
          Our designer already made a list of premium and professional websites.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Explore More
        </button>
      </section>

      {/* Our Works Section */}
      <section className="mb-16">
        <h2 className="text-xl md:text-2xl font-bold text-center">
          Our Works
        </h2>
        <div className="flex flex-wrap gap-4 mt-8">
          {worksData.map((work, index) => (
            <img
              key={index}
              src={work.image}
              alt={`Work ${index + 1}`}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 object-cover rounded-lg"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

// Example product data
const productData = [
  { name: 'Blogging Website', price: '$19', image: 'path-to-image' },
  { name: 'E-Commerce Website', price: '$19', image: 'path-to-image' },
  { name: 'Portfolio Website', price: '$30', image: 'path-to-image' },
  { name: 'Marketing Website', price: '$16', image: 'path-to-image' },
  { name: 'Digital Website', price: '$12', image: 'path-to-image' },
  { name: 'Wedding Website', price: '$67', image: 'path-to-image' },
  { name: 'Startup Website', price: '$12', image: 'path-to-image' },
  { name: 'College Website', price: '$87', image: 'path-to-image' },
];

// Example works data
const worksData = [
  { image: 'path-to-work-image1' },
  { image: 'path-to-work-image2' },
  { image: 'path-to-work-image3' },
];

export default Home;
