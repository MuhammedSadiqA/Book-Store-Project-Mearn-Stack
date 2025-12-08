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