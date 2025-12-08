import React, { useEffect, useState } from 'react'
import { FaAddressCard, FaBars, FaFacebookSquare, FaInstagramSquare, FaPowerOff, FaUser } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";



function Header() {
  const [dp,setDp]=useState("")
  const [token,setToken]=useState("")
  const [dropDown,setDropDown]=useState(false)

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      const userToken=sessionStorage.getItem("token")
      setToken(userToken)
      const user=JSON.parse(sessionStorage.getItem("user"))
      setDp(user.picture)
    }
  },[token])



  const [listStatus,setListStatus]=useState(false)
  const menuBtnClick=()=>{
    setListStatus(!listStatus)
  }

  return (
    <>
      {/* Upper part */}
      <div className="grid grid-cols-3 p-3">
        {/* logo with title */}
        <div className="flex items-center">
          <img width={'70px'} height={'70px'} src="https://t4.ftcdn.net/jpg/05/07/19/83/360_F_507198344_PPZmZ0ShfTohJBPUv7Dh0ATswkJrPjtr.jpg" alt="Logo" />
        </div>
        <h1 className="text-2xl font-bold ms-1 md:hidden">
          BookStore
        </h1>
        {/* Title */}
        <div className='md:flex justify-center items-center hidden'>
          <h1 className='text-3xl font-bold'>BookStore</h1>
        </div>
        {/* Login */}
        <div className='md:flex justify-end items-center hidden'>
          <FaFacebookSquare />
          <FaInstagramSquare className='mx-2' />
          <FaXTwitter />

          {
            !token?
             <Link to={'/login'} className='border ms-4 border rounded py-1 px-2 hover:bg-black hover:text-white flex items-center'> <FaUserCircle className='me-2' />
            Login</Link>
            :
            <div className="relative inline-block text-left ms-2">
              <button onClick={()=>setDropDown(!dropDown)} className='w-full bg-white px-3 py-2 shadow hover:bg-gray-50'>
              <img width={'40px'} height={'40px'} style={{BorderRadius:'50%'}} src="https://gimgs2.nohat.cc/thumb/f/640/youtube-video-photography-user-profile-avatar-youtube--5006114642984960.jpg" alt="profile picture" />
              </button>
              {
                dropDown&&
                <div className="absolute right-0 z-10 mt-2 w-40 rounded-md bg-white shadow-lg origin-top-right ring-1 ring-black/5 
              focus:outline-hidden">
                <Link to={'/user/profile'} className='block px-4 py-2 text-sm text-gray-700 flex items-center'>
                  <FaAddressCard className='me-2'/> Profile</Link>
                <button className='px-4 py-2 text-sm text-gray-700 flex items-center'><FaPowerOff className='me-2'/>Logout</button>
              </div>
              }
            </div>
          }
         
        </div>
      </div>
      {/* Header lower part */}
      <nav className='w-full p-2 bg-black text-white md:flex justify-center items-center'>
        {/* div- menu bar & login btn in mobile screen */}
        <div className='flex justify-between items-center text-2xl md:hidden'>
          {/* menu bar btn */}
          <button onClick={menuBtnClick} ><FaBars /></button>
          {/* login Link */}
          {
            !token?
             <Link to={'/login'} className='border ms-4 border rounded py-1 px-2 hover:bg-black hover:text-white flex items-center'> <FaUserCircle className='me-2' />
            Login</Link>
            :
            <div className="relative inline-block text-left ms-2">
              <button onClick={()=>setDropDown(!dropDown)} className='w-full bg-white px-3 py-2 shadow hover:bg-gray-50'>
              <img width={'40px'} height={'40px'} style={{BorderRadius:'50%'}} src="https://gimgs2.nohat.cc/thumb/f/640/youtube-video-photography-user-profile-avatar-youtube--5006114642984960.jpg" alt="profile picture" />
              </button>
              {
                dropDown&&
                <div className="absolute right-0 z-10 mt-2 w-40 rounded-md bg-white shadow-lg origin-top-right ring-1 ring-black/5 
              focus:outline-hidden">
                <Link to={'/user/profile'} className='block px-4 py-2 text-sm text-gray-700 flex items-center'>
                  <FaAddressCard className='me-2'/> Profile</Link>
                <button className='px-4 py-2 text-sm text-gray-700 flex items-center'><FaPowerOff className='me-2'/>Logout</button>
              </div>
              }
            </div>
          }
        </div>
        {/* Ul link */}
        <ul className={listStatus?"flex flex-col":"md:flex justify-center items-center hidden"}>
          <li><Link to={'/'} className='md:mx-4 mt-3 md:mt-0  '>Home</Link></li>
          <li><Link to={'/books'} className='md:mx-4  mt-3 md:my-0 '>Books</Link></li>
          <li><Link to={'/contact'} className='md:mx-4  mt-3 md:mb-0 '>Contact</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Header