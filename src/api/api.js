import * as axios from "axios";

const instance = axios.create({
  withCredentials:true,
  baseURL:"https://social-network.samuraijs.com/api/1.0/",
  headers:{
    "API-KEY":"d9b00696-c732-4395-8b64-4cdd534d2c71"
  }
})

export const getUsers = (currentPage=1) => {
  return instance.get(`users?count=7&page=${currentPage}`)
  .then(response => response.data)
}

export const postFollow = (user) => {
  return instance.post(`follow/${user}`)
  .then(response => response.data)
}
export const deleteFollow = (user) => {
  return instance.delete(`follow/${user}`)
  .then(response => response.data)
}

export const getProfile = (userId) => {
  return instance.get(`profile/${userId}`)
}

export const authMe = () => {
  return instance.get("auth/me")
  .then( response => response.data)
}