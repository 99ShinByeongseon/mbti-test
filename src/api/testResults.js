// src/api/testResult.js
import instance from "./axiosInstance";

export const getTestResults = async () => {
  const response = await instance.get("/testResults");
  return response.data;
};

export const createTestResult = async (resultData) => {
  const response = await instance.post("/testResults", resultData);
  return response.data;
};

export const updateTestResultVisibility = async (id, visibility) => {
  const response = await instance.patch(`/testResults/${id}`, { visibility });
  return response.data;
};

export const deleteTestResult = async (id) => {
  const response = await instance.delete(`/testResults/${id}`);
  return response.data;
};
