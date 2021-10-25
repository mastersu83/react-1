import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "8adacebe-0ada-4cf1-a6f3-ff0b4c1f9fde",
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  getAuth() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
  getProfile(userId) {
    return instance.get(`profile/` + userId).then((response) => {
      return response.data;
    });
  },
  follow(id) {
    return instance.post(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
};

// export const follow = (id) => {
//   return instance.post(`follow/${id}`).then((response) => {
//     return response.data;
//   });
// };
// export const unfollow = (id) => {
//   return instance.delete(`follow/${id}`).then((response) => {
//     return response.data;
//   });
// };

// axios
//     .post(
//         `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
//         {},
//         {
//           withCredentials: true,
//           headers: {
//             "API-KEY": "8adacebe-0ada-4cf1-a6f3-ff0b4c1f9fde",
//           },
//         }
//     )
//     .then((data) => {
//       if (data.resultCode === 0) {
//         props.follow(u.id);
//       }
//     });
// axios
//     .delete(
//         `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
//
//         {
//           withCredentials: true,
//           headers: {
//             "API-KEY": "8adacebe-0ada-4cf1-a6f3-ff0b4c1f9fde",
//           },
//         }
//     )
//     .then((response) => {
//       if (response.data.resultCode === 0) {
//         props.unfollow(u.id);
//       }
//     });

// export const getUsers = (currentPage, pageSize) => {
//   return instance
//     .get(`users?page=${currentPage}&count=${pageSize}`, {
//       withCredentials: true,
//     })
//     .then((response) => {
//       return response.data;
//     });
// };
// export const getAuth = () => {
//   return instance
//     .get(`auth/me`, {
//       withCredentials: true,
//     })
//     .then((response) => {
//       return response.data;
//     });
// };
// export const getProfile = (userId) => {
//   return instance.get(`profile/` + userId).then((response) => {
//     return response.data;
//   });
// };
