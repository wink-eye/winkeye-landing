const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-persian-blue text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">WinkEye</h3>
            <p className="text-white/80 leading-relaxed">
              Premium eyewear and expert eye care. Clear vision, trust, and style for everyone.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-white/80">
              <p>📍 123 Main Street, City, State - 123456</p>
              <p>📞 +91 12345 67890</p>
              <p>✉️ info@winkeye.in</p>
            </div>
          </div>

          {/* Social Media Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <span className="text-xl">📘</span>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <span className="text-xl">📷</span>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <span className="text-xl">🐦</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>&copy; {currentYear} WinkEye. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

