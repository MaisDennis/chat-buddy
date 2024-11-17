/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whatsappGreen: "#25D366", // Primary WhatsApp green
        whatsappTeal: "#128C7E", // Darker green/teal for headers
        whatsappLight: "#DCF8C6", // Light green bubble color
        whatsappDark: "#075E54", // Darkest green for accent
        whatsappGray: "#ECE5DD", // Background/neutral
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-bg.jpg')", // Replace with your image path
      },
    },
  },
  plugins: [],
};
