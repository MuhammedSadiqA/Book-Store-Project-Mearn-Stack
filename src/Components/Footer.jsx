import React from 'react'
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn, FaArrowRight } from 'react-icons/fa'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-16">
      {/* Main dark footer */}
      <div className="bg-[#0b1520] text-white px-6 md:px-20 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold tracking-wider mb-4">ABOUT US</h3>
            <p className="text-sm leading-relaxed text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorum
              laudantium earum fugit fugiat eius voluptas aperiam numquam, quos,
              ratione non laborum sed facere ab nesciunt enim, quo necessitatibus
              vero!
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold tracking-wider mb-4">NEWS LETTER</h3>
            <p className="text-sm text-gray-200 mb-4">Stay updated with our latest trends</p>

           <div className='flex items-center'>
             
                <input
                  type="text"
                  placeholder="Email ID"
                  className="flex-1 px-4 py-3 border border-white rounded-l-md outline-none text-white"
                />
             
              <button
                type="submit"
                className="ms-5 px-4 py-4 bg-yellow-400 rounded-r-md hover:opacity-95 flex items-center justify-center"
                aria-label="Subscribe"
              >
                <FaArrowRight />
              </button>
           </div>
          </div>

          {/* Follow */}
          <div>
            <h3 className="text-lg font-semibold tracking-wider mb-4">FOLLOW US</h3>
            <p className="text-sm text-gray-200 mb-4">Let us be social</p>
            <div className="flex items-center gap-3 text-xl text-gray-200">
              <a href="#" aria-label="Instagram" className="hover:text-white"><FaInstagram /></a>
              <a href="#" aria-label="X / Twitter" className="hover:text-white"><FaTwitter /></a>
              <a href="#" aria-label="Facebook" className="hover:text-white"><FaFacebookF /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="bg-black text-white py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-20 flex items-center justify-center text-sm">
          <span>
            Copyright © {year} All rights reserved | This website is made with <span aria-hidden>❤️</span> By Luminar Technolab
          </span>
        </div>
      </div>
    </footer>
  )
}
