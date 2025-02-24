import axios from 'axios';

const API_URL = 'https://www.nbcamp-react-auth.link';

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const login = async (userData) => {

};

export const getUserProfile = async (token) => {

};

export const updateProfile = async (formData) => {

};

// import axios from "axios";

// const Auth_API_HOST = "https://thoughtful-cyclic-haze.glitch.me";

// export const register = async ({ id, password, nickname }) => {
//     const response = await axios.post(Auth_API_HOST + "/register", {
//         id: id,
//         password: password,
//         nickname: nickname,
//     });
//     return response;
// };