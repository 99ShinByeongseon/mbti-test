import React from "react";
import { updateTestResultVisibility, deleteTestResult } from "../api/testResult";

const TestResultItem = ({ result, user, onRefresh }) => {
  const isOwner = user && result.userId === user.userId;

  const handleToggleVisibility = async () => {
    try {
      await updateTestResultVisibility(result.id, !result.visibility);
      onRefresh();
    } catch (error) {
      console.error("공개 여부 변경에 실패했습니다:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTestResult(result.id);
      onRefresh();
    } catch (error) {
      console.error("테스트 결과 삭제에 실패했습니다:", error);
    }
  };

  return (
    <li className="p-4 border rounded shadow flex justify-between items-center">
      <div>
        <p className="font-bold">닉네임: {result.nickname}</p>
        <p>결과: {result.result}</p>
        <p>날짜: {result.date}</p>
        <p>공개 여부: {result.visibility ? "공개" : "비공개"}</p>
      </div>
      {isOwner && (
        <div className="flex space-x-2">
          <button
            onClick={handleToggleVisibility}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {result.visibility ? "비공개 전환" : "공개 전환"}
          </button>
          <button
            onClick={handleDelete}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            삭제
          </button>
        </div>
      )}
    </li>
  );
};

export default TestResultItem;
