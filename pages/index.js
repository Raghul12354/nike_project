import React from 'react'
import Store from '../components/app/store'
import Cart from '../components/cart/cart'
import Footer from '../components/Footer'
import Highlights from '../components/Highlights'
import Nav from '../components/Nav'
import Navbar from '../components/Navbar'
import Sales from '../components/Sales'
import Stories from '../components/Stories'
import TopSales from '../components/TopSales'
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

const index = () => {
  return (
    <div>
      <Provider store={Store}>
        <Toaster position='top-center' reverseOrder={false} />
        <div className='overflow-hidden'>
          <Nav />
          <Cart />
          {/* Hero Section */}
          <Navbar />
          {/* Hero Section */}
          <Sales />
          <Highlights />
          <TopSales />
          <Stories />
          <Footer />
        </div>
      </Provider>
    </div>
  )
}

export default index
