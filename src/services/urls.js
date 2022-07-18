import axios from "axios"; 

export const baseUrlUser = "https://twiter-api.herokuapp.com/accounts/user/" //all users
export const baseUrlPosts = "https://twiter-api.herokuapp.com/post/socialpost/" //posts users
export const baseUrlLogin = "https://twiter-api.herokuapp.com/login/" //view information of the person who logged in

export const baseUrlRefreshToken = "https://twiter-api.herokuapp.com/refresh-token/" //
export const baseUrlProfile = "https://twiter-api.herokuapp.com/accounts/profile/" //
export const baseUrlPostComments = "https://twiter-api.herokuapp.com/post/socialcomment/" //url comments

export const getAll = async () => {
  const res = await axios.get(baseUrlUser)
  return res.data
}

export const watchPosts = async () => {
  const res = await axios.get(baseUrlPosts)
  return res.data
}