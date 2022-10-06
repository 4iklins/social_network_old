import * as axios from "axios";
import { saveProfileInfo } from "../data/myProfile-reducer";
import EditPhoto from "../Main/Content/Profile/EditPhoto/EditPhoto";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "d9b00696-c732-4395-8b64-4cdd534d2c71",
  },
});


export const friendsApi = {
  getUsers(currentPage = 1) {
    return instance
      .get(`users?count=7&page=${currentPage}`)
      .then((response) => response.data);
  },
  postFollow(user) {
    return instance.post(`follow/${user}`).then((response) => response.data);
  },
  deleteFollow(user) {
    return instance.delete(`follow/${user}`).then((response) => response.data);
  }
};

export const profileApi = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  setStatus(status) {
    return instance.put(`profile/status`,{status:status}).then((response) => response.data);
  },
  editPhoto(photo) {
    let formData = new FormData();
    formData.append("image", photo);
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  saveProfile(profile) {
    return instance.put(`profile`,profile).then((response) => response.data);
  }
};

export const authApi = {
  auth() {
    return instance.get("auth/me").then((response) => response.data);
  },
  login(email,password,rememderMe = false,captcha) {
    return instance.post ("auth/login",{email,password,rememderMe,captcha});
  },
  logout() {
    return instance.delete ("auth/login");
  },
  getCaptcha() {
    return instance.get("/security/get-captcha-url");
  }
};
