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
            <h1 className="md:text-4xl text-blue-800">Congratulation!!!</h1>
            <h2 className="my-10">
              Thank you for purchasing with BookStore. Hope you have a good time with us...
            </h2>
            <Link to={'/books'} className="flex items-center">
              <FaBackward />
              Explore More Books!!!
            </Link>
          </div>
           <div>
            <img src="https://i.pinimg.com/originals/30/7f/2c/307f2c75edf56e65b1517978ced5f081.gif" alt="Payment Error" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PaymentSuccess
