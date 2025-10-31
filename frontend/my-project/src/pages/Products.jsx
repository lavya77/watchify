import React from "react";

export default function Products() {
  return (
    <section className="min-h-screen bg-gray-950 py-20 px-6 md:px-16">
      <h1 className="text-5xl font-extrabold text-center mb-16 text-indigo-300 tracking-wide">
        Explore Our Latest Tech
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Product 1 */}
        <div className="bg-black  rounded-3xl overflow-hidden shadow-lg hover:shadow-indigo-700/50 hover:-translate-y-2 transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=800&q=80"
            alt="Headphones"
            className="w-full h-64 object-cover"
          />
          <div className="p-6 text-white">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-300">
              Galaxy Headphones
            </h2>
            <p className="text-gray-300 mb-4">
              Crystal-clear sound with deep bass and 40hr battery life.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-indigo-400">$199</span>
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-full transition-all">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="bg-black  rounded-3xl overflow-hidden shadow-lg hover:shadow-indigo-700/50 hover:-translate-y-2 transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&w=800&q=80"
            alt="Smartwatch"
            className="w-full h-64 object-cover"
          />
          <div className="p-6 text-white">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-300">
              Aurora Smartwatch
            </h2>
            <p className="text-gray-300 mb-4">
              Track health, steps, and sleep in an ultra-sleek design.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-indigo-400">$249</span>
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-full transition-all">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="bg-black  rounded-3xl overflow-hidden shadow-lg hover:shadow-indigo-700/50 hover:-translate-y-2 transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1606813902917-0e7c48b4a5b0?auto=format&fit=crop&w=800&q=80"
            alt="Speaker"
            className="w-full h-64 object-cover"
          />
          <div className="p-6 text-white">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-300">
              Lunar Speakers
            </h2>
            <p className="text-gray-300 mb-4">
              360° sound with stunning LED glow — for every vibe.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-indigo-400">$149</span>
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-full transition-all">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Product 4 */}
        <div className="bg-black  rounded-3xl overflow-hidden shadow-lg hover:shadow-indigo-700/50 hover:-translate-y-2 transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1585395023066-c49e1fe1cbe0?auto=format&fit=crop&w=800&q=80"
            alt="Earbuds"
            className="w-full h-64 object-cover"
          />
          <div className="p-6 text-white">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-300">
              Nebula Earbuds
            </h2>
            <p className="text-gray-300 mb-4">
              Noise-cancelling, lightweight, and pocket-sized power.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-indigo-400">$129</span>
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-full transition-all">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Product 5 */}
        <div className="bg-black  rounded-3xl overflow-hidden shadow-lg hover:shadow-indigo-700/50 hover:-translate-y-2 transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1581101767110-e9b85a0f0b7e?auto=format&fit=crop&w=800&q=80"
            alt="Charger"
            className="w-full h-64 object-cover"
          />
          <div className="p-6 text-white">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-300">
              Cosmic Charger
            </h2>
            <p className="text-gray-300 mb-4">
              Fast wireless charging with magnetic alignment.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-indigo-400">$89</span>
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-full transition-all">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Product 6 */}
        <div className="bg-black rounded-3xl overflow-hidden shadow-lg hover:shadow-indigo-700/50 hover:-translate-y-2 transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1580894732444-5c43b8f3c4b7?auto=format&fit=crop&w=800&q=80"
            alt="Laptop Stand"
            className="w-full h-64 object-cover"
          />
          <div className="p-6 text-white">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-300">
              Eclipse Laptop Stand
            </h2>
            <p className="text-gray-300 mb-4">
              Aluminium build with cooling airflow design.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-indigo-400">$59</span>
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-full transition-all">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="bg-black  rounded-3xl overflow-hidden shadow-lg hover:shadow-indigo-700/50 hover:-translate-y-2 transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=800&q=80"
            alt="Headphones"
            className="w-full h-64 object-cover"
          />
          <div className="p-6 text-white">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-300">
              Galaxy Headphones
            </h2>
            <p className="text-gray-300 mb-4">
              Crystal-clear sound with deep bass and 40hr battery life.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-indigo-400">$199</span>
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-full transition-all">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="bg-black  rounded-3xl overflow-hidden shadow-lg hover:shadow-indigo-700/50 hover:-translate-y-2 transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&w=800&q=80"
            alt="Smartwatch"
            className="w-full h-64 object-cover"
          />
          <div className="p-6 text-white">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-300">
              Aurora Smartwatch
            </h2>
            <p className="text-gray-300 mb-4">
              Track health, steps, and sleep in an ultra-sleek design.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-indigo-400">$249</span>
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-full transition-all">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="bg-black  rounded-3xl overflow-hidden shadow-lg hover:shadow-indigo-700/50 hover:-translate-y-2 transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1606813902917-0e7c48b4a5b0?auto=format&fit=crop&w=800&q=80"
            alt="Speaker"
            className="w-full h-64 object-cover"
          />
          <div className="p-6 text-white">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-300">
              Lunar Speakers
            </h2>
            <p className="text-gray-300 mb-4">
              360° sound with stunning LED glow — for every vibe.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-indigo-400">$149</span>
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-full transition-all">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Product 4 */}
        <div className="bg-black  rounded-3xl overflow-hidden shadow-lg hover:shadow-indigo-700/50 hover:-translate-y-2 transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1585395023066-c49e1fe1cbe0?auto=format&fit=crop&w=800&q=80"
            alt="Earbuds"
            className="w-full h-64 object-cover"
          />
          <div className="p-6 text-white">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-300">
              Nebula Earbuds
            </h2>
            <p className="text-gray-300 mb-4">
              Noise-cancelling, lightweight, and pocket-sized power.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-indigo-400">$129</span>
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-full transition-all">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Product 5 */}
        <div className="bg-black  rounded-3xl overflow-hidden shadow-lg hover:shadow-indigo-700/50 hover:-translate-y-2 transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1581101767110-e9b85a0f0b7e?auto=format&fit=crop&w=800&q=80"
            alt="Charger"
            className="w-full h-64 object-cover"
          />
          <div className="p-6 text-white">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-300">
              Cosmic Charger
            </h2>
            <p className="text-gray-300 mb-4">
              Fast wireless charging with magnetic alignment.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-indigo-400">$89</span>
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-full transition-all">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Product 6 */}
        <div className="bg-black rounded-3xl overflow-hidden shadow-lg hover:shadow-indigo-700/50 hover:-translate-y-2 transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1580894732444-5c43b8f3c4b7?auto=format&fit=crop&w=800&q=80"
            alt="Laptop Stand"
            className="w-full h-64 object-cover"
          />
          <div className="p-6 text-white">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-300">
              Eclipse Laptop Stand
            </h2>
            <p className="text-gray-300 mb-4">
              Aluminium build with cooling airflow design.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-indigo-400">$59</span>
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-full transition-all">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
}
