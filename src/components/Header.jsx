const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* Top Bar */}
      <div className="border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                WinkEye
              </h1>
            </div>

            {/* Search Bar - Commented out for future use */}
            {/* <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for eyewear..."
                  className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-persian-blue focus:border-transparent outline-none"
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div> */}

            {/* Right Icons - Commented out for future use */}
            {/* 
            <div className="flex items-center gap-2 md:gap-4">
              Mobile Search Button
              <button
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Search"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              Shopping Bag
              <button
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Shopping bag"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </button>

              User Profile
              <button
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="User profile"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>

              Help/Question
              <button
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Help"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
            */}
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-14 overflow-x-auto">
            <div className="flex items-center gap-6 whitespace-nowrap">
              <a href="#new-arrival" className="text-sm font-medium text-gray-700 hover:text-persian-blue transition-colors">
                NEW ARRIVAL
              </a>
              <a href="#most-pick" className="text-sm font-medium text-gray-700 hover:text-persian-blue transition-colors">
                MOST PICK
              </a>
              <a href="#sale" className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors">
                SALE
              </a>
              <a href="#women" className="text-sm font-medium text-gray-700 hover:text-persian-blue transition-colors">
                WOMEN
              </a>
              <a href="#men" className="text-sm font-medium text-gray-700 hover:text-persian-blue transition-colors">
                MEN
              </a>
              <a href="#eyeglasses" className="text-sm font-medium text-gray-700 hover:text-persian-blue transition-colors">
                EYE GLASSES
              </a>
              <a href="#sunglasses" className="text-sm font-medium text-gray-700 hover:text-persian-blue transition-colors">
                SUN GLASS
              </a>
              <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-persian-blue transition-colors">
                CONTACT US
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

