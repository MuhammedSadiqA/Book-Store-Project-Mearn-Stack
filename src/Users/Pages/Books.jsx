import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaBars } from 'react-icons/fa'

function Books() {
  const [showCategoryList,setShowCategoryList]=useState(false)
   
  

  return (
    <>
    <Header></Header>
    {/* login-book page */}
    <>
    <div className="flex flex-col justify-center items-center my-5">
      <h1 className="text-3xl font-bold my-5">All Books</h1>
      {/* search box */}
      <div className="flex my-5">
        <input type="text" className="border p-2 border-gray-400 w-100" placeholder='Search by Title'/>
        <button className='bg-black p-2 text-white'>Search</button>
      </div>
      {/* book & filter row */}

      
    </div>
    <div className="md:grid grid:cols-4 md:px-20 p-5 mb-10">
        {/* filter */}
        <div className="col-span-1">
          {/* filter title */}
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold">Filter</h1>
            <button onClick={()=>setShowCategoryList(!ShowCategoryList)} className='text-2xl md:hidden'><FaBars/></button>
          </div>
          {/* filter option */}
          <div className={showCategoryList?"block":"md:block hidden"}>
            {/* All books */}
            <div className="mt-3">
              <input type="radio" name="filter" id="flterNames" />
              <label htmlFor="filterName" className='ms-2'>All</label>
            </div>
            {/* user catergories //duplicate */}
            <div className="mt-3">
              <input type="radio" name="filter" id="flterNames" />
              <label htmlFor="filterName" className='ms-2'>Category Name</label>
            </div>
          </div>
        </div>
        {/* Book card div */}
        <div className="col-span-3">
          <div className="md:grid grid-cols-4 mt-5 md:mt-0">
            <div className="shadow rounded p-3 mx-4 mb-5 md:">
              <img
                width="300"
                height="300"
                src="https://m.media-amazon.com/images/I/61WVp4iq69L._AC_UF1000,1000_QL80_.jpg"
                alt="Book"
              />
              <div className='flex justify-center items-center flex-col mt-4'>
                <h3 className='text-blue-600 font-bold text-lg'>Author</h3>
                <h4>$ price</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
    {/* No login-book page */}
    <Footer/>
    </>
  )
}

export default Books