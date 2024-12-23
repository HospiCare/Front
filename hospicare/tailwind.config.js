/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B65B1", 
        // secondary: #181E4B
        secondary: "#181E4B",
        
        
        // // Add your custom color
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
