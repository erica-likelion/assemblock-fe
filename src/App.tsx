import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "@components/common/Layout";
import { Navigator } from "@components/common/Navigator";

import { HomePage } from "@pages/home/HomePage";
import { BoardPage, Board } from "@pages/board/BoardPage";
import { BoardDetailPage } from "@pages/board/BoardDetailPage";
import { ProjectPage } from "@pages/project/ProjectPage";
import { MyPage } from "@pages/my/MyPage";

import basicBoard from "@assets/board/small/basic-board.svg";

function App() {
  // 🔹 보드 전역 상태 (기본 1개 보드)
  const [boards, setBoards] = useState<Board[]>([
    { id: 1, title: "기본 보드", blocks: 0, icon: basicBoard, memo: "" },
  ]);

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/Home" element={<HomePage />} />
          <Route
            path="/Board"
            element={<BoardPage boards={boards} setBoards={setBoards} />}
          />
          <Route
            path="/BoardDetail"
            element={<BoardDetailPage boards={boards} setBoards={setBoards} />}
          />
          <Route path="/Project" element={<ProjectPage />} />
          <Route path="/My" element={<MyPage />} />
        </Routes>
      </Layout>
      <Navigator />
    </>
  );
}

export default App;
