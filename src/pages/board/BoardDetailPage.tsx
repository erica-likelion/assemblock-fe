import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { boardDetailStyles as styles } from "./BoardDetailPage.styles";

import backIcon from "@assets/board/left.svg";
import moreIcon from "@assets/board/more.svg";
import penIcon from "@assets/board/Pen.svg";
import statusIcons from "@assets/board/nav/status.svg";

import type { Board } from "./BoardPage";

type BoardDetailPageProps = {
  boards: Board[];
  setBoards: React.Dispatch<React.SetStateAction<Board[]>>;
};

type LocationState = {
  boardId?: number;
};

export const BoardDetailPage: React.FC<BoardDetailPageProps> = ({
  boards,
  setBoards,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { boardId } = (location.state || {}) as LocationState;

  // 현재 보드 찾기 (없으면 첫 번째 보드 사용)
  const board = boards.find((b) => b.id === boardId) ?? boards[0];

  if (!board) {
    return (
      <div style={styles.root}>
        <p>보드 정보를 찾을 수 없어요.</p>
      </div>
    );
  }

  const [titleEditing, setTitleEditing] = useState(false);
  const [memoEditing, setMemoEditing] = useState(false);
  const [title, setTitle] = useState(board.title);
  const [memo, setMemo] = useState(board.memo ?? "");

  const blockText = `${board.blocks}블록`;

  // 🔥 뒤로가기 시 수정된 제목/메모 저장
  const handleBack = () => {
    setBoards((prev) =>
      prev.map((b) =>
        b.id === board.id
          ? {
              ...b,
              title,
              memo,
            }
          : b
      )
    );
    navigate(-1);
  };

  return (
    <div style={styles.root}>
      {/* 상태바 */}
      <div style={styles.statusBar}>
        <div style={styles.statusTimeBox}>
          <span style={styles.statusTime}>9:41</span>
        </div>

        <div style={{ marginLeft: "auto" }}>
          <img
            src={statusIcons}
            alt="상태 아이콘"
            style={styles.statusIconImg}
          />
        </div>
      </div>

      {/* 탑 네비 */}
      <header style={styles.topNav}>
        <button
          type="button"
          style={styles.iconBtn}
          onClick={handleBack}
          aria-label="이전"
        >
          <img src={backIcon} alt="이전" style={styles.topNavIcon} />
        </button>

        <h1 style={styles.topNavTitle}>보드 상세</h1>

        <button type="button" style={styles.iconBtn} aria-label="더보기">
          <img src={moreIcon} alt="더보기" style={styles.topNavIcon} />
        </button>
      </header>

      {/* 본문 */}
      <main style={styles.content}>
        {/* N블록 / 제목 / 메모 박스 */}
        <section style={styles.infoSection}>
          {/* N블록 텍스트 */}
          <p style={styles.blockCountText}>{blockText}</p>

          {/* 보드 제목 줄 */}
          <div style={styles.titleRow}>
            {titleEditing ? (
              <input
                style={styles.boardTitleInput}
                maxLength={14}
                value={title}
                onChange={(e) => {
                  const raw = e.target.value;
                  const filtered = raw.replace(
                    /[^ㄱ-ㅎ가-힣a-zA-Z0-9\s~`!@#$%^&*()\-_=+\[\]{}\\|;:'",.<>/?]/g,
                    ""
                  );
                  setTitle(filtered.slice(0, 14));
                }}
                onBlur={() => setTitleEditing(false)}
                autoFocus
              />
            ) : (
              <span style={styles.boardTitleText}>{title}</span>
            )}

            <button
              type="button"
              style={styles.iconBtn}
              onClick={() => setTitleEditing(true)}
            >
              <img src={penIcon} alt="제목 수정" style={styles.titleEditIcon} />
            </button>
          </div>

          {/* 메모 줄 */}
          <div style={styles.memoRow}>
            {memoEditing ? (
              <textarea
                style={styles.memoTextarea}
                maxLength={104}
                value={memo}
                onChange={(e) => {
                  const raw = e.target.value;
                  const filtered = raw.replace(
                    /[^ㄱ-ㅎ가-힣a-zA-Z0-9\s~`!@#$%^&*()\-_=+\[\]{}\\|;:'",.<>/?\n]/g,
                    ""
                  );
                  setMemo(filtered.slice(0, 104));
                }}
                onBlur={() => setMemoEditing(false)}
                autoFocus
              />
            ) : (
              <span style={styles.memoText}>
                {memo && memo.length > 0 ? memo : "메모를 입력하세요"}
              </span>
            )}

            <button
              type="button"
              style={styles.iconBtn}
              onClick={() => setMemoEditing(true)}
            >
              <img src={penIcon} alt="메모 수정" style={styles.memoEditIcon} />
            </button>
          </div>
        </section>

        {/* 아직 저장된 블록 없음 상태 */}
        {board.blocks === 0 && (
          <section style={styles.emptySection}>
            <p style={styles.emptyTitle}>아직 저장한 블록 없음</p>
            <p style={styles.emptySub}>
              이 보드에 저장한 블록이 여기에 표시됩니다.
            </p>
          </section>
        )}
      </main>

      {/* 홈 인디케이터 */}
      <div style={styles.homeIndicator} />
    </div>
  );
};
