import Hero from './components/Hero'
import WhatYouLearn from './components/WhatYouLearn'
import ProblemSolution from './components/ProblemSolution'
import EbookPreview from './components/EbookPreview'
import Benefits from './components/Benefits'
import PricingCTA from './components/PricingCTA'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhatYouLearn />
      <ProblemSolution />
      <EbookPreview />
      <Benefits />
      <PricingCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
