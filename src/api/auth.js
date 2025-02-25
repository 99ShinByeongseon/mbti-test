import axios from "axios";

const API_URL = "https://thoughtful-cyclic-haze.glitch.me";

// 회원가입: 아이디, 비밀번호, 닉네임 전달
export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

// 로그인: 아이디, 비밀번호 전달하며, expiresIn 옵션으로 토큰 유효시간 조정 가능
export const login = async (userData, expiresIn) => {
  let url = `${API_URL}/login`;
  if (expiresIn) {
    url += `?expiresIn=${expiresIn}`;
  }
  const response = await axios.post(url, userData);
  // 로그인 성공 시 accessToken을 localStorage에 저장
  localStorage.setItem("accessToken", response.data.accessToken);
  return response.data;
};

// 회원정보 확인: accessToken을 이용해 본인 또는 특정 userId의 정보를 조회
export const getUserProfile = async (accessToken, userId = null) => {
  let url = `${API_URL}/user`;
  if (userId) {
    url += `?user_id=${encodeURIComponent(userId)}`;
  }
  const response = await axios.get(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

// 프로필 변경: FormData를 이용하여 프로필 이미지(avatar)와 닉네임 변경
export const updateProfile = async (formData) => {
  const accessToken = localStorage.getItem("accessToken");
  const response = await axios.patch(`${API_URL}/profile`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};