import React from 'react'
import Navbar from './Components/Navbar'
import Carousel from './Components/Carousel'
import About from './Components/About'
import Events from './Components/Events'
import Footer from './Components/Footer'


function App() {
  return (
    <div>
      <Navbar />
      <Carousel/>
      <About/>
      <Events/>
      <Footer/>
    </div>
  )
}

export default App