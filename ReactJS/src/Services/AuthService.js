import axios from 'axios';
const API_URL = 'http://localhost:8081/api/';
const user =JSON.parse(sessionStorage.getItem('tokens'))
const login = (username, password) => {
	return axios
		.post(API_URL + 'login', {
			username,
			password
		})
		.then((response) => {
			if (response.data.token) {
				sessionStorage.setItem('tokens', JSON.stringify(response.data.token));
				console.log(response.data.username);
				// localStorage.setItem("profile",JSON.stringify(axios.get(API_URL+`user/account/searchAccountByUsername/${username}`)));
				axios
					.get(API_URL + `user/account/searchAccountByUsername/${username}`, {
						headers: {
							'Content-Type': 'application/json',
							Authorization: `Bearer ` + response.data.token
						}
					})
					.then((res) => {
						sessionStorage.setItem('profile', JSON.stringify(res.data));
					});
			}
			return response.data;
		});
};

const register = (username, email, password) => {
	return axios.post(API_URL + 'all/account/registerCustomer', {
		username,
		email,
		password
	});
};
// const profile = (username) => {
//   return axios.get(`user/account/searchAccountByUsername/${username}`, {
//     username
//   });
// };
const forgot = (username, email) => {
	return axios.get(API_URL + `all/account/forgotPassword?username=${username}&email=${email}`, {
		username,
		email
	});
};
const otp = (username, password, otp) => {
	return axios.get(
		API_URL + `all/account/forgotPasswordConfirm?username=${username}&password=${password}&otp=${otp}`,
		{
			username,
			password,
			otp
		}
	);
};
const changepassword = (username, oldpassword, newpassword) => {
	return axios.get(API_URL + `user/account/changePassword?username=${username}&oldpassword=${oldpassword}&newpassword=${newpassword}`, /* {
	  username,
	  oldpassword,
	  newpassword
	 */   { headers: {
		  'Content-Type': 'application/json',
	  Authorization: `Bearer `+ user
  }});
  };

// const logout = () => {
// 	sessionStorage.removeItem('tokens');
// };

const getCurrentUser = () => {
	return JSON.parse(sessionStorage.getItem('tokens'));
};
const getProfile = () => {
	return JSON.parse(sessionStorage.getItem('profile'));
};

export default {
	register,
	login,
	// logout,
	getCurrentUser,
	forgot,
	otp,
	changepassword,
	getProfile
};
