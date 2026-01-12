const Hero = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/9163052642', '_blank')
  }

  const handleVisitStore = () => {
    document.getElementById('store-visit')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="pt-32 pb-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Large Left Card - Hero Section */}
          <div className="lg:col-span-2 relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden group">
            {/* Background Image */}
            <img 
              src="/images/hero-glasses.jpg" 
              alt="Premium eyewear collection" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-persian-blue/40"></div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
              {/* Discount Badge */}
              <div className="mb-4">
                <span className="inline-block px-6 py-3 text-white text-3xl md:text-6xl font-bold rounded-lg shadow-lg">
                  50%
                  <span className="px-2 py-3 text-white text-3xl md:text-2xl font-normal">OFF</span>
                </span>
              </div>

              {/* Tagline */}
              <p className="text-white text-lg md:text-xl mb-6 max-w-md font-medium drop-shadow-md px-4 py-2 rounded-lg">
                Discover quality fashion that reflects your style and makes everyday living more enjoyable
              </p>

              {/* CTA Button */}
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-persian-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl w-fit group/btn"
                aria-label="Explore Products"
              >
                Explore Products
                <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column - Two Cards Stacked */}
          <div className="flex flex-col gap-6">
            {/* Top Right Card - Exclusive Offer */}
            <div className="relative h-[240px] md:h-[290px] rounded-2xl overflow-hidden group cursor-pointer">
              {/* Background Image */}
              <img 
                src="/images/sunglasses.jpg" 
                alt="Sunglasses collection" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Background Overlay */}
              <div className="absolute inset-0 bg-eastern-blue/40"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div className="self-end">
                  <span className="inline-block px-3 py-1 bg-white/90 text-persian-blue text-xs font-semibold rounded">
                    FOR NEW COMERS
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    EXCLUSIVE<br />OFFER
                  </h3>
                </div>
              </div>
            </div>

            {/* Bottom Right Card - New Arrivals */}
            <div className="relative h-[240px] md:h-[290px] rounded-2xl overflow-hidden group cursor-pointer">
              {/* Background Image */}
              <img 
                src="/images/eyeglasses.jpg" 
                alt="New eyeglasses arrivals" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Background Overlay */}
              <div className="absolute inset-0 bg-black/20"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <button className="w-full px-4 py-2 bg-persian-blue text-white font-semibold rounded-lg hover:bg-persian-blue/90 transition-colors text-sm">
                  NEW ARRIVALS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
