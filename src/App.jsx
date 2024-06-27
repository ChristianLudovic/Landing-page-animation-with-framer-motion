import { useState } from 'react'
import './App.css'
import { NavBar } from './components/basics/navBar'
import { CTA } from './components/basics/CTA'
import { Header } from './components/layouts/header'
import { Sponsors } from './components/layouts/sponsors'
import { Seperator } from './components/basics/seperator'
import { Solution1 } from './components/layouts/solution1'
import { Solution2 } from './components/layouts/solution2'
import { Solution3 } from './components/layouts/solution3'
import { CallToAction } from './components/layouts/callToAction'
import { Testimonials } from './components/layouts/testimonials'
import { FAQ } from './components/layouts/FAQ'
import { CallToAction2 } from './components/layouts/callToAaction2'
import { Footer } from './components/layouts/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Sponsors />
      <Solution1  />
      <Solution2 />
      <Solution3/>
      <CallToAction />
      <Testimonials />
      <FAQ />
      <CallToAction2 />
      <Footer />
    </>
  )
}

export default App
