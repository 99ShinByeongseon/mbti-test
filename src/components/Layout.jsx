import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = ({ user, setUser }) => {
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("accessToken");
  };

  return (
    <div>
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-xl font-bold">MBTI 테스트</h1>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            {user ? (
              <>
                <li>
                  <Link to="/profile" className="hover:underline">
                    프로필
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="hover:underline">
                    로그아웃
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="hover:underline">
                    로그인
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="hover:underline">
                    회원가입
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
