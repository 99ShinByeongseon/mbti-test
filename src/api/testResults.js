import axios from "axios";

const API_URL = "http://localhost:5000/testResults";

// 1-1. 모든 테스트 결과 가져오기
export const getTestResults = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// 1-2. 새로운 테스트 결과 추가
export const createTestResult = async (resultData) => {
  const response = await axios.post(API_URL, resultData);
  return response.data;
};

// 1-3. 특정 테스트 결과의 공개 여부 변경
export const updateTestResultVisibility = async (id, visibility) => {
  const response = await axios.patch(`${API_URL}/${id}`, { visibility });
  return response.data;
};

// 1-4. 특정 테스트 결과 삭제
export const deleteTestResult = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};