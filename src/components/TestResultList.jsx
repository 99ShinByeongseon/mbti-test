import React, { useEffect, useState } from "react";
import { getTestResults } from "../api/testResults"; // testResults.js 파일에서 내보내는 함수 임포트
import TestResultItem from "./TestResultItem";

const TestResultList = ({ user }) => {
  const [results, setResults] = useState([]);

  const fetchResults = async () => {
    try {
      const data = await getTestResults();
      setResults(data);
    } catch (error) {
      console.error("테스트 결과를 불러오는데 실패했습니다:", error);
    }
  };

  useEffect(() => {
    fetchResults();
  }, []);

  const filteredResults = results.filter(
    (result) => result.visibility || (user && result.userId === user.userId)
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">테스트 결과 목록</h2>
      {filteredResults.length === 0 ? (
        <p>표시할 결과가 없습니다.</p>
      ) : (
        <ul className="space-y-4">
          {filteredResults.map((result) => (
            <TestResultItem
              key={result.id}
              result={result}
              user={user}
              onRefresh={fetchResults}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TestResultList;
