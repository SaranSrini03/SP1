"use client";
import React, { useEffect, useRef } from 'react';

const Home = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    let scrollAmount = 0;
    const scrollStep = 1; // Adjust this for speed
    const scrollInterval = 20; // Milliseconds

    // Scroll function to auto-scroll horizontally
    const scrollHorizontally = () => {
      if (container) {
        scrollAmount += scrollStep; // Increment scroll position
        container.scrollLeft = scrollAmount;

        // Reset scroll position to the start when the end is reached
        if (scrollAmount >= container.scrollWidth / 2) {
          scrollAmount = 0; // Reset scroll amount for seamless scrolling
        }
      }
    };

    // Set interval to scroll every `scrollInterval` ms
    const interval = setInterval(scrollHorizontally, scrollInterval);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  // Create a duplicate array for the infinite scroll effect
  const premiumWebsites = Array(10)
    .fill()
    .map((_, index) => (
      <div
        key={index}
        className="border border-black rounded-lg overflow-hidden w-64 h-40"
      >
        <img
          src={`https://via.placeholder.com/300x200?text=Image+${index + 1}`}
          alt={`Premium Website ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
    ));

  return (
    <div className="w-full mx-auto px-4 py-8 bg-white">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
        {/* Left side: Image */}
        <div className="w-full max-w-sm mx-auto lg:w-1/2">
          <img
            src="https://via.placeholder.com/400x300?text=Laptop+Image"
            alt="Laptop Model"
            className="w-full object-cover rounded-lg border border-black"
          />
        </div>

        {/* Right side: Text */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h3 className="text-lg md:text-xl font-semibold text-blue-700">
            New Arrival
          </h3>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">
            Discover Our New Collection
          </h1>
          <p className="text-sm md:text-base text-gray-600 w-[500px] mt-4">
            Check out our new templates and order now to create beautiful websites
            for your business, portfolio, or online store.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-full w-60 hover:bg-blue-600 transition">
            Buy Now
          </button>
        </div>
      </section>

      {/* Trending Websites Section */}
      <section className="text-center mb-16">
        <h2 className="text-xl md:text-2xl font-bold">
          Trending Websites on Markets
        </h2>
        <p className="text-sm md:text-base text-gray-500 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-6 text-blue-700 font-semibold">
          {trendingWebsites.map((website, index) => (
            <div
              key={index}
              className="border border-black rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow w-64"
            >
              <img
                src={website.image}
                alt={website.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-2 text-center">
                <h3 className="text-lg font-semibold">{website.name}</h3>
              </div>
            </div>
          ))}
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
              className="border border-black rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-blue-700 mt-2">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="block mx-auto mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-600 transition">
          Show More
        </button>
      </section>

      {/* Premium Websites Section */}
      <section className="text-center mb-16">
        <h2 className="text-xl md:text-2xl font-bold">50+ Premium Websites</h2>
        <p className="text-sm md:text-base text-gray-500 mt-2">
          Our designer already made a list of premium and professional websites.
        </p>

        {/* Horizontal Scroll Section */}
        <div className="mt-8 overflow-x-auto" ref={scrollContainerRef}>
          <div className="flex gap-4 w-max">
            {premiumWebsites}
            {premiumWebsites} {/* Duplicate for infinite scroll effect */}
          </div>
        </div>
        <button className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-600 transition">
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
            <div key={index} className="border border-black rounded-lg overflow-hidden">
              <img
                src={work.image}
                alt={`Work ${index + 1}`}
                className="w-full object-cover"
              />
            </div>
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

const trendingWebsites = [
  { name: 'WordPress Theme Websites', image: 'path-to-wordpress-image' },
  { name: 'Portfolio Theme Websites', image: 'path-to-portfolio-image' },
  { name: 'E-Commerce Theme Websites', image: 'path-to-ecommerce-image' },
];

const worksData = [
  { image: 'path-to-work-image1' },
  { image: 'path-to-work-image2' },
  { image: 'path-to-work-image3' },
];

export default Home;
