import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Footer from '../../Components/Footer'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'


function Books() {
  const [showCategoryList, setShowCategoryList] = useState(false)
  const [token, setToken] = useState("")
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const usertoken = sessionStorage.getItem("token")
      setToken(usertoken)
    }
  }, [])



  return (
    <>
      <Header />
      {/* login-book page */}
      {
        token ?
          <>
            <div className="flex flex-col justify-center items-center my-5">
              <h1 className="text-3xl font-bold my-5">All Books</h1>
              {/* search box */}
              <div className="flex my-5">
                <input type="text" className="border p-2 border-gray-400 w-100" placeholder='Search by Title' />
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
                  <button onClick={() => setShowCategoryList(!ShowCategoryList)} className='text-2xl md:hidden'><FaBars /></button>
                </div>
                {/* filter option */}
                <div className={showCategoryList ? "block" : "md:block hidden"}>
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
          :
          <div className="w-full h-screen flex justify-center items-center flex-col">
            {/* No login-book page */}
            <img src="https://cdn.dribbble.com/userupload/20814923/file/original-dbe45af022c549442d550d89d5fa39de.gif" alt="lock screen" />
            <p className='text-xl font-bold my-15'>Please <Link to={'/login'} className='underline text-blue-500'>Login</Link>
            to Explore More!!!
             </p>
          </div>
      }
      
      <Footer />
    </>
  )
}

export default Books