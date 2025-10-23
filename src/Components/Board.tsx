"use client";
import React from "react";

const App: React.FC = () => {
  // Placeholder URLs for the images, themed green/white
  const visionPlaceholder = "/vision.svg";
  const missionPlaceholder = "/mission.svg";

  return (
    <div className="p-4 sm:p-8 min-h-screen bg-gray-50 flex justify-center items-center">
      {/* Main container: 
        - Default (mobile): flex-col (stacks vertically)
        - Medium screens (md): flex-row (horizontal layout)
        - Content is centered on mobile and starts at the top of the row on desktop 
      */}
      <div className="flex flex-col md:flex-row justify-center items-start w-full max-w-6xl">
        {/* === Vision Section === */}
        {/* Full width on mobile, 1/3 on desktop. Added padding/margin for spacing. */}
        <div className="flex flex-col sm:flex-row w-full md:w-1/3 p-4 bg-white rounded-xl shadow-lg mb-6 md:mb-0">
          {/* Text Container: order-2 on mobile, order-1 on desktop/tablet to put text first */}
          <div className="flex flex-col justify-center items-start order-2 sm:order-1">
            <h1 className="uppercase my-2 font-extrabold text-2xl text-gray-800">
              Vision
            </h1>
            <p className="text-sm sm:text-base text-gray-600 font-medium block leading-relaxed">
              We are committed to satisfying our clients through customized best
              solutions for unresolved issues in the private security sector,
              while fashioning career opportunities for ex-military personnel
              and similar caliber personalities with prime benefits.
            </p>
          </div>

          {/* Image Container: order-1 on mobile, order-2 on desktop/tablet to put image second */}
          <img
            className="w-24 h-24 mx-auto sm:ml-4 sm:mr-0 mb-4 sm:mb-0 shrink-0 order-1 sm:order-2"
            src={visionPlaceholder}
            alt="Vision Icon"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://placehold.co/100x100/38A169/ffffff?text=V";
            }}
          />
        </div>

        {/* === Separator/Divider Section === */}
        {/* Hidden on mobile (default) and appears as a vertical divider on md screens and up */}
        <div className="hidden md:flex md:w-1/6 justify-center items-center py-4">
          <div className="w-2 h-40 bg-gray-300 rounded-full shadow-inner"></div>
        </div>

        {/* Optional: A subtle horizontal line for visual separation on mobile, if needed */}
        <div className="w-2/3 mx-auto h-px bg-gray-200 block md:hidden mb-6"></div>

        {/* === Mission Section === */}
        {/* Full width on mobile, 1/3 on desktop. Added padding/margin for spacing. */}
        <div className="flex flex-col sm:flex-row w-full md:w-1/3 p-4 bg-white rounded-xl shadow-lg">
          {/* Image Container: order-1 (left) on all screens */}
          <img
            className="w-24 h-24 mx-auto sm:mr-4 sm:ml-0 mb-4 sm:mb-0 shrink-0 order-1"
            src={missionPlaceholder}
            alt="Mission Icon"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://placehold.co/100x100/4C51BF/ffffff?text=M";
            }}
          />

          {/* Text Container: order-2 (right) on all screens */}
          <div className="flex flex-col items-start order-2">
            <h1 className="uppercase my-2 font-extrabold text-2xl text-gray-800">
              Mission
            </h1>
            <p className="text-sm sm:text-base text-gray-600 font-medium block leading-relaxed">
              Exploit highly disciplined and trained personnel to deliver a
              premium security service through systematic administration,
              ensuring professionalism and client satisfaction at every step.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
