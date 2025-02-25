import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600">무료 성격 테스트</h1>
        <p className="mt-4 text-lg text-gray-700">
          자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
        </p>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">성격 유형 검사</h2>
          <p className="text-gray-600">다양한 성격 유형을 테스트하고, 결과를 확인해 보세요.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">성격 유형 이해</h2>
          <p className="text-gray-600">자신의 성격을 깊이 있게 분석해 보고, 이해의 폭을 넓히세요.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">팀 평가</h2>
          <p className="text-gray-600">팀원들의 성격 유형을 파악하고, 팀워크를 향상시켜 보세요.</p>
        </div>
      </section>
      <div className="mt-8">
        <Link
          to="/login"
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          로그인하기
        </Link>
      </div>
    </div>
  );
};

export default Home;
