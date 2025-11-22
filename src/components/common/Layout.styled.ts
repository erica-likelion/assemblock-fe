// src/components/common/Layout.styled.ts
import styled from "styled-components";

export const LayoutContainer = styled.div`
  min-width: 375px;
  max-width: 400px;
  height: 100vh;
  background: #f2f2f2;
  padding-top: 48px;
  padding-bottom: 99px;
  margin: 0 auto;
  overflow: auto;
  padding-left: 20px;
  padding-right: 20px;

  overflow-y: scroll;
  overflow-x: hidden;

  /* 웹킷 계열(Chrome, Edge, Safari) */
  &::-webkit-scrollbar {
    display: none;
  }

  /* 파이어폭스 */
  scrollbar-width: none;

  /* IE, 옛 Edge */s
  -ms-overflow-style: none;

  padding-left: 20px;
  padding-right: 20px;
`;
