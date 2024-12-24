/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B65B1", // primary: #0B65B1 
        secondary: "#181E4B", // secondary: #181E4B

        button2: "#CEE0EF", // #CEE0EF

        textblue:"#094679" //text color #094679
        
        
        // Add your custom color
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
