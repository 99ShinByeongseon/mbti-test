import React from "react";
import TestResultList from "../components/TestResultList";
import { getTestResults } from "../api/testResults";


const Results = ({ user }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">테스트 결과 목록</h1>
      <TestResultList user={user} />
    </div>
  );
};

export default Results;
