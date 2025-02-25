import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* 상단 헤더 영역 (Layout에서 처리 중이라면 중복 제거) */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600">무료 성격 테스트</h1>
        <p className="mt-4 text-lg text-gray-700">
          자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
        </p>
      </header>

      {/* 메인 섹션: 카드 레이아웃 */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {/* 카드 1: 성격 유형 검사 */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">성격 유형 검사</h2>
          <p className="text-gray-600">
            자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을 미치는지 알아보세요.
          </p>
        </div>

        {/* 카드 2: 성격 유형 이해 */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">성격 유형 이해</h2>
          <p className="text-gray-600">
            다른 사람들이 어떻게 행동하는지 이해하는데 도움을 줄 수 있습니다.
          </p>
        </div>

        {/* 카드 3: 팀 평가 */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">팀 평가</h2>
          <p className="text-gray-600">
            팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을 배워보세요.
          </p>
        </div>
      </section>

      {/* 하단 로그인 버튼 */}
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
