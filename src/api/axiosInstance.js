import axios from "axios";

// .env 파일의 VITE_BASE_URL 값을 baseURL로 사용합니다.
const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export default instance;
