import Header from './components/Header'
import Hero from './components/Hero'
import BrowseCategories from './components/BrowseCategories'
import WhyWinkEye from './components/WhyWinkEye'
import ProductsServices from './components/ProductsServices'
import StoreVisit from './components/StoreVisit'
import LeadCollection from './components/LeadCollection'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <BrowseCategories />
      <WhyWinkEye />
      <ProductsServices />
      <StoreVisit />
      <LeadCollection />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App

