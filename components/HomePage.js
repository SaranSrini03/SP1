"use client";
import React, { useEffect, useRef } from "react";
import "../app/globals.css"
import "tailwindcss/tailwind.css";

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
        className="border border-black rounded-lg overflow-hidden w-48 h-32 sm:w-64 sm:h-40 relative group"
      >
        <img
          src={`https://via.placeholder.com/300x200?text=Image+${index + 1}`}
          alt={`Premium Website ${index + 1}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <h3 className="text-white font-semibold text-lg">View Project</h3>
        </div>
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
              className="group border border-black p-5 shadow-md hover:shadow-lg transition-shadow w-46 h-72 sm:w-64 relative overflow-hidden"
            >
              <img
                src={website.image}
                alt={website.name}
                className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-white font-semibold text-lg">
                  View Project
                </h3>
              </div>
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
              className="group relative overflow-hidden border border-black shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 sm:h-72 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-white font-semibold text-lg">
                  View Project
                </h3>
              </div>
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
      <section className="text-center py-10 bg-gray-200 mb-12">
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
  <div className="flex flex-col sm:flex-row justify-center mt-6 ">
    {/* Left Side: Works 1, 2, 3, and 4 */}
    <div className="flex flex-col gap-4 sm:w-1/2 ">
      {/* Row 1: Work 1 and Work 2 */}
      <div className="flex gap-4">
        <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-40 h-28 sm:h-36">
          <img
            src={worksData[0].image}
            alt="Work 1"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <h3 className="text-white font-semibold text-lg">View Project</h3>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-48 h-28 sm:h-36">
          <img
            src={worksData[1].image}
            alt="Work 2"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <h3 className="text-white font-semibold text-lg">View Project</h3>
          </div>
        </div>
      </div>

      {/* Row 2: Work 3 and Work 4 */}
      <div className="flex gap-4">
        <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-48 h-28 sm:h-36">
          <img
            src={worksData[2].image}
            alt="Work 3"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <h3 className="text-white font-semibold text-lg">View Project</h3>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-40 h-28 sm:h-36">
          <img
            src={worksData[3].image}
            alt="Work 4"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <h3 className="text-white font-semibold text-lg">View Project</h3>
          </div>
        </div>
      </div>
    </div>

    {/* Center Work: Work 5 */}
    <div className="flex justify-center items-center sm:ml-10 mr-10 mb-4 w-full sm:mb-0 sm:w-1/2">
      <div className="group relative overflow-hidden rounded-lg  shadow-md hover:shadow-lg transition-shadow duration-300  sm:m-0 mt-10 mb-10 w-full h-80 sm:w-58 sm:h-48">
        <img
          src={worksData[4].image}
          alt="Work 5"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <h3 className="text-white font-semibold text-lg">View Project</h3>
        </div>
      </div>
    </div>

    {/* Right Side: Works 6, 7, 8, and 9 */}
    <div className="flex flex-col gap-4 sm:w-1/2">
      {/* Row 1: Work 6 and Work 7 */}
      <div className="flex gap-4">
        <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-48 h-28 sm:h-36">
          <img
            src={worksData[5].image}
            alt="Work 6"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <h3 className="text-white font-semibold text-lg">View Project</h3>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-40 h-28 sm:h-36">
          <img
            src={worksData[6].image}
            alt="Work 7"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <h3 className="text-white font-semibold text-lg">View Project</h3>
          </div>
        </div>
      </div>

      {/* Row 2: Work 8 and Work 9 */}
      <div className="flex gap-4">
        <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-40 h-28 sm:h-36">
          <img
            src={worksData[7].image}
            alt="Work 8"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <h3 className="text-white font-semibold text-lg">View Project</h3>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-48 h-28 sm:h-36">
          <img
            src={worksData[8].image}
            alt="Work 9"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <h3 className="text-white font-semibold text-lg">View Project</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;

// Sample data for testing
const trendingWebsites = [
  { name: "Website 1", image: "https://via.placeholder.com/300x200" },
  { name: "Website 2", image: "https://via.placeholder.com/300x200" },
  { name: "Website 3", image: "https://via.placeholder.com/300x200" },
  { name: "Website 4", image: "https://via.placeholder.com/300x200" },
  { name: "Website 5", image: "https://via.placeholder.com/300x200" },
  { name: "Website 6", image: "https://via.placeholder.com/300x200" },
];

const productData = [
  {
    name: "Product 1",
    price: "$99",
    image: "https://via.placeholder.com/300x200",
  },
  {
    name: "Product 2",
    price: "$199",
    image: "https://via.placeholder.com/300x200",
  },
  {
    name: "Product 3",
    price: "$299",
    image: "https://via.placeholder.com/300x200",
  },
  {
    name: "Product 4",
    price: "$399",
    image: "https://via.placeholder.com/300x200",
  },
  {
    name: "Product 5",
    price: "$399",
    image: "https://via.placeholder.com/300x200",
  },
  {
    name: "Product 6",
    price: "$399",
    image: "https://via.placeholder.com/300x200",
  },
  {
    name: "Product 7",
    price: "$399",
    image: "https://via.placeholder.com/300x200",
  },
  {
    name: "Product 8",
    price: "$399",
    image: "https://via.placeholder.com/300x200",
  },
];

const worksData = [
  { image: "https://via.placeholder.com/300x200?text=Work+2" },
  { image: "https://via.placeholder.com/300x200?text=Work+2" },
  { image: "https://via.placeholder.com/300x200?text=Work+3" },
  { image: "https://via.placeholder.com/300x200?text=Work+4" },
  { image: "https://via.placeholder.com/300x200?text=Work+5" },
  { image: "https://via.placeholder.com/300x200?text=Work+6" },
  { image: "https://via.placeholder.com/300x200?text=Work+7" },
  { image: "https://via.placeholder.com/300x200?text=Work+8" },
  { image: "https://via.placeholder.com/300x200?text=Work+9" },
];