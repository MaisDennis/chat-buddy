import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-whatsappGray text-whatsappDark min-h-screen">
      {/* Hero Section */}
      <section
        className="relative flex flex-col justify-center items-center h-screen bg-gradient-to-b from-whatsappDark to-whatsappTeal text-white"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 z-10">
          Your AI WhatsApp Friend
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-whatsappLight z-10">
          Chat Buddy – Always ready to chat, 24/7!
        </p>
        <a
          href="#cta"
          className="bg-whatsappGreen hover:bg-whatsappLight text-whatsappDark py-3 px-6 rounded-full text-lg font-semibold transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:text-whatsappDark z-10"
        >
          Get Started
        </a>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-whatsappDark">
            Why Choose Chat Buddy?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-whatsappLight p-8 rounded-lg shadow-lg text-whatsappDark">
              <h3 className="text-2xl font-bold mb-4">Available 24/7</h3>
              <p>
                Chat Buddy is always online, providing meaningful conversations
                any time you need.
              </p>
            </div>
            <div className="bg-whatsappLight p-8 rounded-lg shadow-lg text-whatsappDark">
              <h3 className="text-2xl font-bold mb-4">AI-Powered Conversations</h3>
              <p>
                Enjoy intelligent, responsive chats powered by cutting-edge AI
                technology.
              </p>
            </div>
            <div className="bg-whatsappLight p-8 rounded-lg shadow-lg text-whatsappDark">
              <h3 className="text-2xl font-bold mb-4">Personalized Responses</h3>
              <p>
                Chat Buddy learns from your chats to offer thoughtful,
                personalized replies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="cta"
        className="py-20 bg-gradient-to-r from-whatsappTeal to-whatsappGreen text-white"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Chat?</h2>
          <p className="text-lg mb-8">
            Start your journey with Chat Buddy today and make your conversations
            exciting!
          </p>
          <Link
            // href="https://your-stripe-payment-page-link"
            href="#"
            className="bg-white text-whatsappDark py-4 px-8 rounded-full text-lg font-semibold hover:bg-gray-200 transition"
          >
            Get Chat Buddy Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-whatsappDark text-center text-white">
        <p>&copy; 2024 Chat Buddy. All rights reserved.</p>
      </footer>
    </div>
  );
}
