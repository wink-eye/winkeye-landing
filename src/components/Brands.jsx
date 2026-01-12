import { useState } from 'react'

const Brands = () => {
  const [imageErrors, setImageErrors] = useState({})

  const brands = [
    {
      name: 'Zeiss',
      logo: '/images/brands/zeiss.png',
      alt: 'Zeiss Logo'
    },
    {
      name: 'Nikon',
      logo: '/images/brands/nikon.png',
      alt: 'Nikon Logo'
    },
    {
      name: 'John Jacobs',
      logo: '/images/brands/john-jacobs.png',
      alt: 'John Jacobs Logo'
    },
    {
      name: 'Ray-Ban',
      logo: '/images/brands/rayban.png',
      alt: 'Ray-Ban Logo'
    },
    {
      name: 'Vogue',
      logo: '/images/brands/vogue.png',
      alt: 'Vogue Logo'
    },
    {
      name: 'Oakley',
      logo: '/images/brands/oakley.png',
      alt: 'Oakley Logo'
    },
    {
      name: 'Tom Ford',
      logo: '/images/brands/tom-ford.png',
      alt: 'Tom Ford Logo'
    },
    {
      name: 'Gucci',
      logo: '/images/brands/gucci.png',
      alt: 'Gucci Logo'
    }
  ]

  const handleImageError = (brandName) => {
    setImageErrors(prev => ({ ...prev, [brandName]: true }))
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted Brands
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We partner with the world's leading eyewear brands to bring you premium quality and style
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex items-center justify-center min-h-[120px]"
            >
              <div className="w-full h-24 flex items-center justify-center">
                {imageErrors[brand.name] ? (
                  <span className="text-lg font-semibold text-persian-blue text-center">
                    {brand.name}
                  </span>
                ) : (
                  <img
                    src={brand.logo}
                    alt={brand.alt}
                    className="max-w-full max-h-full object-contain filter grayscale opacity-70 hover:opacity-100 transition-all duration-300"
                    onError={() => handleImageError(brand.name)}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-sm">
            And many more premium brands available in-store
          </p>
        </div>
      </div>
    </section>
  )
}

export default Brands

