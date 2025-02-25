// src/api/auth.js
import instance from "./axiosInstance";

export const register = async (userData) => {
  const response = await instance.post("/register", userData);
  return response.data;
};

export const login = async (userData, expiresIn) => {
  let url = "/login";
  if (expiresIn) {
    url += `?expiresIn=${expiresIn}`;
  }
  const response = await instance.post(url, userData);
  localStorage.setItem("accessToken", response.data.accessToken);
  return response.data;
};

export const getUserProfile = async (accessToken, userId = null) => {
  let url = "/user";
  if (userId) {
    url += `?user_id=${encodeURIComponent(userId)}`;
  }
  const response = await instance.get(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

export const updateProfile = async (formData) => {
  const accessToken = localStorage.getItem("accessToken");
  const response = await instance.patch("/profile", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};
