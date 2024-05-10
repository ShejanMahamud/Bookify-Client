/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'inter' : 'Inter',
        'briem-hand' : 'Briem Hand'
      },
      colors:{
        "primary": "#4169E1"
      },
      backgroundImage: {
        'banner-1': "linear-gradient(199deg, rgba(0, 0, 0, 0.00) 15.31%, rgba(0, 0, 0, 0.84) 67.37%), url('https://i.ibb.co/Tm41yNg/landing-slider-1.jpg')",
        'banner-2': "linear-gradient(199deg, rgba(0, 0, 0, 0.00) 15.31%, rgba(0, 0, 0, 0.84) 67.37%), url('https://i.ibb.co/CJ08RSR/landing-slider-2.jpg')",
        'banner-3': "linear-gradient(199deg, rgba(0, 0, 0, 0.00) 15.31%, rgba(0, 0, 0, 0.84) 67.37%), url('https://i.ibb.co/Y2pzR20/landing-slider-3.jpg')",
     },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}