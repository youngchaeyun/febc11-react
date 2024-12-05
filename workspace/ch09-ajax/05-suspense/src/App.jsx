import { Suspense } from "react";
import PostList from "./PostList";
import FetchAsYouRender, { Replies } from "03-FetchAsYouRender";

function App() {
  return (
    <>
      <h1>05 데이터 패칭 패턴 - Fetch-as-you-render</h1>
      <Suspense fallback={<div>게시물 목록 조회 중....</div>}>
        <PostList />
        <Suspense fallback={<div>게시물 상세 조회 중....</div>}>
          <FetchAsYouRender />
          <Suspense fallback={<div>게시물 후기 조회 중...</div>}>
            <Replies />
          </Suspense>
        </Suspense>
      </Suspense>
    </>
  );
}

export default App;
