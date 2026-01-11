const WhyWinkEye = () => {
  const features = [
    {
      icon: '👁️',
      title: 'Eye-Care Expertise',
      description: 'Professional optometrists with years of experience in eye health and vision correction.'
    },
    {
      icon: '✨',
      title: 'Quality Lenses & Frames',
      description: 'Premium materials and craftsmanship ensuring durability, comfort, and style.'
    },
    {
      icon: '💰',
      title: 'Affordable Pricing',
      description: 'Transparent pricing without compromising on quality. Best value for your investment.'
    },
    {
      icon: '🤝',
      title: 'Customer Trust',
      description: 'Thousands of satisfied customers who trust us with their vision and style needs.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-persian-blue mb-4">
            Why Choose WinkEye?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            We combine expertise, quality, and care to deliver the best eyewear experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-persian-blue/5 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-persian-blue mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyWinkEye

