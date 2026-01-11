const StoreVisit = () => {
  return (
    <section id="store-visit" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-persian-blue mb-4">
              Visit Our Store
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Experience personalized care and expert consultation at our physical location
            </p>
          </div>

          <div className="bg-persian-blue/10 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-semibold text-persian-blue mb-4 flex items-center">
                  <span className="mr-2">📍</span> Address
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  123 Main Street<br />
                  City, State - 123456<br />
                  India
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-persian-blue mb-4 flex items-center">
                  <span className="mr-2">🕐</span> Store Timings
                </h3>
                <div className="text-gray-700 text-lg space-y-2">
                  <p><strong>Monday - Saturday:</strong> 10:00 AM - 8:00 PM</p>
                  <p><strong>Sunday:</strong> 11:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Google Maps Placeholder */}
            <div className="bg-gray-200 rounded-lg h-64 md:h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-lg">Google Maps Embed</p>
                <p className="text-sm">(Replace with actual map embed)</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-persian-blue text-white font-semibold rounded-lg hover:bg-persian-blue/90 transition-colors duration-200 shadow-lg"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StoreVisit

