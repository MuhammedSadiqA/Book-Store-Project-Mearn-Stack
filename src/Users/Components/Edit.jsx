import React, { useEffect, useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import serverURL from '../../services/serverURL'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { editUserAPI } from '../../services/allAPI';

function Edit() {
const [offCanvasStatus,setOffCanvasStatus]=useState(false)
const [userDetails,setUserDetails]=useState({
  id:"",username:"",password:"",role:"",bio:"",picture:"",
})
const [confirmPassword,setConfirmPassword]=useState("")
const [existingPicture,setExistingPicture]=useState("")
const [preview,setPreview]=useState('')
const [passwordMatch,setPasswordMatch]=useState(true)
const navigate=useNavigate()

useEffect(()=>{
if(sessionStorage.getItem(("user"))){
const user=JSON.parse(sessionStorage.getItem("user"))
setUserDetails({...userDetails,id:user._id,username:user.username,role:user.role,bio:user.bio})
setExistingPicture(user.picture)
}
},[])

const checkPasswordMatch=(data)=>{
  setConfirmPassword(data)
  userDetails.password==data? setPasswordMatch(true):setPasswordMatch(false)
}

const handleProfileUpdate=async()=>{
  const{username,password,bio,role,id,picture}=userDetails
  if(!username||!password||!bio||!confirmPassword){
    toast.info("Please fill the form completely")
  }else{
    // alert("api call")
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader={
        "Authorization":`Bearer ${token}`
      }
      const reqBody=new FormData()
      for(let key in userDetails){
        if(key !="picture"){
          reqBody.append(key,userDetails[key])
        }else{
          preview? reqBody.append("picture",userDetails.picture):reqBody.append("picture",existingPicture)
        }
      }
      const result=await editUserAPI(id,reqBody,reqHeader)
      if(result.status==200){
        toast.success("profile updated successfully... Please login with new password!!!")
        setTimeout(()=>{
          navigate('/login')
        },2000);
      }
    }else{
      console.log(result);
      toast.error("something went wrong")
    }
    }
}

const handleUploadpPicture=(imgFile)=>{
 setUserDetails({...userDetails,picture:imgFile})
 const url = URL.createObjectURL(imgFile)
 setPreview(url)
}

const resetForm = ()=>{
  const user = JSON.parse(sessionStorage.getItem("user"))
  setUserDetails({...userDetails,id:user._id,username:user.username,role:user.role,bio:user.bio,password:""})
  setPreview("")
  setConfirmPassword("")
  setPasswordMatch(true)
}




  return (
    <div>
      <button onClick={()=>setOffCanvasStatus(true)} className='flex items-center text-blue-600 border p-2 rounded hover:text-white hover:bg-blue-600'><FaEdit className='ms-3'/>Edit</button>
      {/* offcanvas */}
      {
        offCanvasStatus &&
        <div className="">
        <div className="fixed inset-0 bg-gray-500/75 z-10 w-full h-full">
        <div className="bg-white h-full w-90 fixed top-0 left-0">
          {/* header */}
          <div className="bg-black p-3 flex z-11 justify-between">
            <h3 className='text-lg text-white'>Update Profile</h3>
            <button onClick={()=>setOffCanvasStatus(false)} ><FaX className='text-white'/></button>
          </div>
          {/* body */}
          <div className="flex flex-col my-5 justify-center items-center">
            {/* image */}
            <label htmlFor="uploadImg"> 
              <input onChange={e=>handleUploadpPicture(e.target.files[0])} type="file" name="userimg" id="uploadImg" hidden/>
              {
                existingPicture?
                <img style={{width:"160px",height:"100px",borderRadius:"50%"}} src={preview?preview:existingPicture.startsWith("https://lh3.googleusercontent.com/")?existingPicture:`${serverURL}/uploads/${existingPicture}`} alt="profile" />
                :
                <img style={{width:"160px",height:"100px",borderRadius:"50%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPhtdO_3HLpDMCdrlnK9AjcBcHFMKy7lt0rA&s" alt="profile" />
              }
            </label>
            {/* name */}
            <div className="mt-10 mb-3 w-full px-5">
              <input value={userDetails.username} onChange={e=>setUserDetails({...userDetails,username:e.target.value})} type="text"  placeholder='username' className='border border-gray-200 p-2 rounded w-full' />
            </div>
            {/* password */}
            <div className=" mb-3 w-full px-5">
              <input value={userDetails.password} onChange={e=>setUserDetails({...userDetails,password:e.target.value})} type="password"  placeholder='Password' className='border border-gray-200 p-2 rounded w-full' />
            </div>
            <div className=" mb-3 w-full px-5">
              <input value={confirmPassword} onChange={e=>checkPasswordMatch(e.target.value)} type="password"  placeholder='Confirm New Password' className='border border-gray-200 p-2 rounded w-full' />
            </div>
            {
              !passwordMatch&&
              <div className=" mb-3 w-full px-5 font-bold text-red-600 text-xs">
                *Confirm password must match with new password*
            </div>
            }
            {/* bio */}
            <div className=" mb-3 w-full px-5">
              <textarea value={userDetails.bio} onChange={e=>setUserDetails({...userDetails,bio:e.target.value})} type="text"  placeholder='Enter Bio' rows={2} className='border border-gray-200 p-2 rounded w-full' />
            </div>
            {/* button */}
            <div className="mb-3 flex justify-end px-5">
              <button onClick={resetForm}  className='px-3 py-2 rounded bg-red-600 text-white hover:bg-white hover:border-red-600 hover:text-red-600'>Reset</button>
              <button onClick={handleProfileUpdate} disabled={!passwordMatch?true:false} className='px-3 ms-3 py-2 rounded bg-green-600 text-white hover:bg-white hover:border-green-600 hover:text-green-600'>Update</button>
            </div>
          </div> 
        </div>
        </div>
      </div>
      }
       <ToastContainer
              position="top-center"
              autoClose={2000}
              theme="colored"
            />
    </div>
  )
}

export default Edit