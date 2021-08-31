import axios from "axios"; 

export const baseUrl = "https://twiter-api.herokuapp.com/accounts/user/"
export const baseUrlLogin = "https://twiter-api.herokuapp.com/login/"

export const getAll = async () => {
    const res = await axios.get(baseUrl)
    return res.data //users
}