import React from 'react'
import Navbar from './Navbar'
// import Sidebar from './Sidebar'
import { Outlet } from 'react-router'
import ProductData from './Contextapi'
import Footer from './Footer'


const Home = () => {

  return (
    <>
      <ProductData>
        <Navbar />
        <hr />
      </ProductData>
      <Outlet />
      <Footer/>

    </>
  )
}

export default Home;