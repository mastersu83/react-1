import * as axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': '8adacebe-0ada-4cf1-a6f3-ff0b4c1f9fde',
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
