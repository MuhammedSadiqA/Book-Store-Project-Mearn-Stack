import React, { useState } from 'react'

import { FaBackward, FaCamera, FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaX } from 'react-icons/fa6'
import Footer from '../../components/Footer'
import Header from '../components/Header'

function View() {

  const [modalStatus,setModalStatus]=useState(false)
  return (
    <>
    <Header/>
    <div className="md:m-10 m-5">
      <div className="shadow border p-5 border-gray-200">
        <div className="md:grid grid-cols-4 gap-x-10">
          {/* image column */}
          <div className="col-span-1">
            <img className='w-full' src="https://m.media-amazon.com/images/I/617lxveUjYL.jpg" alt="book" />
          </div>
          {/* book details column */}
<div className="col-span-3 relative pb-20">

  {/* Eye icon - TOP RIGHT */}
  <button
    onClick={() => setModalStatus(true)}
    className="text-gray-500 absolute top-0 right-0 text-xl"
  >
    <FaEye />
  </button>

  <h1 className="text-2xl font-black">Book Title</h1>
  <p className="my-3 text-blue-700">- Author</p>

  <div className="md:grid grid-cols-3 gap-5 my-10">
    <p className="font-bold">Publisher :</p>
    <p className="font-bold">Language :</p>
    <p className="font-bold">No. of Pages :</p>
    <p className="font-bold">Original Price :</p>
    <p className="font-bold">ISBN :</p>
    <p className="font-bold">Category :</p>
    <p className="font-bold">Seller :</p>
  </div>

  <p className="font-bold text-lg">Abstract</p>

  {/* BOTTOM RIGHT BUTTONS */}
  <div className="absolute bottom-0 right-0 flex gap-3">
    <Link
      to="/books"
      className="bg-blue-700 text-white flex items-center px-3 py-1 rounded"
    >
      <FaBackward className="me-2" /> Back
    </Link>

    <Link
      to="/books"
      className="bg-green-700 text-white flex items-center px-3 py-1 rounded"
    >
      Buy $ Price
    </Link>
  </div>

</div>

        </div>
      </div>
    </div>
    {/* modal */}
    {modalStatus&&
      <div onClick={()=>{setModalStatus(false)}} className="relative z-10">
      <div className="bg-gray-500/75 fixed inset-0">
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white rounded md:w-250 w-100">
          {/* modal title */}
          <div className="bg-black text-white p-3 flex justify-between items-center">
            <h3>Books Images</h3>
            <FaX onClick={()=>{setModalStatus(false)}}/>
          </div>
          {/* modal body */}
          <div className="relative p-5">
            <p className='text-blue-600 flex items-center'> <FaCamera className='me-2'/> Camera clicks of book in the hand of the seller </p>
            <div className="md:flex flex-wrap my-4">
              <img className='md:w-75 w-25 md:me-2 mb-3 md:mb-0' src="https://m.media-amazon.com/images/I/617lxveUjYL.jpg" alt="books" />
              <img className='md:w-75 w-25 md:me-2 mb-3 md:mb-0' src="https://m.media-amazon.com/images/I/617lxveUjYL.jpg" alt="books" />
              <img className='md:w-75 w-25 md:me-2 mb-3 md:mb-0' src="https://m.media-amazon.com/images/I/617lxveUjYL.jpg" alt="books" />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>}
    <Footer/>
    </>

  )
}

export default View