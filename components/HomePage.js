"use client";
import React, { useEffect, useRef } from "react";

const Home = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    let scrollAmount = 0;
    const scrollStep = 1; // Amount to scroll each interval
    const scrollInterval = 20; // Speed of scrolling (in milliseconds)

    const scrollHorizontally = () => {
      if (container) {
        scrollAmount += scrollStep;
        container.scrollLeft = scrollAmount;

        // Reset scroll to start once it reaches the end
        if (scrollAmount >= container.scrollWidth / 2) {
          scrollAmount = 0;
        }
      }
    };

    const interval = setInterval(scrollHorizontally, scrollInterval);
    return () => clearInterval(interval);
  }, []);

  const premiumWebsites = Array(10)
    .fill()
    .map((_, index) => (
      <div
        key={index}
        className="border border-black rounded-lg overflow-hidden w-48 h-32 sm:w-64 sm:h-40"
      >
        <img
          src={`https://via.placeholder.com/300x200?text=Image+${index + 1}`}
          alt={`Premium Website ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
    ));

  return (
    <div className="w-full px-4 py-8 bg-white">
      {/* Hero Section */}
      <section
        className="flex flex-col lg:flex-row items-center gap-6 mb-12 h-96"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // Replace with your image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="lg:w-1/2" />
        <div className="text-center lg:text-left m-5 py-10 lg:pl-12 bg-white bg-opacity-50 backdrop-blur-3xl lg:py-10 lg:px-16 sm:h-80 rounded-lg shadow-lg">
          <h3 className="text-lg sm:text-xl font-semibold text-blue-700">
            New Arrival
          </h3>
          <h1 className="text-2xl sm:text-4xl font-bold mt-2">
            Discover Our <br /> New Collection
          </h1>
          <p className="text-sm px-5 sm:text-sm sm:text-base text-gray-600 mt-4 max-w-md mx-auto lg:mx-0">
            Check out our new templates and order now to create beautiful
            websites for your business, portfolio, or online store.
          </p>
          <button className="mt-6 px-14 py-2 bg-blue-700 text-white hover:bg-blue-600 transition">
            Buy Now
          </button>
        </div>
      </section>

      {/* Trending Websites Section */}
      <section className="text-center mb-12">
        <h2 className="text-lg sm:text-2xl font-bold">Trending Websites</h2>
        <p className="text-sm sm:text-base text-gray-500 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {trendingWebsites.map((website, index) => (
            <div
              key={index}
              className="border border-black p-5 shadow-md hover:shadow-lg transition-shadow w-40 h-72 sm:w-64"
            >
              <img
                src={website.image}
                alt={website.name}
                className="w-full h-32 object-cover"
              />
              <div className="p-2">
                <h3 className="text-base sm:text-lg font-semibold">
                  {website.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section className="mb-12">
        <h2 className="text-lg sm:text-2xl font-bold text-center">
          Our Products
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {productData.map((product, index) => (
            <div
              key={index}
              className="border border-black shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 sm:h-72 object-cover"
              />
              <div className="p-3 text-center bg-gray-200">
                <h3 className="text-base sm:text-lg font-semibold">
                  {product.name}
                </h3>
                <p className="text-blue-700 mt-1">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="block mx-auto mt-6 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-600 transition">
          Show More
        </button>
      </section>

      {/* Premium Websites Section */}
      <section className="text-center py-10 bg-gray-400 mb-12">
        <h2 className="text-lg sm:text-2xl font-bold">50+ Premium Websites</h2>
        <p className="text-sm sm:text-base text-gray-500 mt-2">
          Our designer already made a list of premium and professional websites.
        </p>

        {/* Horizontal Scroll Section */}
        <div
          className="mt-8 overflow-x-auto whitespace-nowrap custom-scroll"
          ref={scrollContainerRef}
        >
          <div className="flex gap-4 w-max animate-scroll">
            {premiumWebsites}
            {premiumWebsites} {/* Duplicate for seamless loop */}
          </div>
        </div>
        <button className="mt-6 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-600 transition">
          Explore More
        </button>
      </section>

      {/* Our Works Section */}
      <section className="mb-12">
        <h2 className="text-lg sm:text-2xl font-bold text-center">Our Works</h2>
        <div className="flex flex-wrap gap-4 mt-6">
          {worksData.map((work, index) => (
            <div
              key={index}
              className="border border-black rounded-lg overflow-hidden"
            >
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
  { name: "Blogging Website", price: "$19", image: "path-to-image" },
  { name: "E-Commerce Website", price: "$19", image: "path-to-image" },
  { name: "Portfolio Website", price: "$30", image: "path-to-image" },
  { name: "Marketing Website", price: "$16", image: "path-to-image" },
  { name: "Digital Website", price: "$12", image: "path-to-image" },
  { name: "Wedding Website", price: "$67", image: "path-to-image" },
  { name: "Startup Website", price: "$12", image: "path-to-image" },
  { name: "College Website", price: "$87", image: "path-to-image" },
];

const trendingWebsites = [
  { name: "WordPress Theme Websites", image: "path-to-wordpress-image" },
  { name: "Portfolio Theme Websites", image: "path-to-portfolio-image" },
  { name: "E-Commerce Theme Websites", image: "path-to-ecommerce-image" },
];

const worksData = [
  { image: "path-to-work-image1" },
  { image: "path-to-work-image2" },
  { image: "path-to-work-image3" },
];

export default Home;
