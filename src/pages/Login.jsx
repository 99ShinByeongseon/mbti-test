import React from "react";
import AuthForm from "../components/AuthForm";
import { login } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      // 로그인 API 호출
      const response = await login(formData);
      // 로그인 성공 시 사용자 정보 저장 (예시)
      setUser(response.data);
      // 프로필 페이지로 이동
      navigate("/profile");
    } catch (error) {
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">로그인</h1>
        <AuthForm mode="login" onSubmit={handleLogin} />
        <div className="mt-4 text-center">
          <p>
            계정이 없으신가요?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              회원가입
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;