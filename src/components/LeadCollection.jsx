import { useState } from 'react'

const LeadCollection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create WhatsApp message
    const message = `Hi! I'm ${formData.name}. I have a query regarding WinkEye. My phone number is ${formData.phone}.`
    const whatsappUrl = `https://wa.me/9163052642?text=${encodeURIComponent(message)}`
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank')
    
    // Reset form and show confirmation
    setFormData({ name: '', phone: '' })
    setSubmitted(true)
    
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="py-20 bg-persian-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-white/90 mb-12">
            We'll help you choose the perfect eyewear
          </p>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">✅</div>
                <p className="text-2xl font-semibold text-persian-blue">
                  Thank you! We'll contact you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-left text-gray-700 font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-persian-blue focus:border-transparent outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-left text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-persian-blue focus:border-transparent outline-none transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-persian-blue text-white font-semibold rounded-lg hover:bg-persian-blue/90 transition-colors duration-200 shadow-lg text-lg"
                >
                  💬 Continue on WhatsApp
                </button>

                <p className="text-sm text-gray-500 mt-4">
                  By submitting, you'll be redirected to WhatsApp to start a conversation with us.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LeadCollection

