"use client"; // Required for Next.js client-side components

// Import necessary modules and components
import { useState } from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import "tailwindcss/tailwind.css";

import Link from 'next/link';

// Contact Page Component
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Add your submission logic here (e.g., API call)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="bg-blue-900 text-white py-8 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Contact</h1>
          <p className="mt-2 text-sm md:text-base">
            <Link href="/" className="hover:underline">Home</Link> / Contact
          </p>
        </div>
      </header>

      {/* Main Section */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 justify-center items-center">
          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Get in Touch With Us
            </h2>
            <p className="text-gray-600 mb-6">
              For any inquiries or support, please don&apos;t hesitate to contact us. We&apos;re here to help!
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-sm text-gray-600">
                    123 StillProfit Plaza, New York, NY 10001, USA
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-600">+1 (555) 987-6543</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Working Time</h3>
                  <p className="text-sm text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-sm text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-8 md:mt-0 max-w-md mx-auto w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                aria-label="Your name"
                className="w-full border p-2 rounded"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                aria-label="Your email address"
                className="w-full border p-2 rounded"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                aria-label="Subject"
                className="w-full border p-2 rounded"
                value={formData.subject}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                aria-label="Message"
                className="w-full border p-2 rounded"
                value={formData.message}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <div className="bg-blue-100 py-8">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { title: 'High Quality', description: 'Certified Products' },
            { title: 'Warranty Protection', description: 'Over 2 Years' },
            { title: 'Free Shipping', description: 'Order over $200' },
            { title: '24/7 Support', description: 'Dedicated Support' },
          ].map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <p className="text-sm font-semibold">{feature.title}</p>
              <p className="text-xs text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
