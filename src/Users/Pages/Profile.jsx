import { FaCircleCheck } from 'react-icons/fa6'
import Footer from '../../components/Footer'
import Header from '../components/Header'
import { useState } from 'react'
import Edit from '../Components/Edit'
import SellBook from '../Components/SellBook'
import BookStatus from '../Components/BookStatus'
import Purchase from '../Components/Purchase'


function Profile() {
  const [tab,setTab]=useState(1)
  return (
    <>
      <Header />

      {/* black div */}
      <div style={{ height: '200px' }} className="bg-black"></div>

      {/* profile image */}
      <div style={{ width: '230px', height: '230px', borderRadius: '50%', marginLeft: '70px', marginTop: "-130px" }}
        className="bg-white p-3">
        <img style={{ width: '200px', height: '230px', borderRadius: '50%' }}
          src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" />
      </div>
      {/* name with edit block */}
      <div className='flex justify-between items-center  my-5'>
        <h1 className='text-2xl font-bold flex items-center mx-5 md:mx-20'>
          Username <FaCircleCheck className='ms-5 text-blue-400' />
        </h1>
        <Edit/>
      </div>
      <p className='text-justify px-5 my-5 md:px-20'>This user is someone who enjoys exploring new ideas and learning at their own pace. They like spending time understanding how things work, whether it’s tech, design, or everyday life. With a calm approach, they focus on growing step by step.
        They value simplicity and good experiences. Whether browsing a platform or trying out a new feature, they appreciate things that are smooth, clear, and easy to use. Curiosity is what drives them, and they enjoy discovering tools that make life a little better.</p>

      <div className='md:px-40'>
        {/* Tabs */}
        <div className="flex justify-center items-center my-8 font-medium text-lg">
          <p onClick={()=>setTab(1)} className={tab==1?'cursor-pointer text-blue-600 border-gray-200 border-t border-l border-r p-4':' border-gray-200 border-b p-4 cursor-pointer'}>Sell Books</p>
          <p onClick={()=>setTab(2)} className={tab==2?'cursor-pointer text-blue-600 border-gray-200 border-t border-l border-r p-4':' border-gray-200 border-b p-4 cursor-pointer'}>Book Status</p>
          <p onClick={()=>setTab(3)} className={tab==3?'cursor-pointer text-blue-600 border-gray-200 border-t border-l border-r p-4':' border-gray-200 border-b p-4 cursor-pointer'}>Purchase History</p>
        </div>
        {/* Contents */}
        {
          tab==1 &&
            <SellBook/>
        }
        {
          tab==2 &&
          <BookStatus/>
        }
        {
          tab==3 &&
          <Purchase/>
        }
      </div>

      <Footer />
    </>
  )
}

export default Profile
