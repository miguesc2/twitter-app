import axios from "axios"; 

export const baseUrlUser = "https://twiter-api.herokuapp.com/accounts/user/" //Url de usuarios
export const baseUrlLogin = "https://twiter-api.herokuapp.com/login/" //url devuelve info de persona logueada.
export const baseUrlRefreshToken = "https://twiter-api.herokuapp.com/refresh-token/" //url para obtener el token de un usuario
export const baseUrlProfile = "https://twiter-api.herokuapp.com/accounts/profile/" //Aún no usada

export const baseUrlPosts = "https://twiter-api.herokuapp.com/post/socialpost/" //Url para crear un post
export const baseUrlPostComments = "https://twiter-api.herokuapp.com/post/socialcomment/" //url para los comentarios

export const getAll = async () => {
  const res = await axios.get(baseUrlUser)
  return res.data //users
}

export const watchPosts = async () => {
  const res = await axios.get(baseUrlPosts)
  return res.data
}











/* export async function watches() {
  const wtchPst = await watchPosts()
  const gtAll = await getAll()
  console.log(wtchPst)
  console.log(gtAll)
  const newArray = wtchPst.map((arrA) => {
    const sameId = gtAll.find((arrB) => arrB.id === arrA.author) || {};
    return {
      ...sameId,
      ...arrA,
    };
  })
  console.log(newArray)
  return newArray
} */