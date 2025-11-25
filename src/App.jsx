import AdminCollection from './admin/Pages/AdminCollection'
import AdminHome from './admin/Pages/AdminHome'
import AdminProfile from './admin/Pages/AdminProfile'
import './App.css'
import Auth from './pages/Auth'
import Pnf from './pages/Pnf'
import Books from './Users/Pages/Books'
import Contact from './Users/Pages/Contact'
import Home from './Users/Pages/Home'
import Profile from './Users/Pages/Profile'
import View from './Users/Pages/View'
import { Route,Routes } from 'react-router-dom'
import Preloader from './Components/Preloader'
import { useState } from 'react'


function App() {

  const [loading,setLoading]=useState(true)
  setTimeout(()=>{
    setLoading(false)
  },1000)

  return (
    <>
      <Routes>
        <Route path='/' element={loading?<Preloader/>:<Home />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth insideRegister={true} />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/books' element={<Books/>} />

        <Route path='/user/profile' element={<Profile />} />
        <Route path='/books/:id/view' element={<View />} />

        <Route path='/admin/home' element={<AdminHome />} />
        <Route path='/admin/profile' element={<AdminProfile />} />
        <Route path='/admin/resources' element={<AdminCollection />} />

        <Route path='/*' element={<Pnf />} />

      </Routes>
    </>
  )
}

export default App
