export default function HeroBanner() {
    return (
      <section className="relative bg-indigo-700 text-white">
        {/* Background image optional */}
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('./hero-img0.jpg')" }}></div>
  
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-6">
            Welcome to UNIQUE COMPUTER TAKNIKI <br />
            SHIKSHA SEVA SAMITI
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8">
            Empowering communities through digital education, skill training, and service with a mission of inclusive development.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#donate"
              className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-md hover:bg-indigo-100 transition"
            >
              Donate Now
            </a>
            <a
              href="#about"
              className="bg-indigo-500 text-white border border-white px-6 py-3 rounded-md hover:bg-indigo-600 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    );
  }
  