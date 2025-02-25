import React, { useState } from "react";
import { updateProfile } from "../api/auth";

const Profile = ({ user, setUser }) => {
  const [nickname, setNickname] = useState(user?.nickname || "");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback("");
    try {
      const updatedUser = await updateProfile({ nickname });
      setUser(updatedUser);
      setFeedback("프로필이 성공적으로 업데이트되었습니다.");
    } catch (error) {
      console.error(error);
      setFeedback("프로필 업데이트에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">프로필 수정</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nickname" className="block text-gray-700 mb-2">
              닉네임
            </label>
            <input
              id="nickname"
              type="text"
              value={nickname}
              onChange={handleNicknameChange}
              placeholder="닉네임을 입력하세요"
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            {loading ? "업데이트 중..." : "프로필 업데이트"}
          </button>
        </form>
        {feedback && (
          <p className="mt-4 text-center text-sm text-green-600">{feedback}</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
