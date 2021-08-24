import axios from "axios"; 

export const baseUrl = "https://twiter-api.herokuapp.com/accounts/user/"

export const getAll = async () => {
    const res = await axios.get(baseUrl)
    return res.data //users
}