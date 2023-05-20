import React from 'react'
import Navbar from '../components/NavBar'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import ('./Home.css')

const Home = () => {
  return (
    <div>
        <Navbar />
        <Carousel />
        <Footer />
    </div>
  )
}

export default Home
