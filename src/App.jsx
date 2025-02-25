import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import TestPage from "./pages/TestPage";
import Results from "./pages/Results";

function App() {
  const [user, setUser] = useState(null);
  const isAuthenticated = Boolean(user);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout user={user} setUser={setUser} />}>
          {/* 기본페이지: 사이트 정보 및 로그인 링크 */}
          <Route path="/" element={<Home />} />
          {/* 로그인/회원가입 페이지: 공통 AuthForm 컴포넌트 활용 */}
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup />} />
          {/* 인증이 필요한 페이지 */}
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            {/* 프로필 페이지 */}
            <Route
              path="/profile"
              element={<Profile user={user} setUser={setUser} />}
            />
            {/* MBTI 테스트 페이지 */}
            <Route path="/test" element={<TestPage user={user} />} />
            {/* 테스트 결과 페이지 */}
            <Route path="/results" element={<Results user={user} />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
