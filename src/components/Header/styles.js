import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  height: 105px;
  display: flex;
  align-items: center;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  padding: 0 120px;
`;
export const Content = styled.div`
  display: flex;
  max-width: 1137px;
  margin: 0 auto;
  gap: 64px;
`;
export const Brand = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;
export const Search = styled.div`
  display: flex;
  flex: 1;
  width: 630px;
`;
export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 16px;
    line-height: 24px;

    span {
      font-size: 14px;
      text-align: right;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
    strong {
      font-size: 18px;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;
