import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center mb-8 uppercase tracking-wide">
          Contact Us
        </h2>

        <form className="space-y-6">
          {/* Top row of inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label htmlFor="first-name" className="sr-only">
                First Name
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                placeholder="First Name"
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base placeholder-gray-400"
              />
            </div>
            <div>
              <label htmlFor="last-name" className="sr-only">
                Last Name (Optional)
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                placeholder="Last Name (Optional)"
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base placeholder-gray-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="Email Address"
                required
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base placeholder-gray-400"
              />
            </div>
            <div>
              <label htmlFor="mobile" className="sr-only">
                Mobile (Optional)
              </label>
              <input
                type="tel"
                name="mobile"
                id="mobile"
                autoComplete="tel"
                placeholder="Mobile (Optional)"
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base placeholder-gray-400"
              />
            </div>
          </div>

          {/* Message textarea */}
          <div>
            <label htmlFor="message" className="sr-only">
              How Can We Help You
            </label>
            <textarea
              id="message"
              name="message"
              rows={6} // Adjust rows for desired height
              placeholder="How Can We Help You"
              className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base placeholder-gray-400"
            ></textarea>
          </div>

          {/* Submit button */}
          <div>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out block mx-auto"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
