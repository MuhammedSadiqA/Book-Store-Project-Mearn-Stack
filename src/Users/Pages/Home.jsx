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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            <div className="shadow rounded p-3">
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

            {/* repeat the card */}
            <div className="shadow rounded p-3">
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

            <div className="shadow rounded p-3">
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

            <div className="shadow rounded p-3">
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


        </section>
        {/* author */}
        <section className='md:px-40 p-5 my-5 md:grid grid-cols-2 items-center gap-10'>
          <div className="text-center">
            <h1 className='text-3xl font-bold'>NEW ARRIVALS</h1>
            <h2 className='text-2xl'>Explore Our Latest Collection</h2>
            <p className='text-justify mt-9'>Johnathan Reed is a contemporary storyteller known for blending emotional depth with simple, powerful language. His works often explore family, faith, and the quiet moments that shape a person’s life. With a warm writing style and a traditional outlook, he brings timeless values into modern narratives. When he’s not writing, he spends his time reading, traveling, and connecting with young readers who dream big.</p>
            <p className='text-justify mt-5' >Strong writing skills are built on clarity, consistency, and the courage to express ideas with honesty. Great writers understand the power of simple language, choosing words that connect rather than confuse. Whether crafting stories, explaining concepts, or sharing emotions, good writing blends structure with creativity. It grows through reading, observing life closely, and practicing daily. With time, these habits shape a writer who can communicate with confidence, touch hearts, and carry their voice across generations.</p>
          </div>
          {/* Author image */}
          <div className='p-5 flex justify-center items-center'>
            <img className='w-full' src="https://lh3.googleusercontent.com/qZJi3ZT3nt8AWhLDFaWWu-qUtfg1QOrAPXoZtb_kxebFnoh-vDNdQIm0M9Y-xYZtPpx2E6Q4YmPZprY0nswYZFMlYAMZYU8qGNg=w974" alt="author image loading / err " />
          </div>
        </section>

        {/* testimony */}

        <section className='md:px-40 p-5 my-5 flex flex-col justify-center items-center'>
          <h1 className='text-3xl font-bold'>Testimonials</h1>
          <h2 className='text-2xl'>See what Others Are Saying</h2>
          <div className="my-5 flex justify-center items-center flex-col">
          {/* user Image */}
          <img width={'200px'} height={'200px'} style={{borderRadius:'50%'}} src="https://images.ctfassets.net/xjcz23wx147q/iegram9XLv7h3GemB5vUR/0345811de2da23fafc79bd00b8e5f1c6/Max_Rehkopf_200x200.jpeg" alt="User image " />
           <p className='text-justify mt-4'><span className='font-bold me-2' >User feedback plays a crucial role in </span>shaping better experiences, helping creators understand what truly works and what needs improvement. It offers real, unfiltered insight into how people think, feel, and interact with a product or service. When handled with openness and humility, feedback becomes a powerful tool for growth, guiding updates, refining features, and strengthening trust. It’s not just criticism — it’s a conversation that pushes ideas forward and builds a stronger connection with the community.</p>
          </div>
         
        </section>
      </div>
      <Footer />


    </>
  )
}

export default Home