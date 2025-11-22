// src/pages/board/BoardDetailPage.styles.ts
import { CSSProperties } from "react";

type Styles = Record<string, CSSProperties>;

export const boardDetailStyles: Styles = {
  //상쇄
  root: {
    marginTop: -48,
    marginBottom: -99,
    marginLeft: -20,
    marginRight: -20,

    minWidth: 375,
    maxWidth: 400,
    minHeight: "100vh",
    backgroundColor: "#FAFAFA",
    boxSizing: "border-box",
    position: "relative",
  },

  pageInner: {
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
  },

  headerFixed: {
    position: "fixed",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",

    width: "100%",
    minWidth: 375,
    maxWidth: 400,

    backgroundColor: "#FAFAFA",
    zIndex: 40,
  },

  // 상태바
  statusBar: {
    display: "flex",
    alignItems: "center",
    height: 48,
    width: "100%",
    boxSizing: "border-box",
    paddingTop: 21,
  },

  statusTimeBox: {
    display: "flex",
    padding: "0 6px 0 49px",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    flexShrink: 0,
  },

  statusTime: {
    color: "#000",
    textAlign: "center",
    fontFamily:
      '"SF Pro", system-ui, -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif',
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: 590,
    lineHeight: "22px",
  },

  statusIconImg: {
    flexShrink: 0,
    height: 13,
  },

  statusSideRight: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  // 탑네비
  topNav: {
    display: "flex",
    width: "100%",
    height: 68,
    padding: "0 20px",
    justifyContent: "space-between",
    alignItems: "center",
    flexShrink: 0,
    boxSizing: "border-box",
    background: "var(--GrayScale-WT, #FAFAFA)",
  },
  topNavLeft: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    width: 24,
    height: 24,
  },

  topNavCenter: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  topNavRight: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    width: 24,
    height: 24,
  },

  iconBtn: {
    border: "none",
    background: "none", // or "transparent"
    padding: 0,
    margin: 0,
    width: 24,
    height: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },

  navIconImg: {
    width: 24,
    height: 24,
    flexShrink: 0,
    aspectRatio: 1 / 1,
  },

  topNavTitle: {
    margin: 0,
    color: "var(--Primary-BK, #352F36)",
    fontFamily: "Pretendard, sans-serif",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "150%",
  },

  // 내용
  content: {
    paddingTop: 13,
    paddingLeft: 21,
    paddingRight: 19,
    paddingBottom: 100,
    boxSizing: "border-box",
  },

  // N블록 , 제목 , 메모
  infoSection: {
    display: "flex",
    width: 335,
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 6,
    marginBottom: 181,
  },

  blockCountText: {
    margin: 0,
    color: "var(--GrayScale-GR50, #868286)",
    fontFamily: "Pretendard, sans-serif",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%", // 18px
  },

  titleRow: {
    display: "flex",
    alignItems: "center",
    gap: 4,
  },

  boardTitleText: {
    margin: 0,
    color: "var(--Primary-BK, #352F36)",
    fontFamily: "Pretendard, sans-serif",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "150%",
    fontFeatureSettings: "'liga' off, 'clig' off",
  },

  titleEditIcon: {
    width: 16,
    height: 16,
  },

  memoRow: {
    display: "flex",
    alignItems: "center",
    gap: 4,
  },

  memoText: {
    margin: 0,
    color: "var(--GrayScale-GR50, #868286)",
    fontFamily: "Pretendard, sans-serif",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "150%",
  },

  memoEditIcon: {
    width: 18,
    height: 18,
    aspectRatio: 1 / 1,
  },

  //빈 상태 텍스트
  emptySection: {
    marginTop: 120,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: 8,
  },

  emptyTitle: {
    margin: 0,
    color: "var(--Primary-BK, #352F36)",
    fontFamily: "Pretendard, sans-serif",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%",
  },

  emptySub: {
    margin: 0,
    color: "var(--GrayScale-GR50, #868286)",
    fontFamily: "Pretendard, sans-serif",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%",
  },

  // 홈 인디케이터
  homeIndicator: {
    position: "fixed",
    left: "50%",
    bottom: 8,
    transform: "translateX(-50%)",
    width: 144,
    height: 5,
    borderRadius: 100,
    background: "#000",
    zIndex: 70,
  },
};
