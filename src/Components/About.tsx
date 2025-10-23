"use client";
import React from "react";

const App: React.FC = () => {
  // Using a themed placeholder image since the local file path "/shield.png" is not available
  const shieldPlaceholder = "/shield.png";

  return (
    <div className="p-4 sm:p-8 min-h-screen bg-gray-50 flex justify-center items-center">
      {/* Main Container: Stacks vertically (flex-col) by default, switches to horizontal (md:flex-row) on medium screens and up */}
      <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-7xl mx-auto">
        {/* === Image Section === 
            - Order 1 on mobile (top), Order 3 on desktop (right)
            - Image is small (w-32 h-32) on mobile and larger on desktop
        */}
        <div className="flex w-full md:w-1/3 justify-center items-center order-1 md:order-3 mb-6 md:mb-0">
          <img
            // Responsive sizing: w-32 h-32 on mobile, larger on desktop
            className="w-32 h-32 md:w-[250px] md:h-[300px] object-contain rounded-xl shadow-2xl transition-all duration-300"
            src={shieldPlaceholder}
            alt="About Us Image"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://placehold.co/128x128/1D4ED8/ffffff?text=SHIELD";
            }}
          />
        </div>

        {/* === Divider Section === 
            - Hidden on mobile (default) and appears as a vertical divider only on md screens and up
        */}
        <div className="hidden md:flex md:w-1/6 justify-center items-center order-2">
          <div className="w-2 h-[300px] bg-gray-300 rounded-full shadow-inner"></div>
        </div>

        {/* === Text Section === 
            - Order 2 on mobile (bottom), Order 1 on desktop (left)
            - Full width on mobile, 1/3 width on desktop
        */}
        <div className="flex flex-col w-full md:w-1/3 p-6 order-2 md:order-1 bg-white rounded-xl shadow-xl">
          <h1 className="uppercase my-4 font-extrabold text-3xl sm:text-4xl text-gray-900 border-b-2 border-indigo-500 pb-2">
            About us
          </h1>
          <p className="text-base text-gray-700 font-normal leading-relaxed">
            <strong className="text-indigo-600">NADSEC Agencies</strong> is a
            newly established private-owned security company, a one-stop
            solution for all security-related concerns for business entities,
            including security guards, business security services, and more, to
            meet each client's unique needs. We are incorporated as a limited
            liability company and our competent team comes from a strong
            military background and various fields in the corporate business
            world. We understand the key factor to success lies in the
            integration and quality of our excellent customer service; thus, we
            are committed to serve as a trusted, responsible, and respected
            business partner to our clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
