import React from 'react'
import { Navbar, Hero, Features, Footer, Phone, Support, FAQ } from '../components'

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Phone />
      <Features />
      <div className='text-white text-3xl p-4 bg-gray-950 flex justify-center'>FAQs</div>
      <FAQ />
      <Support />
      <Footer />
    </div>
  )
}

export default Home
