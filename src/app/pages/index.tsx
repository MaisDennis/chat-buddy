import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-gray-900 to-gray-800">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Meet Your AI Friend</h1>
        <p className="text-lg md:text-2xl mb-8 text-gray-300">
          Chat Buddy – Your AI-powered WhatsApp friend available 24/7
        </p>
        <a
          href="#cta"
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full text-lg font-semibold transition"
        >
          Get Started
        </a>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Chat Buddy?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Available 24/7</h3>
              <p className="text-gray-300">
                Chat Buddy is always available to talk, offering personalized conversations anytime.
              </p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">AI-Powered Conversations</h3>
              <p className="text-gray-300">
                Experience intelligent, meaningful conversations powered by state-of-the-art AI.
              </p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Personalized Responses</h3>
              <p className="text-gray-300">
                Chat Buddy learns from your chats to provide you with personalized, thoughtful replies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Your Chat Buddy?</h2>
          <p className="text-lg mb-8 text-white">Start chatting today by signing up for our premium service!</p>
          <Link href="https://your-stripe-payment-page-link" passHref>
            <a className="bg-white text-gray-900 py-4 px-8 rounded-full text-lg font-semibold hover:bg-gray-100 transition">
              Get Chat Buddy Now
            </a>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-center text-gray-400">
        <p>&copy; 2024 Chat Buddy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
