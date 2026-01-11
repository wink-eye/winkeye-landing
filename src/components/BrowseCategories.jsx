const BrowseCategories = () => {
  const categories = [
    {
      id: 1,
      name: 'Eyeglasses',
      image: '/images/category-eyeglasses.jpg',
      description: 'Stylish frames for every face'
    },
    {
      id: 2,
      name: 'Sunglasses',
      image: '/images/category-sunglasses.jpg',
      description: 'UV protection & style'
    },
    {
      id: 3,
      name: 'Computer Glasses',
      image: '/images/category-computer.jpg',
      description: 'Blue light filtering'
    },
    {
      id: 4,
      name: 'Reading Glasses',
      image: '/images/category-reading.jpg',
      description: 'Perfect for reading'
    },
    {
      id: 5,
      name: 'Kids Eyewear',
      image: '/images/category-kids.jpg',
      description: 'Durable & fun frames'
    },
    {
      id: 6,
      name: 'Premium Collection',
      image: '/images/category-premium.jpg',
      description: 'Luxury eyewear'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          BROWSE CATEGORIES
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Background Image */}
              <img 
                src={category.image} 
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Category Info */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 z-10">
                <h3 className="text-sm md:text-base font-semibold text-white mb-1 drop-shadow-lg">
                  {category.name}
                </h3>
                <p className="text-xs text-white/90 hidden md:block drop-shadow-md">
                  {category.description}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-persian-blue/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrowseCategories

