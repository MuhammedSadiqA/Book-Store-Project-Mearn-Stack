import React from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FaSearch } from 'react-icons/fa'
function Home() {
  return (
    <>
      <Header />
      <div>
        {/* landing Part - search */}
        <div style={{ height: '600px' }} className='flex justify-center items-center flex-col bg-[url(/bg-img.jpg)] bg-cover bg-center text-white'>
          <div style={{ height: '600px', backgroundColor: 'rgba(0,0,0,0.4)' }}
            className='w-full flex justify-center items-center flex-col'>
            <h1 className='text-5xl font-bold mb-2'>wonderfull Gifts</h1>
            <p>Gift Your family and friends a book</p>
            {/* search */}
            <div className='mt-9 flex items-center'>
              <input type="text" className='bg-white rounded-3xl text-black w-100 placeholder-grey-500 p-2' placeholder='Search Books Here' />
              <button className='text-gray-500 ms-4 '><FaSearch /></button>
            </div>
          </div>
        </div>
        {/* New arroval */}
        <section className='md:px-40 p-5 my-5 flex flex-col justify-center items-center'>
          <h1 className='text-3xl font-bold'>NEW ARRIVALS</h1>
          <h2 className='text-2xl'>Explore Our Latest Collection</h2>

          {/* books row & col */}
        </section>
        {/* author */}
        {/* testimony */}
      </div>
      <Footer />


    </>
  )
}

export default Home