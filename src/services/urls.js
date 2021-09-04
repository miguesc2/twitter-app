import axios from "axios"; 

export const baseUrlUser = "https://twiter-api.herokuapp.com/accounts/user/"
export const baseUrlLogin = "https://twiter-api.herokuapp.com/login/"
export const baseUrlRefreshToken = "https://twiter-api.herokuapp.com/refresh-token/"
export const baseUrlProfile = "https://twiter-api.herokuapp.com/accounts/profile/"

export const getAll = async () => {
    const res = await axios.get(baseUrlUser)
    return res.data //users
}