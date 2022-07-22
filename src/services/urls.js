import axios from "axios"; 

export const baseUrlUser = "https://twiter-api.herokuapp.com/accounts/user/" //all users
export const baseUrlPosts = "https://twiter-api.herokuapp.com/post/socialpost/" //posts users
export const baseUrlLogin = "https://twiter-api.herokuapp.com/login/" //view information of the person who logged in

export const baseUrlProfile = "https://twiter-api.herokuapp.com/accounts/profile/" // get user profile
export const baseUrlRefreshToken = "https://twiter-api.herokuapp.com/refresh-token/" // 
export const baseUrlPostComments = "https://twiter-api.herokuapp.com/post/socialcomment/" //url comments

export const getComments = async () => {
  const res = await axios.get(baseUrlPostComments)
  return res
}

export const getProfile = async () => {
  const res = await axios.get ( 
    baseUrlProfile, { headers: { Authorization: `Token e022b3412a20610513973b1b4daba741f5ac69a1`} }
  )
  console.log(res)
  return res 
}
// getProfile()

export const getAll = async () => {
  const res = await axios.get(baseUrlUser)
  return res.data
}

export const watchPosts = async () => {
  const res = await axios.get(baseUrlPosts)
  return res.data
}

// const eliminar = async () => {
//   const res = await axios.delete(`${ baseUrlPosts }12`)
//   console.log(res)
//   return res.data
// }
// eliminar()