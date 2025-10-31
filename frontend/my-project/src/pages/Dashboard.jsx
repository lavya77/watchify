import React from "react";
function Dashboard() {
  return (
    <>
     <body className="bg-black">
<section class="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-black via-indigo-950 to-black text-white text-center px-6">
 <h1 class="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-[0_0_20px_rgba(99,102,241,0.8)]">
  Energize your space with <span class="text-indigo-300">Latest Tech</span>
</h1>

  
</section>
<main>
   <div className="grid grid-cols-1 gap-8 p-10">
  <div className="flex w-full h-full border-2 border-indigo-500 bg-transparent rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
    <div className="w-1/2 bg-black/40 flex items-center justify-center">
      <img src="https://via.placeholder.com/200" alt="Headphones" className="w-40 h-40 object-cover rounded-xl" />
    </div>
    <div className="w-1/2 p-4 flex flex-col justify-center text-white">
      <h3 className="text-2xl font-semibold mb-2 text-indigo-300">Wireless Headphones</h3>
      <p className="text-indigo-200 text-sm mb-2">Experience crystal-clear sound and deep bass with noise cancellation.</p>
      <span className="text-lg font-bold text-indigo-400">₹3,499</span>
    </div>
  </div>

  <div className="flex w-full h-full border-2 border-indigo-500 bg-transparent rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
    <div className="w-1/2 bg-black/40 flex items-center justify-center">
      <img src="https://via.placeholder.com/200" alt="Speaker" className="w-40 h-40 object-cover rounded-xl" />
    </div>
    <div className="w-1/2 p-4 flex flex-col justify-center text-white">
      <h3 className="text-2xl font-semibold mb-2 text-indigo-300">Bluetooth Speaker</h3>
      <p className="text-indigo-200 text-sm mb-2">Portable design with long-lasting battery and immersive sound.</p>
      <span className="text-lg font-bold text-indigo-400">₹2,199</span>
    </div>
  </div>

  <div className="flex w-full h-full border-2 border-indigo-500 bg-transparent rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
    <div className="w-1/2 bg-black/40 flex items-center justify-center">
      <img src="https://via.placeholder.com/200" alt="Smartwatch" className="w-40 h-40 object-cover rounded-xl" />
    </div>
    <div className="w-1/2 p-4 flex flex-col justify-center text-white">
      <h3 className="text-2xl font-semibold mb-2 text-indigo-300">Smartwatch</h3>
      <p className="text-indigo-200 text-sm mb-2">Track your fitness, heart rate, and notifications with ease.</p>
      <span className="text-lg font-bold text-indigo-400">₹4,999</span>
    </div>
  </div>

  <div className="flex w-full h-full border-2 border-indigo-500 bg-transparent rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
    <div className="w-1/2 bg-black/40 flex items-center justify-center">
      <img src="https://via.placeholder.com/200" alt="Keyboard" className="w-40 h-40 object-cover rounded-xl" />
    </div>
    <div className="w-1/2 p-4 flex flex-col justify-center text-white">
      <h3 className="text-2xl font-semibold mb-2 text-indigo-300">Mechanical Keyboard</h3>
      <p className="text-indigo-200 text-sm mb-2">RGB backlit keys and smooth typing experience for gamers.</p>
      <span className="text-lg font-bold text-indigo-400">₹3,299</span>
    </div>
  </div>

 
</div>

<section class="bg-gradient-to-b from-indigo-800 via-indigo-850 to-black text-white text-center py-20">

  <h2 class="text-3xl font-semibold mb-6">Want to explore more?</h2>
  <button class="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-indigo-400/50 transition">
    See More Products
  </button>

  <div class="mt-20">
    <h3 class="text-2xl font-semibold mb-4">Contact Us</h3>
    <p class="text-sm text-indigo-200 max-w-2xl mx-auto mb-6">
      We’d love to hear from you! Reach out for queries, collaborations, or support.
    </p>
    <div class="flex flex-col md:flex-row justify-center gap-10 text-sm text-indigo-300">
      <div>
        <h4 class="font-semibold text-white mb-1">Email</h4>
        <p>support@yourstore.com</p>
      </div>
      <div>
        <h4 class="font-semibold text-white mb-1">Phone</h4>
        <p>+91 98765 43210</p>
      </div>
      <div>
        <h4 class="font-semibold text-white mb-1">Address</h4>
        <p>Mumbai, India</p>
      </div>
    </div>
  </div>

 
  <div class="mt-20">
    <h3 class="text-2xl font-semibold mb-4">Thank You for Visiting </h3>
    <p class="text-sm text-indigo-200 mb-4">
      We’re passionate about bringing you the best tech experiences. Stay tuned for upcoming launches!
    </p>
    <p class="text-xs text-indigo-400">© 2025 YourStore. All rights reserved.</p>
  </div>
</section>


</main>
     </body>
    </>
  );
}

export default Dashboard;
