import React from 'react'
import { Link } from 'react-router-dom'
import { FaBackward } from 'react-icons/fa'
import Footer from '../../components/Footer'
import Header from '../components/Header'

function PaymentSuccess() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex justify-center items-center md:px-20 px-5">
        <div className="md:grid grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="md:text-4xl text-red-800">Payment Error!!!</h1>
            <h2 className="my-10">
            We Apologise for the inconvinience caused and appreciate your visit to BookStore...
            </h2>
            <Link to={'/books'} className="flex items-center">
              <FaBackward />
              Explore More Books!!!
            </Link>
          </div>
          <div>
            <img src="https://media.tenor.com/U5hmONvZGo8AAAAM/mmt-error-error.gif" alt="Payment Error" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PaymentSuccess
