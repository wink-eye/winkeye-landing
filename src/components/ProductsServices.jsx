const ProductsServices = () => {
  const products = [
    {
      image: '/images/eyeglasses.jpg',
      title: 'Eyeglasses',
      description: 'Stylish frames for every face shape and prescription needs.'
    },
    {
      image: '/images/sunglasses.jpg',
      title: 'Sunglasses',
      description: 'Protect your eyes with UV-blocking, fashionable sunglasses.'
    },
    {
      image: '/images/computer-glasses.jpg',
      title: 'Computer Glasses',
      description: 'Reduce eye strain from digital screens with blue light filtering.'
    },
    {
      image: '/images/glasses-collection.jpg',
      title: 'Eye Testing',
      description: 'Comprehensive eye examinations by certified optometrists.'
    }
  ]

  return (
    <section className="py-20 bg-persian-blue/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-persian-blue mb-4">
            Products & Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need for clear vision and eye health
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-persian-blue mb-3 text-center">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsServices

