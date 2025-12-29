import CommonAPI from "./CommonAPI"
import serverURL from "./serverURL"

// register api: called by Auth 
export const registerAPI=async(userDetails)=>{
  return await CommonAPI("POST",`${serverURL}/register`,userDetails)
}

// login api: called by Auth component when login btn clicked
export const loginAPI=async (userDetails)=>{
  return await CommonAPI('POST',`${serverURL}/login`,userDetails)
}

// google login api
export const googleLoginAPI=async (userDetails)=>{
  return await CommonAPI('POST',`${serverURL}/google/sign-in`,userDetails)
}

// /user/book/add - addbook api : called by sellBook component when add book btn click 
export const addBookAPI=async (reqBody,reqHeader)=>{
  return await CommonAPI('POST',`${serverURL}/user/book/add`,reqBody,reqHeader)
}

//books/home : homepage books api: called by home component when page loads
export const getHomePageBookAPI=async ()=>{
  return await CommonAPI('GET',`${serverURL}/books/home`,{})
}


//books/all :  bookpage api: called by book component when page loads -authorised user
export const getAllBooksPageAPI=async (reqHeader,searchkey)=>{
  return await CommonAPI("GET",`${serverURL}/books/all?search= ${searchkey}`,
   {},reqHeader)
}

//user-books/all : called by bookstatus when page load -authorised user
export const getAllUserBooksAPI=async (reqHeader)=>{
  return await CommonAPI("GET",`${serverURL}/user-books/all`,{},reqHeader)
}

//user-books/all : called by bookstatus when page load -authorised user
export const getAllUserBoughtBookAPI=async (reqHeader)=>{
  return await CommonAPI("GET",`${serverURL}/user-books/bought`,{},reqHeader)
}

//books/:id/view : get request by view when page loads
export const viewBookAPI=async (reqHeader,id)=>{
  return await CommonAPI("GET",`${serverURL}/books/${id}/view`,{},reqHeader)
}

//user/:id/edit : put request by Edit When update btn click

export const editUserAPI=async (id,reqBody,reqHeader)=>{
  return await CommonAPI("PUT",`${serverURL}/user/${id}/edit`,reqBody,reqHeader)
}

//admin-books/all : admin bookpage api: called by adminResources component when page loads -authorised user
export const getAllAdminBooksAPI=async (reqHeader)=>{
  return await CommonAPI("GET",`${serverURL}/admin-books/all`,{},reqHeader)
}



