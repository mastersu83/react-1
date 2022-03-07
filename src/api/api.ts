import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "8adacebe-0ada-4cf1-a6f3-ff0b4c1f9fde",
  },
});

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(id: number) {
    return instance.post(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
  unfollow(id: number) {
    return instance.delete(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
};

export const profileAPI = {
  getProfile(userId: number) {
    return instance.get(`profile/` + userId).then((response) => {
      return response.data;
    });
  },
  getStatus(userId: number) {
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status: string) {
    return instance.put(`profile/status`, { status: status });
  },
};

export enum ResultCodeEnum {
  Success = 0,
  Error = 1,
}

export enum ResultCodeCaptchaEnum {
  CaptchaIsRequired = 10,
}

type MeResponseType = {
  data: { id: number; email: string; login: string };
  resultCode: ResultCodeEnum;
  messages: Array<string>;
};

type LoginResponseType = {
  data: { userId: number };
  resultCode: ResultCodeEnum;
  messages: Array<string>;
};
type LogoutResponseType = {
  data: {};
  resultCode: ResultCodeEnum | ResultCodeCaptchaEnum;
  messages: Array<string>;
};

export const authAPI = {
  me() {
    return instance.get<MeResponseType>(`auth/me`).then((response) => {
      return response.data;
    });
  },
  login(email: string, password: string, rememberMe = false) {
    return instance.post<LoginResponseType>(`auth/login`, {
      email,
      password,
      rememberMe,
    });
  },
  loginOut() {
    return instance.delete<LogoutResponseType>(`auth/login`);
  },
};
