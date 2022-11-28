import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 100%;
  height: 100vh;
  display: grid;

  grid-template-rows: 105px 125px auto;
  grid-template-areas:
    "header"
    "menuItem"
    "content";
`;
export const MenuItem = styled.div`
  width: 1137px;
  margin: 0 auto;
  grid-area: menuItem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 42px;
  }
  > button {
    display: flex;
    align-items: center;
    width: 207px;

    svg {
      margin-right: 2px;
    }
  }
`;

export const Content = styled.div`
  max-width: 1137px;
  max-height: 550px;
  margin: 0 auto;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 3px;
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 3px;
  }
`;
export const NewMovie = styled(Link)``;
