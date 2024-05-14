import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="border-t border-gray-300 border-opacity-50">
      <div className="container px-6 py-12 mx-auto">
        <div className="md:flex md:-mx-3 md:items-center md:justify-between">
          <h1 className="text-xl font-semibold tracking-tight md:mx-3 xl:text-2xl">Subscribe to our newsletter for updates.</h1>

          <div className="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">
            <button className="bg-primary px-4 py-2 rounded-md text-white text-sm flex items-center gap-3">
              <span>Subscribe Now</span>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </button>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <p className="font-semibold">Quick Links</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a href="#" className="transition-colors duration-300 hover:underline hover:text-primary">Home</a>
              <a href="#" className="transition-colors duration-300 hover:underline hover:text-primary">Catalog</a>
              <a href="#" className="transition-colors duration-300 hover:underline hover:text-primary">My Account</a>
            </div>
          </div>

          <div>
            <p className="font-semibold">Categories</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a href="#" className="transition-colors duration-300 hover:underline hover:text-primary">Fiction</a>
              <a href="#" className="transition-colors duration-300 hover:underline hover:text-primary">Non-fiction</a>
              <a href="#" className="transition-colors duration-300 hover:underline hover:text-primary">Science</a>
            </div>
          </div>

          <div>
            <p className="font-semibold">Services</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a href="#" className="transition-colors duration-300 hover:underline hover:text-primary">Borrowing</a>
              <a href="#" className="transition-colors duration-300 hover:underline hover:text-primary">Renewals</a>
              <a href="#" className="transition-colors duration-300 hover:underline hover:text-primary">Returns</a>
            </div>
          </div>

          <div>
            <p className="font-semibold">Contact Us</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a href="#" className="transition-colors duration-300 hover:underline hover:text-primary">support@bookify.com</a>
              <a href="#" className="transition-colors duration-300 hover:underline hover:text-primary">+1 (123) 456-7890</a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

        <div className="flex flex-col items-center justify-between sm:flex-row">
          <div onClick={() => navigate('/')} className="flex items-center lg:gap-3 md:gap-3 gap-2 cursor-pointer">
            <img src="https://gist.githubusercontent.com/ShejanMahamud/55027157d9ed288e0c490b8f59878179/raw/b6f06773886c4314ccd39286a026afc0549f431e/bookify.svg" alt="logo.svg" className="lg:w-10 md:w-10 w-8" />
            <span className="lg:text-2xl md:text-2xl text-xl font-medium font-briem-hand">Bookify</span>
          </div>

          <p className="mt-4 text-sm text-gray-500 sm:mt-0">© 2024 Bookify. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
