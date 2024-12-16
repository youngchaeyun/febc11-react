"use client";

export default function Error() {
  return (
    <div className="py-20 bg-red-100 border border-red-400 text-red-700 p-4 rounded-lg flex flex-col items-center space-y-2">
      <h2 className="text-xl font-semibold mb-2 text-center">
        🚧 앗, 무언가 잘못됐네요!
      </h2>
      <h3 className="text-md font-semibold mb-2 text-center">
        일시적인 오류가 발생했습니다.
      </h3>
      <p className="pt-12 text-center">
        이 오류는 더 나은 서비스를 위한 첫걸음이에요. 조금만 기다려 주세요!
      </p>
      <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600">
        ⚙️ 다시 시도
      </button>
    </div>
  );
}
