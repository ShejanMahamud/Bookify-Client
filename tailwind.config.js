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
        'briem-hand' : 'Briem Hand',
        'mukti' : 'Mukti'
      },
      colors:{
        "primary": "#4169E1"
      },
      backgroundImage: {
        'banner-1': "linear-gradient(199deg, rgba(0, 0, 0, 0.00) 15.31%, rgba(0, 0, 0, 0.84) 67.37%), url('https://i.ibb.co/Tm41yNg/landing-slider-1.jpg')",
        'banner-2': "linear-gradient(199deg, rgba(0, 0, 0, 0.00) 15.31%, rgba(0, 0, 0, 0.84) 67.37%), url('https://i.ibb.co/CJ08RSR/landing-slider-2.jpg')",
        'banner-3': "linear-gradient(199deg, rgba(0, 0, 0, 0.00) 15.31%, rgba(0, 0, 0, 0.84) 67.37%), url('https://i.ibb.co/Y2pzR20/landing-slider-3.jpg')",
        'banner-4': "linear-gradient(199deg, rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0.50) 50%), url('https://i.ibb.co/XCCLtXQ/yuz-ayub-rs-Bc-Eur-M-7-M-unsplash.jpg')",
        'banner-5': "linear-gradient(199deg, rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0.50) 50%), url('https://i.ibb.co/hLV3xjX/alexandra-fuller-4-RNLz-Jz-EMMs-unsplash.jpg')",
        'banner-6': "linear-gradient(199deg, rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0.50) 50%), url('https://i.ibb.co/KbrDnJg/hans-jurgen-weinhardt-FZ5nx86t-P2-U-unsplash.jpg')",
        'banner-7': "linear-gradient(199deg, rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0.50) 50%), url('https://i.ibb.co/5MxCMB2/images-q-tbn-ANd9-Gc-Q-lgn-Xh0-Ar-L3-Wdg-Eq-JR9-K17it-w8o-I6-Pwjr-Wn5qn-Ma2g-s.jpg')",
        'banner-8': "linear-gradient(199deg, rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0.50) 50%), url('https://i.ibb.co/dj363gs/The-best-history-books.jpg')",
        'banner-9': "linear-gradient(199deg, rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0.50) 50%), url('https://i.ibb.co/2Ym6KQC/1687810670-1687810670-goodreads-misc.png')",
     },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}