import React, { useState } from "react";

const AuthForm = ({ mode, onSubmit }) => {
  // 로그인이면 { id, password }, 회원가입이면 { id, password, nickname } 초기값을 설정합니다.
  const initialState = mode === "signup" 
    ? { id: "", password: "", nickname: "" } 
    : { id: "", password: "" };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="id"
        value={formData.id}
        onChange={handleChange}
        placeholder="아이디"
        required
        className="w-full p-4 border border-gray-300 rounded-lg"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="비밀번호"
        required
        className="w-full p-4 border border-gray-300 rounded-lg mt-4"
      />
      {mode === "signup" && (
        <input
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
          placeholder="닉네임"
          required
          className="w-full p-4 border border-gray-300 rounded-lg mt-4"
        />
      )}
      <button
        type="submit"
        className="mt-4 w-full p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        {mode === "login" ? "로그인" : "회원가입"}
      </button>
    </form>
  );
};

export default AuthForm;
